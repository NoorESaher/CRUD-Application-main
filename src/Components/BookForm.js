import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";  // useSelector is useContext or consumer here
import { updateAddBook } from "../actions";
// import { updateBookAuthor, updateBookName, updateBookPrice, updateBookQuantity } from '../actions/index';
// import {addBook, updateAddBook} from '../actions/index';
//import { bindActionCreators } from "redux";
//import { incNumber, decNumber } from "../actions";

const BookForm = (props) => {

  // const myState = useSelector((state) => state.incNumber)
  const dispatch = useDispatch();


  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    price: props.book ? props.book.price : "",
    date: props.book ? props.book.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;

  // Once Form is Submitted that HOS method will be Called
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = "";
    //console.log(values);

    // once we submit the form, the handleOnSubmit method will be called.
    //Inside this method, we're first checking if the user has entered all the details using the every array method:
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });


    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(book);
      console.log('book', book);
      dispatch(updateAddBook({ book }))
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
    //dispatch(updateBookName({ [name]: value }))
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}

          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            // onChange={(e) => dispatch(updateBookAuthor({ bookauthor: e.target.value }))}
            onChange={handleInputChange}

          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            // onChange={(e) => dispatch(updateBookQuantity({ bookquantity: e.target.value }))}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            // 
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* className="submit-btn" */}
        {/* title="addbook"  */}

        <Button variant="primary" type="submit" className="submit-btn" >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
