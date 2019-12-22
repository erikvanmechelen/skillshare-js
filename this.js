
// 'this' refers to parent function

// variables inside of a class are called properties

// functions inside class are called methods

// class is essentially a group of functions that work together for common purpose

// jQuery uses 'this' keyword alot

function anything() {
    var _this = this;

    function test() {
        _this.name =
    }
}

 // next example
 // the repeated 'anything()'s at bottom INVOKE the function right here
 // which produces the increment
 // and the variables are NOT overwritten (information preserved INSIDE function)



function anything() {
    console.log(this);

    if(this.number === undefined) {  //strict comparison ===
        this.number = 0;
    }

    console.log(this.number);

    this.number++;


    console.log(this.number);

}

anything();   // this 'anything()' INVOKES the function at the top
anything();
anything();
anything();
anything();
anything();
anything();
anything();
anything();
anything();
anything();

// variable inside of a class are called properties

// functions inside class are called methods