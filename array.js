var arr = ['one', 'two', 'three'];

var newArray = ['one', ['2.1', '2.2', '2.3'], 'three'];
               // 0             1           2
                        // 0    1      2
                        
console.log(newArray[1][1]);

console.log(newArray);

// console.log(arr);

var test = document.querySelector('#test');
for(var index in arr) {
    // console.log(newArray[index])
    // test.innerHTML += '<br />' + newArray[index];
    if(newArray[index].constructor === Array) {
        console.log(newArray[index]);
    }
}