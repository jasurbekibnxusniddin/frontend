// 
class MyString extends String {
    
    constructor(str) {
        super(str)
    }
    
    at(index) {
        const i = index > 0 ? index : this.length + index;
        return this[i] || this[0];
    }
    
}

console.log(new MyString('abc').at(-1))