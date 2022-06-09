import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import AddBook from "../Components/AddBook";
import BooksList from "../Components/BooksList";
import useLocalStorage from "../Hooks/useLocalStorage.js";
import EditBook from "../Components/EditBook";
import Redirect from "../Components/Redirect";

const AppRouter = () => {
const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
           
           <Switch>
            {/* pass the books and setBooks as props to the AddBook component. */}
            <Route
            render={(props) => (
            <BooksList {...props} books={books} setBooks={setBooks} />
              )}
            path="/" exact={true}/>

            {/* //To pass the Book and setBook to prop */}
            <Route
            render={(props) => (
            <AddBook {...props} books={books} setBooks={setBooks} />
              )}
            path="/add"/>
            
            {/* The first Route is for the EditBook component. Here, the path is defined as /edit/:id where :id represents any random id.
             The second Route is to handle all other routes that do not match with any of the routes mentioned. */}

            <Route
            render={(props) => (
            <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"/>
            
            {/* to handle all other routes that do not match with any of the routes mentioned. So if we access any random route like /help or /contact then we'll redirect the user to the / route which is the BooksList component.  */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
