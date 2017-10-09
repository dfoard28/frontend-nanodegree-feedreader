/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed in the allFeeds oject
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function() {
            allFeeds.forEach(function(element){
                expect(element.url).toBeDefined();
                expect(element.url).not.toBeUndefined();
                expect(element.url).not.toBeNull(); 
                expect(element.url).not.toBe("");
            });
        });

        /* test loops through each feed in the allFeeds object
         * and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function(){
            allFeeds.forEach(function(element){
                expect(element.name).toBeDefined();
                expect(element.name).not.toBeUndefined();
                expect(element.name).not.toBeNull();
                expect(element.name).not.toBe("");
            });
        });
    });


    /* new test suite named "The menu" */
    describe('The menu',function(){
        var body = document.getElementsByTagName('body');
        var menuIcon = document.getElementsByClassName('menu-icon-link');
         /* test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should have class menu-hidden on body',function(){
            expect(body[0].className).toMatch('menu-hidden');
        }); 
         /* test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        describe('Icon click',function(){
            beforeEach(function(){
                menuIcon[0].click();
            });
            it('should display menu when clicked',function(){
                expect(body[0].className).not.toMatch('menu-hidden');
            });
            it('should not display menu when clicked again',function(){
                expect(body[0].className).toMatch('menu-hidden');
            });
        });
    });

    /* new test suite named "Initial Entries" */
    describe('Initial Entries',function(){
        /* test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){
            loadFeed(0,done);
        });
        it('should have an entry element within feed container',function(done){
            var feed = document.getElementsByClassName('feed')[0];
            var feedElement = feed.getElementsByClassName('entry');
            expect(feedElement.length).toBeGreaterThan(0);
            done();
        });
    });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        var initial;
        var second;
        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done){
            loadFeed(0,function(){
                initial = $('.feed').text();
                loadFeed(1,done);
                });
            });
        it('new feed should change content', function(done){
            second = $('.feed').text();
            expect(initial).not.toMatch(second);
            done();
        });
    });
}());

