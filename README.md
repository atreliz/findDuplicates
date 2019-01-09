# README #

This code will display a set of duplicates and non duplicates from a data collection.

### How do I get set up? ###

* `npm i`
* `node index.js`

That command shoudl start the node server and serve the url **http://localhost:3000/**

### What am I doing? ###

I am using express to build a server that will serve the website and also provide an API to get the data to display.

The website is a very basic angular1 app with just one controller and calling a service to retrieve data, that will display with several ng-repeat.

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
