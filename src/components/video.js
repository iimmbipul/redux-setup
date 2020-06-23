import React from 'react';
import {connect} from 'react-redux'
import {toggleVideo} from './../redux/action/action';
import Toggle from './button';
import {bindActionCreators} from 'redux'
const mapStatetoProps = (store)=>{
    //console.log(store);
    return{
        video:store.video.video
    }
}
const mapDispatch = (dispatch)=>{
    return bindActionCreators({toggleVideo},dispatch)
}
const Video = (props)=>{
    const toggleStatus=()=>{
        props.toggleVideo()
    }
    return(
    <div>
        Video : {props.video && <span>ON</span>}{!props.video && <span>OFF</span>}
        <Toggle changeStatus={()=>toggleStatus()}/>
    
    </div>
    )
}
export default connect(mapStatetoProps,mapDispatch)(Video)