import './assets/main.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Error404 from './components/Error404/Error404';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//--

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />


        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
