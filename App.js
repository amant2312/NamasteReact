//---------------------------------------Plain JS ----------------------------------------------------------

var node=document.createElement("h1");
node.innerText="Hello World JS";
document.body.appendChild(node);






///----------------------------------------- React -----------------------------------------------------------


const heading = React.createElement('h1',{id: "heading"},"Hello world by react");
//createElement takes three Parameters 1st Type, 2nd Attribute Obj, 3rd Child element or child text
//if we want to create nested elements then we can pass 3rd element by creatElement() function
//in case we want multiple elements as the child elements then we can pass them as an Array

//const heading = React.createElement('div',{id: "div"},
    //React.createElement('h1',{id: "heading"},
    //"Hello world by react"));

//const heading = React.createElement('div',{id: "div"},[React.createElement('h1',{id: "h1"},"H1"), 
    //React.createElement('h1',{id: "h2"},"H2"]);
    





//This step stores reference of of the target element as React object reference
const root= ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);


//Now this adds the heading element to the react object which actually is another way to access the DOM
//Only the Target element is overridden with the heading element
root.render(heading);