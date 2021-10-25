import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from './components/header/Header.js'
import { Filter } from './components/filter/Filter.js'
import { Search } from './components/search/Search.js'
import { Productlist } from './components/product-list/Product-list.js'
import { Pagination } from './components/pagination/Pagination.js'
import { backendUrl } from './constants'

function getQueryFilter(filters, filterName) {
  return filters
    .map((elem) => {
      return `${filterName}=${elem}`;
    })
    .join("&");
}

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchData, setSearchData] = useState('')
  const [totalProducts, setTotalProducts] = useState(0)
  const [categoriesFilter, setCategoriesFilter] = useState([])
  const [brandsFilter, setBrandsFilter] = useState([])
  console.log(categoriesFilter);
  useEffect(() => {
    axios.get(`${backendUrl}products?_limit=10&_page=${currentPage}&q=${searchData}&${getQueryFilter(categoriesFilter, 'category')}&${getQueryFilter(brandsFilter, 'brand')}`)
      .then(res => {
        setProducts(res.data)
        setTotalProducts(Number(res.headers['x-total-count']))
      })
  }, [currentPage, searchData, categoriesFilter, brandsFilter])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchData, categoriesFilter, brandsFilter])

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <Filter setCategoriesFilter={setCategoriesFilter} setBrandsFilter={setBrandsFilter} />
        </div>
        <div className="col-md-8 col-ms-6">
          <Search searchData={searchData} setSearchData={setSearchData} totalProducts={totalProducts} />
          <Productlist list={products} />
        </div>
      </div>
      <Pagination pages={Math.ceil(totalProducts / 10)} currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  );
}

export default App;

