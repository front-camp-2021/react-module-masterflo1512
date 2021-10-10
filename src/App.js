import { Header } from './components/header/Header.js'
import { Filter } from './components/filter/Filter.js'
import { Search } from './components/search/Search.js'
import { Productlist } from './components/product-list/Product-list.js'
import { Pagination } from './components/pagination/Pagination.js'
function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <Filter />
        </div>
        <div className="col-md-8 col-ms-6">
          <Search />
          <Productlist />
        </div>
      </div>
      <Pagination />
    </div>
  );
}

export default App;
