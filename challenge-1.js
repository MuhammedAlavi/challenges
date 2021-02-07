import React from "react";
import _ from "lodash";
import "App.css";

function Foo(props) {
  return <div className="obj">foo{props.name}</div>;
}
function Boo(props) {
  return <div className="obj">boo{props.family}</div>;
}

function App() {
  const components = { foo: Foo, boo: Boo };
  const Choosen = null;
	/*
	 * CHALLENGE 1: if there are N function in components
	 * how can I find that Choosen is exactly one of functions inside of 
	 * components and not another type or another function non-member of 
	 * components.?
	 * */
  if (typeof Choosen === "function") {
    if (Choosen === Boo) {
      return <Boo family=":boo with family" />;
    } else if (Choosen === Foo) {
      return <Foo name=":foo with name" />;
    } else return <div>no one choosen </div>;
  } else {
    return <div> the type is not match</div>;
  }
}

export default App;

