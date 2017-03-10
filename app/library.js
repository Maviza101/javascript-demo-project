'use strict'

module.exports = {

 /* Find the average of three integers */
 computeAverage: function(num1, num2, num3) {
   var average = 0;
   average = (num1 + num2 + num3) / 3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: function(num) {
   if (num < 0) return "Cannot find factorial of negative number";
   var factorial = 1;
   if (num == 0 || num == 1) return factorial;
   for (var i = num; i > 1; i--) {
   	    factorial *= i;
   }
   return factorial;
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: function(cTemp) {
   var fTemp;
   fTemp = (cTemp * 1.8) + 32;
   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: function(fTemp) {
   var cTemp;
   cTemp = (fTemp - 32) / 1.8;
   return cTemp;
 }

}
