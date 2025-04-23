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
let pageStart = 1;
const itemsPerPage = 10;
let offset = (pageStart - 1) * itemsPerPage;

function displayPage() {
    
}

function* paginate(){
 yield displayPage();   
}

//console log to the system to simulate pagination in a realworld scenrio