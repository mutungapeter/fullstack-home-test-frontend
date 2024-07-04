import { gql } from '@apollo/client';


const GET_BOOKS_QUERY = gql`
  query Books {
    books {
        author
        coverPhotoURL
        readingLevel
        title
    }
  }
`;
export default GET_BOOKS_QUERY;