

// data management
const _ = require('lodash');
const levenshtein = require('levenshtein-edit-distance');

const csvFilePath='data/normal.csv';
const csv=require('csvtojson');

// server side
const express = require('express');
const app = express();

// open the site from script
const opn = require('opn');


// duplicates functionality
function findDuplicates(data){
	const cleanData = []; // here will store the results
	const levenshteinValue = 4; // I think 3 will be better, but seems havign the same results
	const similaritiesValue = 2;
	

	function addAsDuplicate(cleanUser, rawUser){
		cleanUser.push(rawUser);
		return true;
	}


	_.each(data, (rawUser) => {
		var found = false;// flat to determine if user is found/duplicated or not.

		//loop over data to find duplicates
		_.each(cleanData, (cleanUser) => {
			
			const fullNameRawUser = rawUser.first_name + rawUser.last_name;
			const fullNameCleanUser = cleanUser[0].first_name + cleanUser[0].last_name;

			const fulladdrRawUser = rawUser.address1 + rawUser.zip + rawUser.city + rawUser.state_long + rawUser.state;
			const fulladdrCleanUser = cleanUser[0].address1 + cleanUser[0].zip + cleanUser[0].city + cleanUser[0].state_long + cleanUser[0].state;
			
			// I am considering same user if they have more than X similarities
			let similarities=0;

			// have similar phone number
			if ( levenshtein(rawUser.phone, cleanUser[0].phone) < levenshteinValue ) { 
				similarities++;
			
			}
			// have similar email
			if ( levenshtein(rawUser.email, cleanUser[0].email) < levenshteinValue ) { 
				similarities++;
			
			}
			// have similar full name
			if ( levenshtein(fullNameRawUser, fullNameCleanUser) < levenshteinValue ) { 
				similarities++;
			
			}
			// have similar address
			if ( levenshtein(fulladdrRawUser, fulladdrCleanUser) < levenshteinValue ) { 
				similarities++;
			}

			//check number of similarities
			if(similarities>=similaritiesValue){
				found = addAsDuplicate(cleanUser, rawUser);
			}


		});

		if(!found){
			cleanData.push([rawUser]);
		}

	});
	return cleanData
}


// Serving html website
app.use('/', express.static(__dirname + '/public'));


// API to provide the data
app.get('/api/users/', function(req, res) {

	csv().fromFile(csvFilePath)
		.then((data) => findDuplicates(data))
    	.then((result) => { res.send(result); })
  		.catch(console.error);

});


// Init the server
app.listen(3000);
// Open the site
opn('http://localhost:3000/');

console.log("UP and running");

