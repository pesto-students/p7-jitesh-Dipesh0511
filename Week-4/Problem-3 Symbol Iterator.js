let fibObj = { 

    one: 0, 
    two: 1,
    temp: 0,
     [Symbol.iterator](){
        return this;
     },
    next(){
        this.temp = this.two;
        this.two = this.temp + this.one; 
        this.one = this.temp; 
        return {value: this.two}
    } 
} 
for(let i = 0 ; i < 10; i++){ 
       console.log(fibObj.next().value) //1,2,3,5,8..... 
} 