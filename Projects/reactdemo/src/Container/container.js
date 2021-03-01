import React,{useState} from 'react';
import Presentational from '../presentation/Presentational';

function Container(){
    const [val,setVal] = useState('container demo');
    const [text,setText] = useState(false);
    function showText(e){
      setVal(e.target.value);
      setText(false);
    }
    function Submit(){
        setText(true);
    }
    return (
       <div>
           <input type="text" onChange={showText} value={val}/>
           <button value="show text" onClick={Submit}>Show Text</button>
           {text && <Presentational text={val}/>}
       </div>
    );
}

export default Container;