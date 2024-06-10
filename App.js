import React from "react";
import ReactDOM from "react-dom/client";

/*
* Lets us assume if you want to Create Nested HTML object structure like below
* <div id="parent">

*    <div id="child1">
*      <h1>I am an h1 Tag</h1>
*      <h2>I am an h2 Tag</h1>
*    </div>

*    <div id="child2">
*      <h3>I am an h3 Tag</h1>
*      <h4>I am an h4 Tag</h1>
*    </div>
* </div>
*/
const heading = React.createElement("div", 
    {id:'parent'},
    [
        React.createElement("div", 
            {id:'child1', key:'chil2Id'},
         [
            React.createElement("h1", {key:'h1Id'}, 'I am an h1 Tag'),
            React.createElement("h2", {key:'h2Id'}, 'I am an h2 Tag'),
         ]),

         React.createElement("div", 
            {id:'child2',key:'childId'},
            [
                React.createElement("h3", {key:'h3Id'}, 'I am an h3 Tag'),
                React.createElement("h4", {key:'h4Id'}, 'I am an h4 Tag'),
            ]),
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);