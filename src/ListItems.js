import React from 'react';
import './ListItems.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => 
        {
        return <div className = "list" key = "item.key">
        <p>{item.text}
        <span>
            <h6 className = "faicons" onClick = {() => props.deleteItem(item.key)}>Delete</h6>
            </span>
        </p>
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems;