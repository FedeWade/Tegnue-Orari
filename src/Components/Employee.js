import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  render() {
    return <p>{this.props.name}</p>;
  }
}

export default Employee;
