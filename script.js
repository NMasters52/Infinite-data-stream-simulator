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

const iter = {
    start: 0,
    end: 10,
    step: 2,

    [Symbol.iterator](){
        let currentValue = this.start;
        const that = this;
        return {
            next(){
                if(currentValue <= that.end){
                    const result = {value: currentValue, done:false};
                     currentValue += that.step;
                    return result;
                } else {
                    return {value: that.end, done: true};

                }
                
                
         }
        }
    }
}

for (const val of iter) {
    console.log(val);
}