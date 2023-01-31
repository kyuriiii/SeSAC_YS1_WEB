import Contact from "./Contact";
import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { createStore } from "redux";

export default function App() {


    function reducer(state = [], action) {
        if ( action.type == "ADD" ) {
            return [...state, action.payload];
        }
        return state;
    }
    const store = createStore(reducer)
    return (
    <>
    <Provider store={store}>
         개수 : { list.length } 
        <br />
       <Contact />
    </Provider>
    </>
    );
}