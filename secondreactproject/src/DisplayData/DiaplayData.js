import React from 'react';
 
function DisplayData(props) {
    return (
        <div>
            <p>{props.city}</p>
            <p>{props.unit}</p>
        </div>
    );
}
export default DisplayData;