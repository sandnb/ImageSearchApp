import "./styles.css";
import {useState} from 'react';
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import SearchBar from "./components/SearchBar";
import searchImages from './api';

function App() {
  const [images,setImages] = useState([]); // here we have used the state thing as every time we search for something and we get the store result of that in 'result' and we get the response from api is in array format so we do need to 'update' the screen everytime so we used the state// 
  const handleSubmit = async (term) => {
    const result = await searchImages(term); 
    setImages(result); // here we used async and await as this resulting in promise as 'result';
  };
    
// when we update state the component and all of its children are rendered//
// from App perspective images is State //
// from ImageList view images is props //
// so above this might be a confusing that we are sending 'images' which are state in App as props to the Imagelist from App //
  return (
        <div className="App">
          <SearchBar onSubmit={handleSubmit}/> 
          <ImageList images= {images}/>
        </div>
  );
}
export default App;


