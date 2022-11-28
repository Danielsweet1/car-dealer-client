import React from "react";
import UseTitle from "../../hooks/UseTitle";

const Blogs = () => {
  UseTitle("Blogs");
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          
        </div>
        <div class="grid gap-8 grid-cols-1">
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                What are the different ways to manage a state in a React
                application?
              </p>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              With React, you won’t modify the UI from code directly. For
              example, you won’t write commands like “disable the button”,
              “enable the button”, “show the success message”, etc. Instead, you
              will describe the UI you want to see for the different visual
              states of your component (“initial state”, “typing state”,
              “success state”), and then trigger the state changes in response
              to user input. This is similar to how designers think about UI.
            </p>
             
          </article>
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>How does prototypical inheritance work?</p>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </article>
        </div>
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="grid gap-8 lg:grid-cols-1">
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                What is a unit test? Why should we write unit tests?
              </p>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </article>
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
           
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>React vs. Angular vs. Vue?s</p>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
