// function* generator() {
//     yield 1
//     yield 2
//     yield 3
// }

// const obj = generator();

// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());

// const iter = {
//     start: 0,
//     end: 10,
//     step: 2,

//     [Symbol.iterator](){
//         let currentValue = this.start; 
//         const that = this; //allowing the next mehtod to have access to the this. in it's scope. Essentially creating a closure.
//         return {
//             next(){
//                 if(currentValue <= that.end){
//                     const result = {value: currentValue, done:false};
//                      currentValue += that.step;
//                     return result;
//                 } else {
//                     return {value: that.end, done: true};

//                 }
                
                
//          }
//         }
//     }
// }

// console.log("using for ... of on iter")
// for (const val of iter) {
//     console.log(val);
// }


// function *generator(start, end, step) {
//     for(let i = start; i <= end; i += step){
//         yield i;
//     }
// }

// let obj = generator(0,10,2);

// console.log('start using generator')
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());
// console.log(obj.next());


//create data set
const largeDataSet = Array.from({ length: 100 }, (_, i) => `item ${i}`);

//create generator to paginate over data set
let startIndex = 0;
const skip = 10;
let endIndex = skip;

function incrimentStartIndex() {
    return  startIndex += skip;
}

function incrimentEndIndex() {
    return endIndex += skip;
}


function slicedArray() {
   let dataSet = largeDataSet.slice(startIndex, endIndex);
   incrimentStartIndex()
   incrimentEndIndex()
   return dataSet;
}

function* paginate(){
    while (true) {
        yield slicedArray()
    }
    
}

//console log to the system to simulate pagination in a realworld scenrio
let iteration = paginate()

console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log(iteration.next())
console.log('done');