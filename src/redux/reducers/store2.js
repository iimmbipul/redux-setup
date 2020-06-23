let initialState = {
    video : false
}

function videoReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case "CHANGE_VIDEO":
            if(stateCopy.video){
                stateCopy.video = false
            }else{
                stateCopy.video = true
            }
            return stateCopy
    }
    return stateCopy;
}
export default videoReducerFunction;