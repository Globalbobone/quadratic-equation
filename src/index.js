module.exports = function solveEquation(equation) {
  var arr = equation.split(' ');
  var a,b,c,discr,d1,d2;
  var x1,x2;
  var res=[];
  a = +arr[0];
  b = arr[4];
  c = arr[8];
  d1 = arr[3];
  d2 = arr[7];
  
  if (d1 == "-") {
    b = -b;}
  else {
    b = +b;}
  if (d2 == "-") {
    c = -c;}
  else {
    c = +c;}

  discr = b*b - 4*a*c;
  
  x1 = Math.round((-b + Math.sqrt(discr)) / (2*a));
  x2 = Math.round((-b - Math.sqrt(discr)) / (2*a));
  
  if (x1 < x2){
    res[0] = x1;
    res[1] = x2;}
  else {
    res[1] = x1;
    res[0] = x2;}
  return res;
}
