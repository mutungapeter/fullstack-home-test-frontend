import { useQuery } from "@apollo/client";
import {
  Autocomplete,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import "../App.css";
import GET_BOOKS_QUERY from "../Query/GetBooks";
import { Book } from "../types/book";

const SearchBook = () => {
  const { data } = useQuery(GET_BOOKS_QUERY);
  const [booksList, setBooksList] = useState<Book[]>([]);
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (data && data.books) {
      setBooksList(data.books);
    }
    const storedReadingList = localStorage.getItem('readingList');
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
  }, [data]);

  const handleAddToReadingList = (book: Book) => {
    setSelectedBook(book);
    setOpenDialog(true);
  };

  const handleConfirmAddToReadingList = () => {
    // if (selectedBook) {
    //   setReadingList([...readingList, selectedBook]);
    //   setOpenDialog(false);
    // }
    if (selectedBook) {
      const updatedReadingList = [...readingList, selectedBook];
      setReadingList(updatedReadingList);
      localStorage.setItem('readingList', JSON.stringify(updatedReadingList));
      setOpenDialog(false);
    }
  };
  console.log("readingList", readingList);
  return (
    <>
      <Box
        component="section"
        sx={{ p: { xs: 1, sm: 4, md: 10 }, border: "none" }}
      >
        <Autocomplete
          disableClearable
          options={booksList}
          getOptionLabel={(option: Book) => option.title}
          renderOption={(props, option: Book) => (
            <List sx={{ paddingX: { md: 5, xs: 2, sm: 3 } }}>
              <ListItem disablePadding>
                <ListItemText
                  primary={option.title}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                  secondary={`by ${option.author}`}
                />
                   {/* <ListItemText
                  primary={option.author}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                /> */}
                <Button
                  variant="outlined"
                  style={{ color: "var(--primary-turquoise)" }}
                  size="small"
                  onClick={() => handleAddToReadingList(option)}
                >
                  Add to Reading List
                </Button>
              </ListItem>
            </List>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Book"
              InputProps={{
                ...params.InputProps,
                type: "book",
              }}
            />
          )}
        />
      </Box>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm Add to Reading List
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to add "{selectedBook?.title}" to your reading
            list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmAddToReadingList} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      
 
    </>
  );
};
export default SearchBook;
