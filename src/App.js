import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
class App extends Component {
  state = {
    courses: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JAva script' }],
    current: '',
  };
  //UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: '',
    });
  };
  render() {
    const { courses } = this.state;
    const courseList = courses.map((courses, index) => {
      return <CourseList details={courses} key={index} />;
    });
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
