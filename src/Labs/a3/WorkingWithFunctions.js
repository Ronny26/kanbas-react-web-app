import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisAndParmeters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    console.log('Hello World!');
    return(
       <div>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParmeters/>
       </div>
    );
 }
 export default WorkingWithFunctions