import React from 'react';
import  ReactDOM  from 'react-dom';
import { createStore } from 'redux';


//Store 

//actions

const increment =() =>{
    return {
        type:"INCREMENT"
    }
}

const decrement =()=>{
    return {
        type:"DECREMENT"
    }
}

//reducer
const counter =(state=0, action) =>{
     switch(action.type){
         case "INCREMENT":
             return state + 1
         break

         case "DECREMENT":
              return state - 1
         break
     }
}

let store = createStore(counter)   //pass a reducer to a store


//display in console
store.subscribe(()=>{console.log(store.getState())})

//dispatch
store.dispatch(increment)

