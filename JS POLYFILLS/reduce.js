// Create your custom reduce method (myReduce), which will work exactly similar to Array.reduce(). 

Array.prototype.myReduce = function(callback){
    let a =0;
    for(let i=0; i<this.length; i++)
    {
        callback(a = a+this[i])
    }
     
    return a;
}

let arr = [2,5,3,9,7];
let res = arr.myReduce((acc,item) => acc+item);
console.log('res:', res)
