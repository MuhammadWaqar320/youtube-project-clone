
import ActionType from "../action-type/action-type";
const initialState={
    allVideos:[]
}
export const videoReducer=(state=initialState,{type,payload})=> 
{
    switch(type)
    {
        case ActionType.SET_VIDEOS:
            return {...state,allVideos:payload};
        default:
            return state;
    }
}



