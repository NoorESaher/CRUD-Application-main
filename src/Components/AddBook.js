import React from "react";
import BookForm from "./BookForm";

const AddBook = ({ history, books, setBooks }) => {
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push("/");
  };
  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;

// First, we're using ES6 destructuring syntax to access the history, books and setBooks props into the component.

// The history prop is automatically passed by React Router to every component mentioned in the <Route />. We're passing the books and setBooks props from the AppRouter.js file.
// History Push is used to redirect user to BookList Page
