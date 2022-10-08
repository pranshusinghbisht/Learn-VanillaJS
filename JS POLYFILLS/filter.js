// Create your custom filter method (myFilter), which will work exactly similar to Array.filter(). 

Array.prototype.myFilter = function(callback){
 
    let arr = [];
    
    for(let i=0; i<this.length; i++)
    {
     if(callback(this[i]) == true)    
     {
      arr.push(this[i]);
     }
     
    }
    
    return arr;
   }

   let a = [2,4,5,6,7];
   let res = a.myFilter(i => i>5);
   console.log('res:', res)
   
