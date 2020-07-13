import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <h1>Hello from ClassComponent</h1>;
  }
}

const FunctionalComponent = (props) => {
  return <h1>Hello {props.name}</h1>;
};

export { ClassComponent, FunctionalComponent };
