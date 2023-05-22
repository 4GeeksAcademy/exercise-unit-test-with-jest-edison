const { fromEuroToDollar, fromYenToPound,fromDollarToYen } = require('./app.js')


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One yen should 0,0062 be pound ", function(){
    //import the function from app.js
    const yens = fromYenToPound(5)
    const expected = 0.8*(5/127.9); 
     expect(yens).toBe(expected); 
})

test("One dollar should  be yen ", function(){
    //import the function from app.js
    const dollar = fromDollarToYen(3)
    const result = 127.9*(3/1.2)
     expect(dollar).toBe(result); 
})


