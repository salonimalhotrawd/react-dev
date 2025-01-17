import {CDN_URL} from '../utils/constants';

const CategoryItemLayout = (items) => {
    return(
        <div>
           <ul className="list-group">
                <li className="list-group-item">
                    <div className="list-first-section">
                        <span className="info-title">{items.data.card.info.name} </span>
                        <span className="info-price">Rs.{items.data.card.info.price ? (items.data.card.info.price/100) : (items.data.card.info.defaultPrice/100)}</span>
                    </div>
                    <div className="list-second-section">
                        <span className="info-desc">{items.data.card.info.description}</span>
                        <span className="list-img"><img className="info-logo" src={CDN_URL + items.data.card.info.imageId} alt="img-name" /></span>
                    </div>
                </li>
             </ul>
        </div>
    )
};

export default CategoryItemLayout;