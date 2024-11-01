import { Component } from "react";
import UserClassCardLayout from "./UserClassCardLayout";
import UserClassLayout from "./UserClassLayout";
import UserLayout from './UserLayout';

class AboutUsLayout extends Component {
  constructor() {
    console.log("Parent constructor is called");
    super();
  }

  componentDidMount() {
    console.log("Parent component Did Mount is called");
  }

  render() {
    console.log("Parent renderer is called");
    return (
      <div className="about-us">
        <h4>Mission</h4>
        <span>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”</span>
        <h3>Our Employees</h3>

        {/* React Functional Component */}
        {/* <UserLayout name={"Anmol Bharat Dogra"} loc={"Himachal"}/> */}


        {/* React ClassBased Component */}
        {/* <UserClassLayout name={"First UserClass Layout"} loc={"Amritsar"} />
        <UserClassLayout name={"Second UserClass Layout"} loc={"Amritsar"} /> */}

        <UserClassCardLayout name={"Saloni Malhotra"} loc={"Amritsar"}/>
      </div>
    )
  }
}

/**
 ** React Lifecycle Diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  **  !! Phases of Class-Based Component

   There are two phases of React -:

    ** A) Render Phase -> In render Phase, firstly the constructor is called then the render method is called

      - Parent Constructor
      - Parent Render
        
        - First Class Constructor
        - Second Class Render

        - Second Class Constructor
        - Second Class Render

    ** B) Commit Phase -> In Commit Phase, React updates the DOM nd its refs, then the componentDiDMountCalled

         * !! <DOM UPDATED (IN SINGLE BATCH) as DOM Manipulation part is expensive>
       - First Class ComponentDidMount
       - Second Class ComponentDidMount
       - Parent Class ComponentDidMount


      ** Note:- As React is smart and optimized, its sees there are two instance of UserClassLayout,
      ** So the react batchup the Render Phase and execute them and once the Render phase execution is 
      ** completed, then the commit phase is executed.
 */

export default AboutUsLayout;


