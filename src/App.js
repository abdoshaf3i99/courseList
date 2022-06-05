import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
class App extends Component {
  state = {
    courses: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JAva script' }],
    current: '',
  };

  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if (current === '') {
      return false;
    } else {
      courses.push({ name: current });
      this.setState({
        courses,
        current: '',
      });
    }
  };

  //deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };
  //UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  //editCourse
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    let length = courses.length;

    const courseList = length ? (
      courses.map((courses, index) => {
        return (
          <CourseList
            details={courses}
            key={index}
            deleteCourse={this.deleteCourse}
            index={index}
            editCourse={this.editCourse}
          />
        );
      })
    ) : (
      <p>there is no courses to show</p>
    );

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
