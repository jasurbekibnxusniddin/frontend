Array.prototype.customAt = function(index) {
    const i = index > 0 ? index : this.length + index;
    
    return this[i] || this[0];
}

Array.prototype.customSlice = function(start, end) {
    // Kesib olish logikasi
    const cut = (arr, start, end) => {     
        const newArr = [];    
        for(let i = 0; i < arr.length; i++)
            if(i >= start && i < end) newArr.push(arr[i]);    
    
        return newArr;
    }
    
    // Declaration'lar
    let startIndex = isNaN(start) ? 0 : +start;
    let endIndex = +end;
    
    // Validatsiya
    if(isNaN(end)) endIndex = this.length;
    if(isNaN(endIndex)) return [];        
    
    // Index hisoblash
    if(startIndex < 0) {
        startIndex = this.length + startIndex;
    }

     if(endIndex < 0) {
        endIndex = this.length + endIndex;
    }
    // Validatsiya davomi
    if(startIndex > endIndex) return [];        

    // Qiymat qaytarish
    return cut(this, startIndex, endIndex);
}


console.log(['a', 'b', 'c'].customAt(-1))

console.log(['a', 'b', 'c'].customSlice(1, 2))