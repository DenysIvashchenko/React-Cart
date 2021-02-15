import CartList from '../containers/CartList';
import GoodsList from '../containers/GoodsList';
import './App.css';

function App() {
  return (
    <div className="container">
      <GoodsList />
      <CartList />
    </div>
  );
}

export default App;
