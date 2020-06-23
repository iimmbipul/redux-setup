let initialState = {
    sound : false
}

function soundReducerFunction(state=initialState,action){
    let stateCopy = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case "CHANGE_SOUND":
            if(stateCopy.sound){
                stateCopy.sound = false
            }else{
                stateCopy.sound = true
            }
            return stateCopy
    }
    return stateCopy;
}
export default soundReducerFunction;