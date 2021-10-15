
export function FilterItem(props) {
    return (
        <div className="form-checkbox-category">
            <label>
                <input type="checkbox" name="category" />
                {props.title}
            </label>
            <span className="amount">{props.value}</span>
        </div>
    );
}