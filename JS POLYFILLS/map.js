// Create your custom map method (myMap), which will work exactly similar to Array.map(). 

Array.prototype.myMap=function(callback){
  
    var arr = []; 
    
    for(let i=0; i<this.length; i++)
    {
     arr.push(callback(this[i]));
    }
    
    return arr;
   };

   let arr = [3,4,2,5];
   let res = arr.myMap(item => item*3);
   console.log('res:', res)