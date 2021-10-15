import { FilterItem } from "../filter-item/FilterItem";

export function FilterList(props) {


    return (
        <>
            <div className="category">
                <h3 className="filter-title">{props.title}</h3>
                {props.list.map(item => <FilterItem title={item.title} value={item.value} key={item.title} />)}
            </div>
        </>
    );
}