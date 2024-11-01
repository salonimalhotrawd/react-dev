import React from "react";

class UserClassCardLayout extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                firstName: "",
                lastName: "",
                userAgent: "",
                image: ""
            }
        }
    }

    componentDidMount() {
        // const userRes = await fetch("https://dummyjson.com/users/1");
        // const userData = await userRes.json();
        // this.setState({
        //     userInfo: userData
        // });

        this.timer = setInterval(() => {
            console.log("op");
        },1000);
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }

    render() {
        const { firstName, lastName, image, userAgent } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>{firstName + lastName}</h2>
                <h3><img src={image} alt="dummyImg" /></h3>
                <h4>{userAgent}</h4>
            </div>
        )
    }
}

export default UserClassCardLayout;