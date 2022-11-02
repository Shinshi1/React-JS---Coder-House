import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <ItemListContainer greeting="Mis Productos" />
        </header>
      </div>
    </>
  );
}

export default App;
