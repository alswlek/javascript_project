// for (let i=0; i<=10; i++) {
//     if (i%2==0)
//     console.log(i) 
// }
// 짝수
// for (let i=0; i<=10; i+=2) {
//     if (i%2==0)
//     console.log(i) 
// }

const { sigmoid } = require("@tensorflow/tfjs-core");

// 구구단
// for (let i=2; i<10; i++) {
//     for(let j=1; j<10; j++)
    
// console.log(i + 'x' + j + "=" + i*j)
// }

// while문
// i=2
// while(i<10) {
//     console.log("while문 실행", i)
//     i++;
// }

// let fruit =["banana","apple","pineapple","mango"]

// for (let i=0; i<fruit.length; i++){
//     console.log(fruit[i])
// }

//문제1. 1부터 100까지 더하는 for문 만들고 결과 출력
// let sum=0;

// for (i=1; i<=100; i++) {
//     sum+=i
// }
// console.log(sum);

//1~100 홀수
// for (let i=1; i<=100; i+=2){
//     console.log(i)
// }

// for (let i=1; i<=100; i++) {
//     if (i%3==0) {
//         console.log(i)
//     }
// }

//1부터 50까지 369 결과 프린트
// for (i=1; i<=50; i++) {
//     if (i%3==0) {
//         console.log("짝")
//     }
//     else {
//         console.log(i)
//     }
// }

// 369문제

// for (let i=1; i<=50; i++) {
//     let stringValue = i.toString()
//     let result =""
//     for (let j=0; j<stringValue.length; j++){
//         if(stringValue[j]==='3' ||stringValue[j]==='6'||stringValue[j]==='9'){
//         result= result+"짝"
//         }
//     }
//     console.log(result.length>0?result:i)
// }


//gpt---------------------------------------------------------------------
// for (let i=1; i<=100; i++) {
//     if(i%2==0) {
//         console.log(i)
//     }
// }

// for (let i=1; i<=100; i++) {
//     if (i%3==0) {
//         console.log(i)
//     }
// }
// let sum=0;
// for (let i=1; i<=100; i++) {
//     if (i%5==0) {
//         console.log(sum+=i)
//     }
// }
// console.log(sum)
// gpt22--------------------------------------------
// for (let i=1; i<=100; i++) {
//     if(i%3==0 && i%5==0)
//         console.log(i)
// }

// let sum=0;
// for (let i=1; i<=100; i++) {
//     if (i%3 !==0) {
//         sum+=i
//     }
// }
// console.log(sum)

// for (let i=100; i>0; i--) {
//     console.log(i)
// }


// for (let i=1; i<=100; i++) {
//     if (i%3==0) {
//         console.log(i)
//     }
// }

// 369문제

// for (let i=1; i<=50; i++) {
//     let stringValue = i.toString()
//     let result =""
//     for (let j=0; j<stringValue.length; j++){
//         if(stringValue[j]==='3' ||stringValue[j]==='6'||stringValue[j]==='9'){
//         result= result+"짝"
//         }
//     }
//     console.log(result.length>0?result:i)
// }

for(let i=1; i<=50; i++) {
    let stringValue = i.toString()
    let result=''
    for (let j=0; j<stringValue.length; j++) {
        if(stringValue[j]==='3' || stringValue[j]==='6' || stringValue[j]==='9'){
            result= result+"짝"
        }
    }
    console.log(result.length>0?result:i)
}