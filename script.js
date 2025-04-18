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

class iter {
    constructor(pageNum, dataSet) {
        this.pageNum = pageNum;
        this.dataSet = dataSet;
    }

    *[Symbol.iterator]() {
        let startIndex = 0;
        while(startIndex < this.dataSet.length){
           let endIndex = Math.min(startIndex + this.pageNum, this.dataSet.length);
            yield this.dataSet.slice(startIndex, endIndex);
            startIndex = endIndex;
        }
    }
}

const largeDataSet = Array.from(({length: 100}), (_, index) => `index: ${index + 1}`)

const page = new iter(1, largeDataSet);

for (const i of page){
    console.log(`item = ${i}`, i)
}