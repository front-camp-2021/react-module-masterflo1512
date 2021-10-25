import axios from 'axios'
import { useEffect, useState } from 'react'
import './filter.scss';
import { FilterList } from './filter-list/FilterList.js'
import { backendUrl } from '../../constants'

export function Filter({ setCategoriesFilter, setBrandsFilter }) {
    const [categoriesList, setCategoriesList] = useState([])
    const [brandsList, setBrandsList] = useState([])

    useEffect(() => {
        axios.get(`${backendUrl}categories`)
            .then(res => {
                setCategoriesList(res.data.map(category => {
                    return {
                        title: category,
                        value: 100
                    }
                }))
            })
        axios.get(`${backendUrl}brands`)
            .then(res => {
                setBrandsList(res.data.map(brand => {
                    return {
                        title: brand,
                        value: 100
                    }
                }))
            })

    }, [])
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
                <FilterList list={categoriesList} title="Category" setFilter={setCategoriesFilter} />
                <div className="divider"></div>
                <FilterList list={brandsList} title="Brand" setFilter={setBrandsFilter} />
            </div>
            <div className="btn">
                <button className="btn-filters">
                    <span className="btn-title">clear all filters</span>
                </button>
            </div>
        </div>
    );
}

