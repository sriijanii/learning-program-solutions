import React from 'react';
import { books, courses, blogs } from './data';
import './App.css';

// These components are created to render the list of items for each section.
function BookDetails() {
  const bookdet = (
    <ul className="list-content">
      {books.map(book => (
        <li key={book.id}>
          <h3 className="item-title">{book.bname}</h3>
          <h4 className="item-subtext">{book.price}</h4>
        </li>
      ))}
    </ul>
  );
  return bookdet;
}

function CourseDetails() {
  const coursedet = (
    <ul className="list-content">
      {courses.map(course => (
        <li key={course.id}>
          <h3 className="item-title">{course.cname}</h3>
          <h4 className="item-subtext">{course.date}</h4>
        </li>
      ))}
    </ul>
  );
  return coursedet;
}

function BlogDetails() {
  const blogdet = (
    <ul className="list-content">
      {blogs.map(blog => (
        <li key={blog.id}>
          <h3 className="item-title">{blog.title}</h3>
          <h4 className="item-subtext-bold">{blog.author}</h4>
          <h5 className="item-subtext">{blog.text}</h5>
        </li>
      ))}
    </ul>
  );
  return blogdet;
}

function App() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          
          body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
          }
          .App {
            display: flex;
            justify-content: center;
            align-items: stretch;
            text-align: left;
            padding: 50px 20px;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .column {
            flex: 1;
            padding: 0 40px;
            position: relative;
          }
          .column-title {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 30px;
            color: #000;
          }
          .column-divider {
            position: absolute;
            top: 0;
            right: 0;
            width: 5px;
            height: 100%;
            background-color: green;
          }
          .list-content {
            list-style: none;
            padding: 0;
          }
          .list-content li {
            margin-bottom: 25px;
            line-height: 2.9;
          }
          .item-title {
            font-size: 22px;
            font-weight: 700;
            margin: 0;
            line-height: 2.5;
          }
          .item-subtext {
            font-size: 13px;
            font-weight: 700;
            margin: 0;
            line-height: 2.0;
          }
          .item-subtext-bold {
            font-size: 14px;
            font-weight: 900;
            margin: 0;
            line-height: 2.8;
          }
        `}
      </style>
      <div className="App">
        <div className="column">
          <h1 className="column-title">Course Details</h1>
          <CourseDetails />
          <div className="column-divider"></div>
        </div>
        <div className="column">
          <h1 className="column-title">Book Details</h1>
          <BookDetails />
          <div className="column-divider"></div>
        </div>
        <div className="column">
          <h1 className="column-title">Blog Details</h1>
          <BlogDetails />
        </div>
      </div>
    </>
  );
}

export default App;
