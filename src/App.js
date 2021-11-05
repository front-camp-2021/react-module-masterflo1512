import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components/header/Header.js";
import { Filter } from "./components/filter/Filter.js";
import { Search } from "./components/search/Search.js";
import { Productlist } from "./components/product-list/Product-list.js";
import { Pagination } from "./components/pagination/Pagination.js";
import { backendUrl } from "./constants";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(85000);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      _limit: 10,
      _page: currentPage,
      q: searchData,
      price_lte: maxPrice,
      price_gte: minPrice,
    });

    brandsFilter.forEach((f) => {
      queryParams.append("brand", f);
    });

    categoriesFilter.forEach((f) => {
      queryParams.append("category", f);
    });

    axios.get(`${backendUrl}products?${queryParams.toString()}`).then((res) => {
      setProducts(res.data);
      setTotalProducts(Number(res.headers["x-total-count"]));
    });
  }, [
    brandsFilter,
    categoriesFilter,
    currentPage,
    maxPrice,
    minPrice,
    searchData,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [brandsFilter, categoriesFilter, maxPrice, minPrice, searchData]);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4 col-ms-6">
          <Filter
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            categoriesFilter={categoriesFilter}
            brandsFilter={brandsFilter}
            setCategoriesFilter={setCategoriesFilter}
            setBrandsFilter={setBrandsFilter}
          />
        </div>
        <div className="col-md-8 col-ms-6">
          <Search
            searchData={searchData}
            setSearchData={setSearchData}
            totalProducts={totalProducts}
          />
          <Productlist list={products} />
        </div>
      </div>
      <Pagination
        pages={Math.ceil(totalProducts / 10)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
