function testSize(num) {
    function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num < 10) {
    return "Small";
  } else if (num >= 10 && num < 15) {
    return "Small";
  } else if (num >= 15 && num < 20) {
    return "Medium";
  } else if(num >= 20) {
    return "Huge";
  } else {
    return "Change Me";
  }
  
  
    // Only change code above this line
  }
}
  
  testSize(7);