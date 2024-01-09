function receivesAFunction(callback) {
    console.log("Inside receivesAFunction");
    callback();
  }
  
  function returnsANamedFunction(){
    console.log ("inside returnsANamedFunction");
    return function namedFunction(){
        console.log("I'm Named")
    }
  }
  
  function returnsAnAnonymousFunction(){
    console.log("REturn an anonymous function");
    return function(){
        console.log("I'm Anonymous!")
    }
  }