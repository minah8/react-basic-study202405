import './App.css';
import Cart from './components/Food/Cart/Cart';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <div id="main">
        <Meals />
      </div>
    </>
  );
};

export default App;
