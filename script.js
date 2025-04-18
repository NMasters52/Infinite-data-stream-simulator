function* generator() {
    yield 1
    yield 2
    yield 3
}

const obj = generator();

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());