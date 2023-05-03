import React from "react";
import "./Blog.css";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();

  return (
    <div className="pdf">
      <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <button className="pdf-btn" onClick={toPdf}>Download Pdf</button>}
      </Pdf>
      <div ref={ref} className="blog">
        <h2>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <p>
          In React, controlled components refer to components that we can
          validate as the input is being changed. But in Uncontrolled components
          that is not possible.
        </p>
        <h2> 2. How to validate React props using PropTypes</h2>
        <p>
          propTypes is used for props validation. If some of the props aren't
          using the correct type that we assigned, we will get a console
          warning. some example of propstype validation:
          <li>PropTypes.any : The prop can be of any data type.</li>
          <li>PropTypes.bool : The prop should be a Boolean.</li>
          <li>PropTypes.number : The prop should be a number.</li>
        </p>
        <h2>3. Tell us the difference between nodejs and express js.</h2>
        <p>
          Express js is simply a node. js web application framework. On the
          other hand, Node. js is the package, which provides the JavaScript
          run-time environment.
        </p>
        <h2>
          {" "}
          4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <p>
          A custom hook is a special JavaScript function which name starts with
          'use' and can be used as reusable functions.It is mainly used when a
          logic needs to be used by multiple components{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
