import React from 'react';
import {connect} from 'react-redux'
import Toggle from './button';
import {toggleSound} from './../redux/action/action'
import {bindActionCreators} from 'redux'
const mapStatetoProps = (store)=>{
   // console.log(store);
    return{
        audio:store.audio.sound
    }
}
const mapDispatch = (dispatch)=>{
    return bindActionCreators({toggleSound},dispatch)
}
const Sound = (props)=>{
    //console.log("sond",props)
    const toggleStatus=()=>{
        props.toggleSound()
    }
    return(
    <div>
        Sound : {props.audio && <span>ON</span>}{!props.audio && <span>OFF</span>}
        <Toggle changeStatus={()=>toggleStatus()}/>
    
    </div>
    )
}
export default connect(mapStatetoProps,mapDispatch)(Sound)