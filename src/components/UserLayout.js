import { useState } from "react";

const UserLayout = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    const {name, loc} = props;

    return (
        <div className="user-card">
            <h4>UserCount = {count} | UserCount2 = {count2}</h4>
            <h2>{name}</h2>
            <h3>Location: {loc}</h3>
            <h4>Contact: +91 9888318221</h4>
        </div>
    )
};


export default UserLayout;