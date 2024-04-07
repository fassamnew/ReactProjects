import React, {createContext,  useReducer, useEffect} from 'react';
import { bookReducer } from '../Reducers/bookReducers';
//import {v1 as uuid} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch]=useReducer(bookReducer, [], () => {
        const localData= localStorage.getItem('books');
        return localData? JSON.parse(localData): [];
    });
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books));
    });
   /*const [books, setBooks]=useState([
        {title: 'Fiker eske mekabr', author: 'Addis Alemayehu', id: 1},
        {title: 'Yelmzhat', author: 'Addis Alemayehu', id: 2}
    ]);
    const addBook = (title, author) => {
        setBooks([...books,{title, author, id: uuid()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book=> book.id !== id));
    };*/
    return(
   
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );

}
export default BookContextProvider;
