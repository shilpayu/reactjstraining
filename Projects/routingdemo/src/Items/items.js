import React, {useState} from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Items() {
    let [items,setItems] = useState([]);
    useEffect(() => {
      fetchItems();
    },[]);
    async function fetchItems () {
        const results = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`);
        const item = await results.json();
        console.log(item.data);
        setItems(item.data); 
        console.log(items);
    }
    return (
        <div>
            <h2>Items</h2>
            <button onClick={fetchItems}>Click</button>
            {items && items.map((res) => {
               return <h1  key={res.itemId}><Link to={`/items/${res.itemId}`}>{res.item.name}</Link></h1>
            })}
        </div>
    );
}

export default Items;