import { combineReducers } from "redux";
import { videoReducer } from "./reducer";
const reducers=combineReducers({
    AllVideos:videoReducer
})
export default reducers