import React, { Component, Fragment } from 'react';

class CourseList extends Component {
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          Delete Course
        </button>
      </li>
    );
  };

  render() {
    return <Fragment>{this.renderCourse()}</Fragment>;
  }
}
export default CourseList;
