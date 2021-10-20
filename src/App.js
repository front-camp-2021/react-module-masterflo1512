import { Header } from './components/header/Header.js'
import { Filter } from './components/filter/Filter.js'
import { Search } from './components/search/Search.js'
import { Productlist } from './components/product-list/Product-list.js'
import { Pagination } from './components/pagination/Pagination.js'
import { products } from './fixtures/products.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {

  const [products, setproducts] = useState([])
  console.log(products);
  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => setproducts(res.data))
  }, [])

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <Filter />
        </div>
        <div className="col-md-8 col-ms-6">
          <Search />
          <Productlist list={products} />
        </div>
      </div>
      <Pagination pages={9} />
    </div>
  );
}

export default App;

