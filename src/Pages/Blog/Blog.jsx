import React from "react";

import "./Blog.modules.css";

const Blog = () => {
    return (
        <section className="box__wrapper ">
            <h1 className="text-center text-4xl font-semibold text-white mb-5">
                Recent Blogs
            </h1>
            <div className="box container">
                <div className="card bg-info">
                    <div className="content">
                        <h4 className="text-center mb-4 text-2xl text-white">
                            What are the different ways to manage a state in a
                            React application?
                        </h4>
                        <p>
                            Using web storage. it stores the state in the
                            browser via web storage. This is useful when we want
                            to persist state between reloads and reboots.
                            <p className="my-6"></p>
                            Using Local State. It stores state locally. It is
                            useful when one component needs the state.
                            <p className="my-6"></p>
                            Using Lifted State. This option is to define the
                            state in the parent component. Often, the same state
                            is used across multiple components. In those cases,
                            it is useful to lift the state to a common parent.
                            <p className="my-6"></p>
                            Using Derived State
                        </p>
                    </div>
                </div>
                <div className="card bg-info">
                    {/* <img src={img2} alt="" /> */}
                    <div className="content">
                        <h4 className="mb-4 text-2xl font-semibold text-white">
                            How does prototypical inheritance work?
                        </h4>
                        <p>
                            The Prototypal Inheritance is a feature in
                            javascript used to add methods and properties in
                            objects. It is a method by which an object can
                            inherit the properties and methods of another
                            object. Traditionally, in order to get and set the
                            [[Prototype]] of an object, we use
                            Object.getPrototypeOf and Object.setPrototypeOf.
                        </p>
                    </div>
                </div>
                <div className="card bg-info">
                    <div className="content">
                        <h4 className="mb-4 text-2xl font-semibold text-white">
                            What is a unit test? Why should we write unit tests?
                        </h4>
                        <p>
                            Unit Testing is a type of software testing where
                            individual units or components of a software are
                            tested. The purpose is to validate that each unit of
                            the software code performs as expected. Unit Testing
                            is done during the development (coding phase) of an
                            application by the developers. Unit Tests isolate a
                            section of code and verify its correctness. A unit
                            may be an individual function, method, procedure,
                            module, or object. In SDLC, STLC, V Model, Unit
                            testing is first level of testing done before
                            integration testing. Unit testing is a WhiteBox
                            testing technique that is usually performed by the
                            developer. Though, in a practical world due to time
                            crunch or reluctance of developers to tests, QA
                            engineers also do unit testing
                        </p>
                    </div>
                </div>
                <div className="card bg-info">
                    <div className="content">
                        <h4 className="mb-4 text-2xl font-semibold text-white">
                            React vs. Angular vs. Vue?
                        </h4>
                        <p>
                            Vue is a popular progressive, open-source framework
                            for developing complex user interfaces, while React
                            is a JavaScript library for building web development
                            for interactive elements on UIs. React is also used
                            to develop SPAs and mobile apps.
                            <p className="my-6"></p>
                            Vue JS is more oriented to novice developers, while
                            React requires in-depth knowledge of JavaScript.
                            React uses a virtual DOM (copy of the actual DOM) to
                            interact with HTML files, but every element is
                            represented as a JavaScript object. Vue has two-way
                            binding and uses a virtual DOM.
                            <p className="my-6"></p>
                            Angular is a TypeScript-based structure framework,
                            while Vue is a progressive lightweight framework.
                            Both - Angular JS and React JS frameworks are used
                            to create web interfaces for front end development.
                            <p className="my-6"></p>
                            Angular is Google’s matured and advanced JavaScript
                            framework based on TypeScript, whereas Vue is a
                            progressive open-source front-end JavaScript
                            framework created by Evan You.
                            <p className="my-6"></p>
                            While comparing Vue JS vs Angular, Vue is known for
                            its clean architecture and its elegant designs. On
                            the other hand, Angular is considered for many
                            organizations due to its vast functionality and high
                            performance.
                            <p className="my-6"></p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
