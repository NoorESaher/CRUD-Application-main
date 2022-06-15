// import React from "react";

const addUserReducer = (state = {}, action) => {
    switch (action.type) {

        case "CHANGE_AddBook": {
            // console.log('state', state);
            //console.log('action.payload', action.payload);
            state = { ...state, ...action.payload }
            break;
        }


        // case "CHANGE_BookPrice": {
        //     state = { ...state, ...action.payload }
        //     break;
        // }
        // case "CHANGE_BookName": {
        //     state = { ...state, ...action.payload }
        //     break;
        // }
        // case "CHANGE_BookAuthor": {
        //     state = { ...state, ...action.payload }
        //     break;
        // }
        // case "CHANGE_BookQuantity": {
        //     state = { ...state, ...action.payload }
        //     break;
        // }
        // case "CHANGE_BookPrice": {
        //     state = { ...state, ...action.payload }
        //     break;
        // }

    }
    return state;
}


export default addUserReducer;
