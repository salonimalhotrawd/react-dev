import {CDN_URL} from '../utils/constants';

const ResturantCardLayout = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } = resData;
    const { slaString } = sla;
    return (
        <div className="resturant-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="resturant-logo" src={CDN_URL + cloudinaryImageId} alt="img-name" />
            <div className="resturant-container">
                <span className="res-data res-name">{name}</span>
                <span className="res-data res-cuisines">{cuisines.join(",")}</span>
                <span className="res-data res-cost">{costForTwo} ({slaString})</span>
                <span className="res-data res-ratings">{avgRating} stars</span>
            </div>
        </div>
    )
};

//Higher Order Component

//input => ResturantCardLayout ==> ResturantCardLayoutPromoted

export const withPromotedLabel = (ResturantCardLayout) => {
    return (props) => {
        return(
            <div>
                <label className="label-promoted">Promoted</label>
                <ResturantCardLayout {...props}/>
            </div>
        );
    };
};

export default ResturantCardLayout;