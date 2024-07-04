import { DeleteOutline } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Book } from '../types/book';
import Loading from './Loading';



const ReadingList = () => {
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    const storedReadingList = localStorage.getItem('readingList');
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
    setLoading(false);
  }, []);

  const handleDelete = (index: number) => {
    const updatedReadingList = readingList.filter((_, i) => i !== index);
    setReadingList(updatedReadingList);
    localStorage.setItem('readingList', JSON.stringify(updatedReadingList));
    handleClose();
  };

  const handleClickOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedIndex(null);
  };

 
  return (
    <Box component="section" sx={{ p: { xs: 0, sm: 4, md: 6 }, border: "none" }}>
      <Typography variant="h5" style={{ color: "var(--primary-steel-blue)", marginTop: "5px" }}  gutterBottom>Reading List</Typography>
      {loading ? (
        <Loading />
      )
        :readingList.length > 0 ? (
        <List >
       {readingList.map((book, index) => (
            <ListItem key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'start', sm: 'center' },
              gap: 2,
            }}
            >
                <ListItemAvatar>
                  <Avatar alt={book.title} src={book.coverPhotoURL} />
                </ListItemAvatar>
                <ListItemText 
                  primary={book.title} 
                  secondary={`by ${book.author}`}
                />
                 <Button 
                  variant="outlined" 
                  style={{ color: "var(--primary-turquoise)" }}
                  // onClick={() => handleDelete(index)}
                  onClick={() => handleClickOpen(index)}
                  startIcon={<DeleteOutline />}
                >
                  Delete
                </Button>
                
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No books in the reading list.</Typography>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book from your reading list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "var(--primary-steel-blue)" }}>
            Cancel
          </Button>
          <Button onClick={() => handleDelete(selectedIndex!)} style={{ color: "var(--primary-turquoise)" }}  autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ReadingList