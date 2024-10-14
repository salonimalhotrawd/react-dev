import { useRouteError } from "react-router-dom";

const NoRouteLayout = () => {

    /**
     * useRouterError Basically tells us the detailed information of the error
     * i.e Whether the component does't exist or network issue or anything else
     * Detailed desc of the error
     */
    const errInfo = useRouteError();
    console.log(errInfo);

    return(
        <div className="No-route-page">
            <h4>Oops!!</h4>
            <h5>Something went wrong</h5>
            <h5>{errInfo?.data}</h5>
        </div>
    )
};

export default NoRouteLayout;