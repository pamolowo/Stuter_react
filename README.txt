QUESTION TWO
####
JSX
JSX stands for JavaScript XML. It is a JavaScript syntax extension. Its an XML or HTML like syntax used by ReactJS. This syntax is processed into JavaScript calls of React Framework. It extends the ES6 so that HTML like text can co-exist with JavaScript react code. It is not necessary to use JSX, but it is recommended to use in ReactJS.
###
Components
ReactJS is all about components. ReactJS application is made up of multiple components, and each component has its own logic and controls. These components can be reusable which help you to maintain the code when working on larger scale projects.
#####
One-way Data Binding
ReactJS is designed in such a manner that follows unidirectional data flow or one-way data binding. The benefits of one-way data binding give you better control throughout the application. If the data flow is in another direction, then it requires additional features. It is because components are supposed to be immutable and the data within them cannot be changed. Flux is a pattern that helps to keep your data unidirectional. This makes the application more flexible that leads to increase efficiency.
###
Virtual DOM
A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding. Whenever any modifications happen in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory.
####
Simplicity
ReactJS uses JSX file which makes the application simple and to code as well as understand. We know that ReactJS is a component-based approach which makes the code reusable as your need. This makes it simple to use and learn.
####
Performance
ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today. The reason behind this is that it manages a virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. The DOM exists entirely in memory. Due to this, when we create a component, we did not write directly to the DOM. Instead, we are writing virtual components that will turn into the DOM leading to smoother and faster performance.

###
QUESTION THREE
###

It is declarative: 
###
In react the DOM is declarative. We can make interactive UIs by changing the state of the component and React takes care of updating the DOM according to it. This means we never interact with DOM. Hence, it makes it easier to design UI and debug them. We can just change the program’s state and see how the UI will look at that particular time. This makes our code more predictable and easier to debug.

###

Write once, learn anywhere:
###
We can develop new features in React without re-writing the existing code. It can also render on the server using Node and power mobile apps using React Native. So we can create IOS, Android, and Web applications simultaneously. In conclusion, extensive code reusability is supported by React.

###
It is simple: 
###
The component-based approach, automatic rendering, and use of just plain JavaScript make React very simple to learn, build a web (and mobile applications), and support it. We can mix Javascript and HTML together to create a special syntax called JSX which makes it easier to grasp and work with it.

###
SEO friendly: 
###
SEO is about making it easier for developers to find the right content for the user. When a user makes a search, search engines platforms like Google, Yahoo, Bing or Baidu try to find which page is the most relevant to that specific search. React affects the SEO by giving you a SPA (Single Page Application) which requires Javascript to show the content on the page which can then be rendered and indexed.

###
Fast, efficient, and easy to learn:
###
 It contains pre-built patterns and functions that can be chosen and combined like building blocks to create fast, appealing, and scalable projects in less time as compared to designing the entire application line by line. Also, unlike Angular and Ember which are referred to as ‘Domain-specific Language’, React only requires to need a basic knowledge of HTML and CSS fundamentals to start working with it.

###

Guarantees stable code:
###
ReactJS solely use downward data flow to ensure that even minor changes in the child structures won’t have an impact on their parents. Developers only alter an object’s state when they change it; only specific components will then be updated. The stability of the code and consistent app performance are guaranteed by this data-binding mechanism.

###

It is backed by a strong community:
###
React library was initially developed for internal use before being made available to everyone. The engineering teams from Facebook and Instagram as well as outside experts now support it. 
###

QUESTION FOUR
###
Jordan Walke
Meta

QUESTION FIVE
###
In HTML, multiple elements can be returned while Nested JSX must return one element, which we’ll call a parent element that wraps all other levels of nested elements
###
HTML elements have attributes while JSX elements have props.
###
It is not necessary to use camelCase for attributes, ids and event references. Its totally your call to use camelCase, lowercase or hyphens for naming them while All HTML attributes and event references in JSX become camelCase, this way, onclick event becomes onClick and onchange — onChange.  
###


QUESTION FIVE
###
JSX is not a valid JavaScript as they are embedded in HTML elements. As JSX is combination of HTML and JavaScript it is not supported by Browsers. So, if any file contains JSX file, Babel transpiler converts the JSX into JavaScript objects which becomes a valid JavaScript. Thus, browsers understands the code and executes. Browsers can’t read JSX because there is no inherent implementation for the browser engines to read and understand them. JSX is not intended to be implemented by the engines or browsers, it is intended to be used by various transpilers to transform these JSX into valid JavaScript code.

