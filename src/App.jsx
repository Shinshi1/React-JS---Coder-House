import './assets/main.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

//--

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
