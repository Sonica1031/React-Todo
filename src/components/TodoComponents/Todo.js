import React from 'react';
import {useDrag} from "react-dnd";

function Todo(props){
    return(

        <div className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={e => props.toggleCompleted(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;