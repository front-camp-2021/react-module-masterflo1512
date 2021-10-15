import './filter.scss';
import { FilterList } from './filter-list/FilterList.js'



export function Filter() {
    const categoriesList = [
        {
            title: "cell phones",
            value: 1920,
        },
        {
            title: "Computers & Tablets",
            value: 1820,
        },
        {
            title: "Cell Phone Accessories",
            value: 462,
        },
        {
            title: "Appliances",
            value: 6556,
        },
        {
            title: "Audio",
            value: 120,
        },
        {
            title: "iPhone Accessories",
            value: 353,
        },
        {
            title: "Cameras & Camcorders",
            value: 45,
        },
        {
            title: "iPhone Cases & Clips",
            value: 456,
        },
        {
            title: "TV & Home Theater",
            value: 55,
        },
        {
            title: "cSmall Kitchen Appliances",
            value: 10,
        }
    ]


    const brandsList = [
        {
            title: "Insigni",
            value: 220,
        },
        {
            title: "Samsung",
            value: 120,
        },
        {
            title: "Apple",
            value: 320,
        },
        {
            title: "HP",
            value: 32,
        },
        {
            title: "Sony",
            value: 520,
        },
        {
            title: "Metra",
            value: 55,
        },
        {
            title: "Dyne",
            value: 120,
        },
        {
            title: "LG",
            value: 98,
        },
        {
            title: "Canon",
            value: 99,
        },
        {
            title: "Speck",
            value: 575,
        }
    ]


    return (
        <div className="filters-container">
            <div className="filters-header">
                <h2>Filters</h2>
                <button className="collapse-filters-btn">
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297" stroke="black" strokeLinecap="round"
                            strokeLinejoin="round" />
                        <path d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297" stroke="black" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className="filters">
                <div className="price-range">
                    <h3 className="filter-title">Multi range</h3>
                    <div className="prices">
                        <div>
                            <label>
                                <input type="radio" name="price" />
                                10$
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="price" />
                                10-100$
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="price" />
                                100-500$
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="price" />
                                500$
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="price" />
                                All
                            </label>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <FilterList list={categoriesList} title="Category" />
                <div className="divider"></div>
                <FilterList list={brandsList} title="Brand" />
            </div>
            <div className="btn">
                <button className="btn-filters">
                    <span className="button-title">clear all filters</span>
                </button>
            </div>
        </div>
    );
}

