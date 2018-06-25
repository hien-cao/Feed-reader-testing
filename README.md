# Feed Reader Testing

## Table of Contents

* [About](#About)
* [References](#References)
* [How to run](#How)
* [What to be tested](#How)

## About

The project is about to write a test suit for a web-based application that reads Rss feeds. The testing tools is Javacript testing framework - [Jasmine](http://jasmine.github.io/)

## References

[Jasmine 2.1 Documentation](https://jasmine.github.io/2.1/introduction.html)

## How to run

1. Clone the project to your computer
2. Run index.html in your browser
3. The test result is displayed at the bottom of the page

## What to be tested

The test is written in feedreader.js file. The test aims to check the following:

* allFeeds object is defined and not empty 
* allFeeds object has element which contains name and url and they are not empty
* the menu bar is hidden as defaut which initially contain the class 'menu-hidden'
* the menu bar is toggle as the menu button clicked
* after the loadFeed function loaded, the element with class 'feed' should contain at least a single element with class 'entry'
* after the loadFeed function loaded, the content of the element with class 'feed' should be changed. 

