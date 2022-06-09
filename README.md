# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


// By Noor e Saher
Here in This Project
1- First I created Components. In Header.js Only I only specify two Links (Books List and Add Book)using Navlink instaed of Anchor Tag So it will not Reload After Render.
2- In Booklist.js I simply Add Message (No books available. Please add some books).
3- In AddBook.js I Initialized HandleOnSubmit Function which will Call in BookForm page when anyone Click on Submit Button after Filling the Form.
4- In BookForm.js First I Initialized UseState Hook using Props.(Props are use to Render properties of Parent Component to Child Component). In everyfilef of Form I use onChange={handleInputChange}, when OnSubmit Fuunction is called it will {handleInputChange}. On upper portion of Fields Validations are added in switch case. once we submit the form, the handleOnSubmit method will be called.
Inside this method, we're first checking if the user has entered all the details using the every array method:Once every filed is filled and anyone click on Submit Button it will call HandleOnSubmit Function and Move a user to AddBook Components. 
5- Every Component is imported to AppRouter.js where we use UseContext State (By using it we dont need to add props to every page we simply add useContext and render parent component to every child component).  In Context Folder BooksContext.js is only added to import BooksContext.
Books.js and EditBooks.js is created to Edit and Delete any Book from LocalHost and UI.
whenever we're clicking on the Edit button for any of the books In Book.js Component, we're redirecting the user to the EditBook component using the history.push method by passing the id of the book to be edited.
Then inside the EditBook component, we're using the useParams hook provided by react-router-dom to access the props.params.id. Once we've gotten that id, we're using the array find method to find out the particular book from the list of books with the matching provided id and this particular book we're passing to the BookForm component as a book prop: In the BookForm Component It will again check all the validations and return edited Data. That's How this CRUD APPLICATION Works. 
Redirect.js is only created so if anyone search for any component from LOCALHOST Browser like localhost/contact or localhost/profile than it will redirect to Landing Page.
