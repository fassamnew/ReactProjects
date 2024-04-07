import React from 'react'
import BookList from './Components/BookList';
import Navbar from './Components/NavBar';
import NewBookForm from './Components/NewBookForm';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <NewBookForm></NewBookForm>
     </BookContextProvider>
    </div>
  );
}

export default App;
