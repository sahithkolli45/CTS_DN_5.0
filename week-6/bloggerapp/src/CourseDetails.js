import React from "react";

function CourseDetails(props) {
  return (
    <>
      <h1>Course Details</h1>

      {props.courses.map((course) => (
        <div key={course.id}>
          <h2>{course.cname}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </>
  );
}

export default CourseDetails;