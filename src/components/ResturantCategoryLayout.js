import CategoryItemLayout from "./CategoryItemLayout";

const ResturantCategoryLayout = ({res,showCatItems,callSetShowIndex}) => {

    //It is an uncontrollable component as the component is controlled by its own state variable

    // const [showAccordion, setShowAccordion] = useState(false);

    const handleAccordionClick = () => {
        //setShowAccordion(!showAccordion);

        //It is now an controllable component which is controlled by their parent
        callSetShowIndex();
    }

    return (
        <div className="res-cat" onClick={handleAccordionClick}>
            <div className="res-item">
                <h2 className="res-header">
                    <span className="btn btn-outline-success res-title">
                        {res.title} ({res.itemCards.length})
                        <span className="cat-arrow"><i className="bi bi-arrow-down-circle"></i></span>
                    </span>
                </h2>
            </div>
            {
                showCatItems &&
                  <div className="res-body">
                    {
                        res?.itemCards.map((card, index) =>
                            <CategoryItemLayout key={index} data={card} />
                        )
                    }
                 </div>
            }

        </div>
    )
};

export default ResturantCategoryLayout;