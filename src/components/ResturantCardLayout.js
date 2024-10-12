import {CDN_URL} from '../utils/constants';

const ResturantCardLayout = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } = resData;
    const { slaString } = sla;
    return (
        <div className="resturant-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="resturant-logo" src={CDN_URL + cloudinaryImageId} alt="img-name" />
            <div className="resturant-container">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h5>{costForTwo} ({slaString})</h5>
                <h5>{avgRating} stars</h5>
            </div>
        </div>
    )
};

export default ResturantCardLayout;