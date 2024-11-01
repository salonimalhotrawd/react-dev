import React from "react";

/**
 * React.component is the class provided by the react which UserClassLayout Extends
 */
class UserClassLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }

        console.log(this.props.name + "Child Constructor is called");
    }

    componentDidMount(){
        console.log(this.props.name + "Child component didMount is called");
    }

    /**
     * @method render
     * This is the method provided by the React
     * @returns it returns the piece of JSX code which afterthat converted into HTML and rendered into the DOM
     */
    render() {
        console.log(this.props.name + "Child Renderer is called");
        const {name, loc} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h4>UserCount = {count}</h4>
                <button onClick={() => {
                     //Never update State variables directly
                     this.setState({
                        count: this.state.count + 1,
                     });
                }}>Increment Counter</button>
                <h2>{name}</h2>
                <h3>Location: {loc}</h3>
                <h4>Contact: +91 9914409217</h4>
            </div>
        );
    }
}

export default UserClassLayout;
