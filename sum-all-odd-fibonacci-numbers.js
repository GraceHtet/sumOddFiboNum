module.exports = function (num) {
  // write your code here
  let sum = 2;
  let a = 1;
  let b = 1;
  if(num > 1 ){
    for(let i = 2; i <= num ; i++){ 
      c = a + b;

      if(c <= num && c % 2 !== 0){
        sum += c;
      }
      a= b;
      b= c;
      i++;
    }
    
  }else {
    sum = 0;
  }
  
  return sum;
}