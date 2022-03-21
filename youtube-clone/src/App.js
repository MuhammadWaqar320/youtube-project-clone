
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Search from './pages/searchPage/search';
import Shorts from './pages/shortsPage/shorts';
import Home from './pages/homePage/home';
import UploadVideo from './pages/uploadVideoPage/uploadVideo';
import Explore from './pages/explorePage/explore';
import CategoryPage from './pages/category/categoryPage';
import axios from 'axios';
import { useEffect } from 'react';
import { setVideos } from './redux/action/action';
import { useDispatch } from 'react-redux';
import VideoDetail from './pages/videoDetail/video_detail';
const  App=()=> {
 const endpoint="http://localhost:5000/video/get";
 const dispatch=useDispatch();
const fetchDataFromApi=async()=>
{
    try {
      const {data}=await axios.get(endpoint);
     dispatch(setVideos(data))
    } catch (error) {
      console.log(error.message)
    }
}
//   useEffect(()=>
// {
  fetchDataFromApi();
// })
  return (
<div className='App'>
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/category/:title" element={<CategoryPage />} />
      <Route path="/shorts" element={<Shorts/>} />
      <Route path="/upload" element={<UploadVideo/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/videoDetail/:id" element={<VideoDetail/>} />
    </Routes>
</div>
  
  );
}

export default App;
