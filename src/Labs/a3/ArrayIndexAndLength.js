function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return (
      <div>
        <h4>Array Index and Length</h4>
        Length1 = {length1}
        <br />
        Index1 = {index1}
      </div>
    );
  }
  
  export default ArrayIndexAndLength;
  