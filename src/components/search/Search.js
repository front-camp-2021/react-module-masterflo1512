import './search.scss';
import { Link } from "react-router-dom";
export function Search(props) {
    const { setSearchData, searchData, totalProducts } = props


    const handleFilter = (event) => {
        const searchWord = event.target.value
        setSearchData(searchWord)
    }

    return (
        <div className="header-search">
            <div className="result-search-icon">
                <div className="search-result">
                    {totalProducts > 0 ? `${totalProducts} results found` : ''}
                </div>
                <div className="btn-fav-cart">
                    <Link to="/favorites">
                        <button className="btn-favorite">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="#6F64F8" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M14.9304 2.14929C14.1856 1.41343 13.1751 1 12.1214 1C11.0678 1 10.0573 1.41343 9.31241 2.14929L8.54698 2.90512L7.78154 2.14929C6.23017 0.61741 3.7149 0.617411 2.16353 2.14929C0.612157 3.68118 0.612157 6.16485 2.16353 7.69674L2.92896 8.45256L8.54698 14L14.165 8.45256L14.9304 7.69674C15.6756 6.96122 16.0943 5.96344 16.0943 4.92302C16.0943 3.88259 15.6756 2.88481 14.9304 2.14929Z"
                                    stroke="white" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button className="btn-cart">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd"
                                    d="M4.52469 1L1.64958 4.6V17.2C1.64958 18.1941 2.50774 19 3.56632 19H16.9835C18.0421 19 18.9003 18.1941 18.9003 17.2V4.6L16.0251 1H4.52469Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.737212" d="M1.64958 5.5H18.9003" stroke="white" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.737212"
                                    d="M14.5876 9C14.5876 10.6569 12.8981 12 10.814 12C8.72991 12 7.04042 10.6569 7.04042 9"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="search-box">
                <input type="search" className="input" placeholder="Search" value={searchData} onChange={handleFilter} />
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M8.64073 17C12.696 17 15.9835 13.4183 15.9835 9C15.9835 4.58172 12.696 1 8.64073 1C4.58544 1 1.29797 4.58172 1.29797 9C1.29797 13.4183 4.58544 17 8.64073 17Z"
                        stroke="#606060" strokeWidth="2" strokeLinejoin="round" strokeLinejoin="round" />
                    <path d="M17.8192 19L13.23 14" stroke="#606060" strokeWidth="2" strokeLinejoin="round"
                        strokeLinejoin="round" />
                </svg>
            </div>
        </div >
    )
}

