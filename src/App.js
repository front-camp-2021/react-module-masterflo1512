import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from './components/header/Header.js'
import { Filter } from './components/filter/Filter.js'
import { Search } from './components/search/Search.js'
import { Productlist } from './components/product-list/Product-list.js'
import { Pagination } from './components/pagination/Pagination.js'
import { backendUrl } from './constants'

function App() {
  const [products, setproducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    axios.get(`${backendUrl}products?_limit=10&_page=${currentPage}&q=${searchData}`)
      .then(res => setproducts(res.data))
  }, [currentPage, searchData])
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <Filter />
        </div>
        <div className="col-md-8 col-ms-6">
          <Search searchData={searchData} setSearchData={setSearchData} />
          <Productlist list={products} />
        </div>
      </div>
      <Pagination pages={9} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  );
}

export default App;

