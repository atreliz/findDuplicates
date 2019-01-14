# README #

This code will display a set of duplicates and non duplicates from a data collection.

### How do I get set up? ###

* `npm i`
* `gulp`
* `node index.js`

That command should start the node server and serve the url **http://localhost:3000/**

### What am I doing? ###

I am using express to build a server that will serve the website and also provide an API to get the data to display.

The website is made in angular1.

I am using gulp to concat all the js files in one.

The app will serve 3 url: one with a simple view, another call extra displaying data as a table and if you click on the rows will load another url with the user/users data.

The website has not a lot of css but is it responsive for less than 500px devices and I am using some features as odd, even, box-shadow, text-transform... and an external font.

The website has the structure of a bigger project, with views, services, and reusable components with properties to config.

I am reusing 3 components(directives) but they are very simple only one has some functionality to load the user data on another page.

From the extra view to the singleuser data view, I am using a front end service to connect both views, that also support offline connection, so you can refresh the singleuser view and the data will remain there.

The node app, apart from being a server, reads the csv and transform it to json file, for an easier use.

Then look for possible duplicates and return the data in an array with this format:

```
[

	[ {similarUser}, {similarUser} ],
	[ {uniqueUser}],
	[ {similarUser}, {similarUser}, {similarUser}  ],
	[ {uniqueUser}],
	[ {uniqueUser}]

]
```

I am keeping the similar users together to each other, because then I can display them together and check how similar they are.

### How do I detect/consider duplicates? ###

I am using levenshtein to detect if some key fields are similar:

* phone number,
* email
* full name
* full addr

if 2 or more of those fields are similar I will consider that is the same user.
