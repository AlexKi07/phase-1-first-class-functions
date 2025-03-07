// Implementation of the functions being tested
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Name")
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Ano")
    };
}