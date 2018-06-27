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

		// A test to check that allFeeds have URL defined and not empty
		it('have URL defined and non-empty URL', function() {
				allFeeds.forEach(function(feed) {
						expect(feed.url).toBeDefined();
						expect(feed.url.length).not.toBe(0);
				});
		});

		// A test to check that allFeeds have Name defined and not empty
		it('have Name defined and non-empty Name', function() {
				allFeeds.forEach(function(feed) {
						expect(feed.name).toBeDefined();
						expect(feed.name.length).not.toBe(0);
				});
		});
	});

	// A suite named 'The menu' that contained all test regarding to the menu
	
	describe('The menu', function() {
		
		// Define the variables related to the menu
		const menu = document.querySelector('body');
		const button = document.querySelector('.menu-icon-link');

		// A test to check that the menu element is hidden by default
		it('has menu elements hidden by default', function() {
			expect(menu.classList.contains('menu-hidden')).toBe(true);
		});

		// A test to check that the menu toggles when the menu icon is clicked
		it('has menu elements toggled when the menu icon is clicked', function() {
			button.click();
			expect(menu.classList.contains('menu-hidden')).toBe(false);
			button.click();
			expect(menu.classList.contains('menu-hidden')).toBe(true);
		});
	
	});

	// A suit named 'Initial Entries' contained all test regarding to them  

	describe('Initial Entries', function() {

		// A test to check that when the loadFeed function is called and completes // its work, there is at least a single .entry element within the .feed container.

		// Call the loadFeed function
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		it('have at least a single .entry within the .feed container', function() {
			// Define the list containing class entry in class feed afer the loadFeed function runed
			const entries = document.querySelector('.feed').querySelectorAll('.entry');
			expect(entries.length).toBeGreaterThan(0);
		});
	
	});

	// A suit named 'New Feed Selection' contains all test regarding to it
	
	describe('New Feed Selection', function() {	
		// A test to check that when a new feed is loaded by the loadFeed function that the content actually changes

		let firstFeedSelection, secondFeedSelection;
		
		// Call the loadFeed function
		beforeEach(function(done) {
			// Call loadFeed function first time
			loadFeed(0, function() {
				firstFeedSelection = document.querySelector('.feed').innerHTML;
				// Call loadFeed function second time
				loadFeed(1, function() {
					done();
				});
			});
		});

		it('has its content changed after loading', function() {
			secondFeedSelection = document.querySelector('.feed').innerHtml;
			expect(secondFeedSelection).not.toEqual(firstFeedSelection);
		});

	});		

}());
