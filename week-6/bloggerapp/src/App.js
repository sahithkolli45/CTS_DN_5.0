import React from "react";
import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">

      <div className="column">
        {showCourses && (
          <CourseDetails courses={courses} />
        )}
      </div>

      <div className="column">
        {showBooks ? (
          <BookDetails books={books} />
        ) : (
          <h2>No Books Available</h2>
        )}
      </div>

      <div className="column">
        {showBlogs ? (
          <BlogDetails blogs={blogs} />
        ) : null}
      </div>

    </div>
  );
}

export default App;