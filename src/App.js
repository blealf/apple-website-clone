import './App.css';
import Header from './components/header/Header.jsx'
import Advert from './components/header/Advert.jsx'
import Products from './components/product/Products.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Advert/>
      <Products/>
    </div>
  );
}

export default App;
