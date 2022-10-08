// Create your custom forEach method (myForEach), which will work exactly similar to Array.forEach(). \

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
  
  function callback(element) {
    console.log(element); 
  }
  
  var arr = [2, 4, 6, 8, 10];
  arr.myForEach( callback);
