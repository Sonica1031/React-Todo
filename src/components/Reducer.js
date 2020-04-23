import React from 'react';
export { TodoData } from '../data';

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const COMPLETE = "COMPLETE";
export const DRAG_DROP = "DRAG_DROP";

const Reducer = (state, action) => {
    const Todo= {
        id: Date.now(),
        completed: false,
        name: "",
    }
    switch (action.type){
        case ADD_ITEM:
            {
               return state=[...state, {...Todo, name: action.payload}]
        }
        case REMOVE_ITEM:
            {
              return state=[...state.filter(item => item.completed === false)]
            }
      
        case COMPLETE:
            {
                return state.map(item =>{
                    if (item.id === action.payload){
                    return {
                        ...item,
                        completed: !item.completed
                    }}
                    else {
                        return item
                    }
                }
                )
            }
        case DRAG_DROP:
            {
                return;
            }
        default:
            return state;
    }
}

export default Reducer;