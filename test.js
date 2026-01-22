var test = function() {
    console.log("This is a test function.");
}

test.prototype.run = function() {
    console.log("Running the test function.");
};

/*
var test2 = function() {
    console.log("This is test2 function.");
    this.prototype.run = function() {
        console.log("Running the test2 function.");

    };
};
*/

function test2() {
    console.log("This is another test2 function.");
    this.run = function() {
        console.log("Running the another test2 function.");
    };
};

const t = new test2();
t.run();