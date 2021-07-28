// #### Stacks ####

//Functions : push: add to stack, pop: remove top element, 
//peek: display top element, length: how many in stack.

// ##Array Stack Palindrome Ex:

var letters = [];

var word = "kpj"

var rword = "";

//put letters of word into stack
for(var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword === word){
    console.log(word + " is a palindrome");
    return
}
console.log(word + " is NOT a palindrome");



// ## Create Stack

var Stack = function(){
    this.count = 0;
    this.storage = {}


//Adds a value onto the end of the stack
this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
}

//Removes and returns the value at the end of the stack
this.pop = function(){
    if(this.count === 0){
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

this.size = function(){
    return this.count;
}

//Returns the value at the end of the stack
this.peek = function(){
    return this.storage[this.count-1];
}
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());