import React from 'react';

function SearchResult(props){
   return (
       <div>
        {props.result.map((result, index) => (
           <p><h3>Searched Result is:</h3> {props.isbn}, {result.volumeInfo.authors[0]}, {result.volumeInfo.title}</p>  
        ))}
        </div>
   );
}

export default SearchResult;