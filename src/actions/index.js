// import React from "react";
// import { bindActionCreators } from "redux";
// import BookForm from "../Components/BookForm";
//import store from "../store";


// export const incNumber = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// export const decNumber = () => {
//     return {
//         type: 'DECREMENT'
//     }
// };
export const incNumber = payload => ({ type: "INCREMENT", payload });
export const decNumber = payload => ({ type: "DECREMENT", payload });

// export const addBook = () => {
// return {
//         type: 'ADDBOOK'

//     }
// }


export const updateAddBook = payload => ({ type: "CHANGE_AddBook", payload });
//    export const addBook = payload => ({ type: "CHANGE-AddBook", payload});
// export const updateBookName = payload => ({ type: "CHANGE_BookName", payload });
// export const updateBookAuthor = payload => ({ type: "CHANGE_BookAuthor", payload });
// export const updateBookQuantity = payload => ({ type: "CHANGE_BookQuantity", payload });
// export const updateBookPrice = payload => ({ type: "CHANGE_BookPrice", payload });




// Increment and Decrement are Two Actions Here
//export const incNumber = () => {        ----> This Line creates Pure Function, incNumber is a function
//    return {
//        type: 'INCREMENT',              -----> Increment is an Action
//   }