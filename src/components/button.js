import React from 'react';
const Toggle = (props)=>{
    return(
        <button onClick={()=>{props.changeStatus()}}>Toggle</button>
    )
}
export default Toggle