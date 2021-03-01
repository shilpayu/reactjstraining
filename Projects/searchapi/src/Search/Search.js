import React,{useState} from 'react';
import SearchResult from '../SearchResult/SearchResult';

function Search(){
    const [search,setSearch] = useState('');
    const [result,setResult] = useState('');
    function SearchEventHandle(e){
       setSearch(e.target.value);
    }
   const searchResults = async() => { 
            const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${search}`);
            const data = await results.json();
            console.log(data);
            console.log(data['items']);
            setResult(data.items);
    }
    return (
        <div>
           <h1>Search</h1>
           <input type="text" 
            name="search" 
            value={search}
            onChange = {SearchEventHandle}
            />
            <button onClick={searchResults}>Search</button>
            <div>
                {result && <SearchResult result={result} isbn={search}/>}
            </div>
        </div>
    );
}
export default Search;