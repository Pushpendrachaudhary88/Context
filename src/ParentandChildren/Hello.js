import React from "react";

const Hello = (props) => {
  return (
    <div style={{background:"wheat"}}>

    <h1>Hello World</h1>
    <p>I am in Hello.js file</p>
          {props.children}
   
</div>
   
  );
};

export default Hello;





// {/* <div style={{ background: "wheat" }}>
// <p>My name is </p>
// {props.children}
// {/* // How can I access only the first children */}
// // </div> */}
