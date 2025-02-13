// function makeBurger(type, size, num) {
//     console.log("빵두기")
//     console.log("상추")
//     if(num<1) {
//         return num
//     }

const { FusedConv2D } = require("@tensorflow/tfjs-core");

//     if (type=="불고기") {
//         console.log("불고기패티")
//     } else if (type=="새우") {
//         console.log("새우패티")
//     }
    
//     console.log("뚜껑덮기")
//     console.log(type, "버거" ,size, "사이즈", num,"개 준비 완료")

//     return "완료되었습니다."

// }

// function serveCoke() {
//     console.log("콜라")
//     console.log("얼음추가")
//     console.log("콜라추가")
// }

// function serverfrenchFries() {
//     console.log("감튀")
//     console.log("감튀추가")

// }
// // let result = makeBurger("새우","라지",0)
// // console.log("버거 프로세스 결과", result )

// function makeSet () {
//     makeBurger("새우","라지",2)
//     serverfrenchFries("감튀", "추가")
//     serveCoke()
// }

// makeSet()

// 문제1)  "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
// function greet () {
//     console.log("안녕 내 이름은 제시카야")
// }

// greet()




// 문제 2) 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
// function greet (name) {
//     console.log("안녕 내 이름은" ,name, "야")
// }
// greet("에밀리")

// 문제3) 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오.
// function greet (name) {
//     console.log("안녕 내 이름은" ,name, "야")
//     return name
// }

// const name = greet("나탈리")
// console.log("안녕 내 이름은" ,name, "야")

// 문제4) meetAt 함수를 만들어주세요.// 인자를 세개 받습니다.  첫번째 인자는 년도에 해당하는 숫자  두번째 인자는 월에 해당하는 숫자  세번째 인자는 일에 해당하는 숫자
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
// 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열
// 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을

// function meetAt(year, month, date) {
//     if (year !== undefined && month !== undefined && date !== undefined) {
//         // 년, 월, 일 모두 있는 경우
//         return `${year}/${month}/${date}`;
//     } else if (year !== undefined && month !== undefined) {
//         // 년도와 월만 있는 경우
//         return `${year}년 ${month}월`;
//     } else if (year !== undefined) {
//         // 년도만 있는 경우
//         return `${year}년`;
//     } else {
//         // 잘못된 입력 처리
//         return "올바른 날짜를 입력하세요.";
//     }
// }
// console.log(meetAt(2024));               
// console.log(meetAt(2024, 2));            
// console.log(meetAt(2024, 2, 13));        

// 문제5) findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열
// arr 의 값들 중 가장 작은 값을 리턴 해주세요. 
//만일 arr 가 비어있으면 0을 리턴 해주세요. 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열 [100,200,3,0,2,1]

// function findSmallestElement(arr) {
//     if (arr.length ==0) {
//         return 0
//     }
//     let result = arr[0]
//     for (let i=1; i<arr.length; i++) {
//         if (result > arr[i]){
//             result =arr[i]
//         }
//      }
//     return result
// }

// console.log(findSmallestElement([100,200,3,0,2,1]))

// function findSmallestElement(arr) {
//     if (arr.length ==0)
//         return 0
//     let result=arr[0]
//     for (let i=1; i<arr.length; i++) {
//         if(result > arr[i])
//             result=arr[i]
//     }
//     return result
// }

// console.log(findSmallestElement([100,200,3,0,2,1]));