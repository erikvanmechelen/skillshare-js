
// var a; var b; will not move outside its function

// Best Practice: declare var at top of function

function changeText() {

    a = "Something";
    b = "Else";

    document.querySelector('#test').innerHTML = a + ' ' + b;

    var a;
    var b;

}

// in javascript, whenever variable declared, 
// it goes to top of its scope

function changeText() {

    var a;
    var b;

    ..
    ...
    ..
    ..
    .
    ..
    .

    a = "Something";
    b = "Else";

    document.querySelector('#test').innerHTML = a + ' ' + b;


}