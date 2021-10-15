import './product-item.scss';
import applewatch from './apple-watch.jpg';
import beatsHeadphones from './beats-headphones.jpg';
import iphoneX from './iphone-x.jpg';
import jblSpeaker from './jbl-speaker.jpg';
import CardItem from './CardItem.js';

console.log(applewatch);
export function Productlist(props) {

    return (
        <div className="product-list row">
            {props.list.map(item => <CardItem image={item.images[0]} title={item.title} rating={item.rating} price={item.price} category={item.category} brand={item.brand} key={item.id} />)}
        </div>
    );
}

