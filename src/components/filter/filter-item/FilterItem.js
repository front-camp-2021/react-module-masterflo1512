export function getId(productName) {
    return productName.toLowerCase().split(" ").join("_");
}

export function FilterItem({ setFilter, title, value }) {
    function onChange(e) {
        setFilter((filters) => {
            if (e.target.checked) {
                return filters.concat(getId(title))
            } else {
                return filters.filter(id => id !== getId(title))
            }
        })
    }
    return (
        <div className="form-checkbox-category">
            <label>
                <input type="checkbox" name="category" onChange={onChange} />
                {title}
            </label>
            <span className="amount">{value}</span>
        </div>
    );
}