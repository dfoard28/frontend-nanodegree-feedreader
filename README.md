# Project Overview

This project was used to test an application using [Jasmine](http://jasmine.github.io/) that was already developed.

## What was learned?

This project was used to learn how write tests for a pre-existing application with Jasmine. These tests included writing new suites and specs, using matchers, and also asynchronous operations.


#included
This project includes the following:
1. index.html file
2. 3 seperate CSS files (icomoon.css, normalize.css, and style.css)
3. 4 font files
4. app.js file
5. Jasmine library 2.1.2
6. feedreader.js jasmine file


# project information

1. spec `URL is defined` within the `RSS Feeds`suite loops through each feed in the `allFeeds` object and ensures that a URL defined and that the URL is not empty.
2. spec `name is defined` within the `RSS Feeds` suite loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
4. spec `should have class menu-hidden on body` within `The Menu` suite ensures the menu element is hidden by default. This is done by checking that the `body` has the `menu-hidden` class.
5. spec `should display menu when clicked` and `'should not display menu when clicked again` are both within `The Menu` suite and were written to ensure that the menu changes visibility when the menu icon is clicked. There are two expectations: the menu displays when clicked and menu hides when clicked again. This is an asynchronous operation therefore beforeEach was used. This ensures that programatically the menu-icon was clicked before checking if the menu was diplayed and then clicked again to ensure the menu disapeared.
14. spec `should have an entry element within feed container` found within `Initial Entries` test suite ensures that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
16. spec `new feed should change content` found within the `New Feed Selection` suite was written to ensure when a new feed is loaded by the `loadFeed` function that the content actually changes. This is an asynchronous operation so beforeEach was used to ensure that the `loadfeed` function was loaded once and then loaded again to compare the information that populates into the `div` with the class of `feed`.
