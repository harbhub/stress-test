console.log('Stress Test');
var Promise = require("bluebird");
var bhttp = require("bhttp");
/*
1)  Is the website fast enough for the user?  (200ms if possible)
2)  Can the website keep up with normal use?
3)  What will need to scale first on the system?
4)  Can the website deal with overage intelligently?
5)  Can we deal with what we can reasonably expect?
6)  (Client) Functional tests passed?
7)  (Server) Load tests passed?
8)  Does the website work properly?
9)  How much CPU time and memory does a normal request use?
*/

var url = 'https://www.example.com';
var numberOfRequests = 10;
var numberOfSuccesses = 0;
var numberOfErrors = 0;

var startTime = Date.now();

for (var i = 0; i < numberOfRequests; ++i) {
    Promise.try(function() {
        return bhttp.get(url);
    }).then(function(response) {
        if (response.statusCode === 200) {
            numberOfSuccesses += 1;
        } else {
            numberOfErrors += 1;
        };
        if (numberOfSuccesses + numberOfErrors === numberOfRequests) {
            done();
        }
    });
};

function done() {
    console.log('Done Performing Stress Test');
    var endTime = Date.now();
    var diffTime = endTime - startTime;
    var results = {
        numberOfRequests: numberOfRequests,
        numberOfSuccesses: numberOfSuccesses,
        numberOfErrors: numberOfErrors,
        startTime: startTime,
        endTime: endTime,
        diffTime: diffTime + 'ms'
    };
    console.log(results);
};
