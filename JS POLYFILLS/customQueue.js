class Queue{
    constructor(){
        this.array = [];
    }
        enQueue = function(e){
            return this.array.push(e);
        };


deQueue = function(){
            return this.array.shift();
        };

        enQueueThree = function(e){
            for(let i=0; i<3; i++){
                this.array.push(e)
            }
            return this.array;
        }
        deQueueThree = function(e){
            for(let i=0; i<3; i++){
               this.array.pop();
            }
            return this.array
        }

    display(){
        console.log(this.array)
    }
}
let q = new Queue();
q.enQueue(5)
q.enQueue(5)
q.enQueue(7)
q.enQueueThree(3)
q.deQueueThree()
q.deQueue();
q.display()