import ActionType from "../action-type/action-type"
export const setVideos=(videos)=>
{
    return ({
        type:ActionType.SET_VIDEOS,
        payload:videos,
    })
}
