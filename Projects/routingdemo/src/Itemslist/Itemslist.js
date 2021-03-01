import React, {useState} from 'react';
import {useEffect} from 'react';

function Itemlist({match}){
    let [listitems,setListitems] = useState([]);
    useEffect(() => {
        fetchItemsList();
    },[]);
    async function fetchItemsList () {
        const results = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await results.json();
        console.log(item.data);
        setListitems(item.data); 
        console.log(listitems);
    }
    return (
        <div>
            <h2>Items List</h2>
            <h3>Name : {listitems.item.name}</h3>   
            <h3>Description : {listitems.item.description}</h3>         
        </div>
    );
}
export default Itemlist;