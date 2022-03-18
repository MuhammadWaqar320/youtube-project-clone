
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Search from './pages/searchPage/search';
import Shorts from './pages/shortsPage/shorts';
import Home from './pages/homePage/home';
import UploadVideo from './pages/uploadVideoPage/uploadVideo';
import Explore from './pages/explorePage/explore';
import CategoryPage from './pages/category/categoryPage';

const  App=()=> {
  return (
<div className='App'>
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="/category/:title" element={<CategoryPage />} />
      <Route path="/shorts" element={<Shorts/>} />
      <Route path="/upload" element={<UploadVideo/>} />
      <Route path="/explore" element={<Explore/>} />
    </Routes>
</div>
  
  );
}

export default App;
