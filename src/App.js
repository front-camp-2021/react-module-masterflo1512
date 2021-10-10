import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header.js'
import { Filter } from './components/filter/Filter.js'
import { Search } from './components/Search/Search.js'
import { Card } from './components/card/Card.js'
import { Productlist } from './components/product-list/Product-list.js'
import { Pagination } from './components/pagination/Pagination.js'
function App() {
  return (
    <div class="container">
      <Header />
      <div class="row">
        <div class="col-md-4 col-ms-6">
        </div>
        <div class="col-md-8 col-ms-6">
        </div>
      </div>
    </div>
  );
}

export default App;
