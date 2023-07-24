// ! CLOSURE

// lexical scope (static scope): defines how variable names are resolved in nested functions, its an importnatn part in closure
// Nested (child) function s ahave access to the scope of their parent functions
// closure: is a function having access to the parent scope//! even after parent function has closed.
// a closure is created when we define a function, not when a function is excuted.


let x =1;
// console.log(parentVlaue); // ReferenceError: parentVlaue is not defined
 const parentFunction = ( ) => {
  let parentVlaue = 2;
  console.log(x, parentVlaue);

  const childFunction = () =>{ //lexical scope
    console.log(x+=5, parentVlaue); //has access to the parent function and global scope
  }

  return childFunction; 
  //child function has closure of the parent function bcz it has access to it also have a closure over the global scope
 }

 const result = parentFunction() // 1 2

console.log(result); //[Function: childFunction]
result();  // 6 2
result(); // 11 2
console.log(x); //1
// console.log(parentVlaue); //!ReferenceError: parentVlaue is not defined

//*! IIFE (Immediately Invoked Function Expression)
const privateCoutner = (()=>{
  let count = 0;
  console.log(`initial value: ${count}`); // 0 , it only happens one time
  return ()=> {count +=1; console.log(count);} // it has closure over the private counter sscope and it has closure over the global scope
})(); // this function only return one time and it only return the child function in private counter

privateCoutner(); //1
privateCoutner(); //2
privateCoutner(); //3



const credits = ((num)=>{
  let credits = num;
  console.log(`initial credits: ${credits}`);
  return ()=>{
    credits -= 1;
    if(credits > 0 ) console.log(`playing game ${credits}`);
    if(credits <= 0) console.log(`not enought credits`);
  }
})(3); // initial credits : 3

credits(); // playing game 2
credits(); // playing game 1
credits(); // not enough credits
