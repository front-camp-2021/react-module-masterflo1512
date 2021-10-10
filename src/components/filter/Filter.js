export function Filter() {
    return (
        <div className="filters-container">
            <div className="filters-header">
                <h2>Filters</h2>
                <button className="collapse-filters-btn">
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
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
                <div className="category">
                    <h3 className="filter-title">Category</h3>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Cell Phones
                        </label>
                        <span className="amount">1920</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Computers & Tablets
                        </label>
                        <span className="amount">1820</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Cell Phone Accessories
                        </label>
                        <span className="amount">462</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Appliances
                        </label>
                        <span className="amount">6556</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Audio
                        </label>
                        <span className="amount">120</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            iPhone Accessories
                        </label>
                        <span className="amount">353</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Cameras & Camcorders
                        </label>
                        <span className="amount">45</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            iPhone Cases & Clips
                        </label>
                        <span className="amount">456</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            TV & Home Theater
                        </label>
                        <span className="amount">55</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Small Kitchen Appliances
                        </label>
                        <span className="amount">10</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="brand">
                    <h3 className="filter-title">Brand</h3>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Insigni
                        </label>
                        <span className="amount">220</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Samsung
                        </label>
                        <span className="amount">120</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Apple
                        </label>
                        <span className="amount">320</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            HP
                        </label>
                        <span className="amount">32</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Sony
                        </label>
                        <span className="amount">520</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Metra
                        </label>
                        <span className="amount">55</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Dyne
                        </label>
                        <span className="amount">120</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            LG
                        </label>
                        <span className="amount">98</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label><input type="checkbox" name="category" />
                            Canon
                        </label>
                        <span className="amount">99</span>
                    </div>
                    <div className="form-checkbox-category">
                        <label>
                            <input type="checkbox" name="category" />
                            Speck
                        </label>
                        <span className="amount">575</span>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button className="btn-filters">
                    <span className="button-title">clear all filters</span>
                </button>
            </div>
        </div>
    );
}

