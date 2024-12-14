// function fact(a){
//     let f = 1
//     for (let i = 1 ; i <= a ; i ++){
//          f *=i
//     }
//     let n =""
//     for (let i = f ; i > 0 ; i = Math.floor(i / 10)){
//           n +=i%10
//     }
//     return n
//  }
//  console.log(fact(4));

//6 zadacha
// function sover (a){
//     let max =-99999
//     let cnt = 0
//     for (let i = a ; i > 0 ; i =Math.floor(i/10))  {
//          if ( i % 10 > max) max = i % 10
//     }
//     console.log(max);

//     for ( let i = 1 ; i <= max ; i ++){
//         cnt += i
//         if ( cnt == a){
//             return true
//         }
//     }
//     return false
// }
// console.log(sover(28));

//zadacha 5
// function kamtarin(a,b){
//     let n = 1
//     for (; ;){
//           if ( n % a == 0 && n % b == 0){
//             return n
//           }
//           else {
//             n++
//           }
//     }
//  }
//  console.log(kamtarin(2,4));

// 3 zadacha
// function num(a){
//     let b = "next:"+(a+2)+",prev:"+(a-2)
//     let c = "next:"+(a+1)+",prev:"+(a-1)
//     if ( a % 2 == 0){
//      return b
//     }
//     else if  (a % 2 != 0){
//      return c
//     }

//   }
// console.log(num(8));

//2zadacha
// function se(a,b,c){
//     return a > b && b > c || a < b && b < c
//     ? a*2 +","+b*2+","+c*2
//     : a*(-1)+","+b*(-1)+","+c*(-1)
//  }
// console.log(se(-3,-8,-5));

// palindrom and prime
// function palindrom(a){
//    function isPrime(b){
//       for (let i = 2 ; i < b ; i ++){
//          if ( b % i == 0){
//             return false
//          }
//          else {
//             return true
//          }
//    }
//       }
//       let n = ""
//      for (let i = a ; i > 0 ; i = Math.floor(i / 10) ){
//           n += i % 10
//      }
//      return a == n && isPrime(a)
// }
// console.log(palindrom(1236521));

//exam
//zadachai 2
// function num (a){
//       let n = ""
//       for ( let i = a ; i > 0 ; i = Math.floor(i/10)){
//          n +=i%10
//       }
//       return n.length==1?"It’s one digit":n
//    }
//    console.log(num(0102));

//zadachai 6
// function fib ( a){
//       let b =0
//       let c =0
//       let d = 1
//       for ( let i = 2 ; i <=a ; i ++){
//          b = c + d
//          c = d
//          d = b
//       }
//       return c
//    }
//    console.log(fib(5));

//recuirse
// function num (a){
//       let n = 0
//       let cnt = 0
//          for (let i = 1 ; i <= a ; i ++ ){
//                cnt = (i * 6)-(i-1)
//          }
//          return cnt
//       }
// console.log(num(4));
// let cnt = 0
// function sum(num){
//       if (num == 0){
//             return cnt
//       }
//       cnt += num
//       return sum(num-1) ;
// }
// console.log(sum(5));

// clouser
// function clou(a){
//       let cnt = 0
//       return ()=>{
//             return cnt = cnt + a
//       }
//       cnt = a
// }
// let number = clou(20)

// console.log(number());
// console.log(number());
// console.log(number());
// console.log(number());
// console.log(number());

// factorial
// let n = 1
// function fact(num){
//       if ( num == 0){
//             return n
//       }
//        n *= num
//        return fact(num-1)
// }
// console.log(fact(5));

//sumTo
// let n = 0
// function fact(num){
//       if ( num == 0){
//             return n
//       }
//        n += num
//        return fact(num-1)
// }
// console.log(fact(10));

//power
// function power(a,b){
//       if ( b == 0){
//             return 1
//       }
//       return a * power(a,b-1)
// }
// console.log(power(2,3));

// function clouser(a){
//       return (b)=>{
//             return a +b
//       }
// }
// let number = clouser(3)
// console.log(number(5))

//yakum
// let n = 0
// function num(a){
//       if (a == 0){
//             return n
//       }
//       n += a % 10
//       return num(Math.floor(a/10))
// }
// console.log(num(3333));

//duyum
// function mablagh(a, b = 10){
//       if ( b == 1 ){
//             return a * b
//       }
//       return a * b + mablagh(a, b - 1)
// }
// console.log(mablagh(1));

// function taqsim(a,b){
//       if (a == 1 || b == 1){
//             return
//       }
// }

//seyum
// function gcd (a ,b ) {
//       if ( b == 0){
//             return a
//       }
//       return gcd(b, a % b)
// }
// console.log(gcd(8,12));

//chorum
// function juft(a){
//       if ( a == 1){
//             return "true"
//       }
//       else if ( a == 0){
//             return "false"
//       }
//       return juft (Math.floor(a/2))
// }
// console.log(juft(15));

//panjum
// function suffly(a){
//       return (b) => {
//            return b + a
//       }
// }
// let ly = suffly("ly")
// console.log(ly("love"));

//shashum
// function shash(a){
//       return ( b = 0 ) => {
//             return ( c = 0 ) => {
//                   return ( d = 0 ) => {
//                         return ( e = 0 ) => {
//                               return ( f = 0 ) => {
//                                   return a+b+c+d+e+f
//                               }
//                         }
//                   }
//             }
//       }
// }
// console.log(shash(2)(2)(2)(2)(2)(2));

//haftum
// function sum(a){
//       return (b) => {
//            return a = a + b
//       }
// }
// let jam = sum (5)
// console.log(jam(10));
// console.log(jam(10));
// console.log(jam(10));

// hashtum
// function duoblefact(a){
//       if (a <= 0){
//             return 1
//       }
//      return a * duoblefact(a  - 2)
// }
// console.log(duoblefact(9));

//nuhum
// function clouser(func,limit){
//       let cnt = 0
//       return () => {
//             ++ cnt
//             if (cnt >= limit){
//                   return func ()
//             }
//             return cnt
//       }
// }
// let  limitedFunc = clouser (() => {
//       return "вызов не происходит"
// }, 2)
// console.log(limitedFunc());
// console.log(limitedFunc());
// console.log(limitedFunc());

//dahum
// function num (a,b){
//       if (b == 0){
//             return 1
//       }

//       return a * num(a,b-1)
// }
// console.log(num(2,4));

//home task
//yakum
// function sumOddto(a){
//      if ( a <= 0){
//         return 0
//      }
//      return a % 2 == 0 ? ( a - 1 ) + sumOddto(a-3) : a + sumOddto(a-2)
// }
// console.log(sumOddto(1));

//duyum

//seyum
// function sumBinaryDigits(a){
//     if ( a <= 0) {
//       return 0
//     }  
    

//    return a % 10 + sumBinaryDigits(Math.floor(a/10))
// }
// console.log(sumBinaryDigits(10000000111));

//chorum
// function sumNumbers (a = 0){
//    return (b) => {
//       return a = a + b
//    }
// }
// let addNumbers = sumNumbers ()
// console.log(addNumbers(3));
// console.log(addNumbers(5));
// console.log(addNumbers(8));

//panjum
// function  averageCalculator (a = 0, c = 1){
//       return (b) => {
//          return a = (a + b)/c++
//       }
// }
// let calculateAverage = averageCalculator()
// console.log(calculateAverage(10));
// console.log(calculateAverage(15));

// shashun



// haftum 
function   sequenceGenerator(a=0){
   return (b = 0) => {
      return  
   }
}
let generateSequence=  sequenceGenerator(2)
console.log(generateSequence());
console.log(generateSequence());
