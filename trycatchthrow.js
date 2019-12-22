try {
    // code in here
    var age = (prompt("How old are you?"));

    if(age != "21") {

    // throw an error
    throw "not old enough";

    } else {
        alert("Welcome to the Forest");
    }
    
    // best practice, do not next try catch(error)
} catch(error) {

    if(error = "not old enough") {
        document.querySelector('#test').innerHTML = "Sorry, you're not old enough.";

    }
    else {
        document.querySelector('#test').innerHTML = error.message;
    }

    console.log(error, error.message);

} finally {
    document.querySelector('#test').innerHTML += "</ br> Try/catch/finally was run";
}
  