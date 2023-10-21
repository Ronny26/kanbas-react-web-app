const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);

function FunctionParenthesisAndParmeters() {
    console.log('Hello World!');
    return(
        <>
    <h3>Parenthesis and Parameters</h3>
    twosquared = {twoSquared}<br />
    square(2) = {square(2)}<br />
    threePlusOne = {threePlusOne}<br />
    plusOne(3) = {plusOne(3)}<br />
   </>
    );
 }
 export default FunctionParenthesisAndParmeters