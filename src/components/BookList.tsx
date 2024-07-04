
import {
  useQuery
} from "@apollo/client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../App.css";
import GET_BOOKS_QUERY from "../Query/GetBooks";
import { Book } from "../types/book";
import Loading from "./Loading";

const BooksList =()=>{
    const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
    console.log("data", data)
  
    if (loading) {
      return (
       <Loading />
      );
    }
    if (error) {
      return (
        <Typography 
        variant="body2"
         color="textSecondary"
         style={{ color: "var(--primary-turquoise)" }}
         sx={{ fontSize: { xs: 12, sm: 16 }, fontWeight: "semibold" }} 
        component="p">
          Error occured while loading books
        </Typography>
      );
    }
    return (

      
        <Box component="section" sx={{ p:{xs:2, sm: 4, md: 10},  border: 'none' }}>
        <Grid
         container 
        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
        {data && data.books.map((book: Book, index: number) => (
          <Grid item
        xs={2} sm={2} md={2} key={index}
           >
            <Card 
             sx={{
                maxWidth: 200,
                height: '100%',  
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none'
              }}
            >
           
              <CardMedia
                component="img"
                alt={book.title}
                sx={{ height: 140 }}
                image={book.coverPhotoURL}
                title={book.title}
              />
              <CardContent
              sx={{ flexGrow: 1, padding: { xs: 1, sm: 2 } }}
              >
                <Typography gutterBottom 
                 variant="h5" component="div" 
                 style={{ color: "var(--primary-steel-blue)" }}
                 sx={{  fontSize: { xs: 12, sm: 16 }, fontWeight: "bold" }}
                 >
                  {book.title}
                </Typography>
                <Typography 
                variant="body2"
                 color="textSecondary"
                 style={{ color: "var(--primary-turquoise)" }}
                 sx={{ fontSize: { xs: 12, sm: 16 }, fontWeight: "semibold" }} 
                component="p">
                  by {book.author}
                </Typography>
                <Typography variant="body2" 
                color="textSecondary" 
                component="p"
                style={{ color: "var(--primary-yellow)" }}
                sx={{ fontSize: { xs: 12, sm: 16 }, fontWeight: "semibold" }} 
                >
                  Reading Level: {book.readingLevel}
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    
    
    )
}
export default BooksList

