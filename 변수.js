// let : 변수를 선언하고 재할당도 가능 언제든 값을 바꿀 수 있음
// const : 변수에 한번 값을 할당하면 다시 값을 바꿀 수 없음
// var : let의 옛날버전. let과 작동원리는 같으나 호이스팅과같은 문제가 있음 (다음 비디오에서 자세히 다룰 예정) var은 왠만하면 쓰지마

// let color = 'pink'
// color='blackpink'
// let color2='black'
// console.log(color,color2)


// const color3 ='white'
// color3 = "mint"
// console.log(color3) 이건 오류남 const는 값을 바꿀수 없기때문에

// 문제
// let a=30
// let b=50

// // console.log(a,b)
// let c=a
// // console.log(b,c)
// a=b
// // console.log(a,c)
// b=c
// console.log(a,b)


// a랑 b랑 값 바꾸기
// let a=1
// let b=2 
// // c=2
// c=a
// // console.log(a,b,c)
// c=b
// b=a
// a=c
// console.log(a,b,c)


// 여기에 코드를 작성해서 x와 y의 값을 바꾸고, z에는 원래 x의 값을 저장하세요.
// let x = 10;
// let y = 20;
// let z;

// z=x
// x=y
// y=z



// console.log(x, y, z); // 예상 출력: 20, 10, 10

// 변수 z를 사용하지 않고 x와 y의 값을 바꾸는 방법도 있어요.
// let x = 10;
// let y = 20;

// [x, y] = [y, x];

// console.log(x, y); // 출력: 20, 10

// 서로 순환 교환(rotate)
// let a = 1;
// let b = 2;
// let c = 3;

// // 여기에 코드를 작성해서 값을 순환 교환하세요.
// let temp =a
// a=b
// b=c
// c=temp


// console.log(a, b, c); // 예상 출력: 2, 3, 1.

// 이번에는 네 개의 변수(x, y, z, w) 를 사용하여 한 칸씩 순환 이동하는 코드를 작성해 보세요!
// let x = 10;
// let y = 20;
// let z = 30;
// let w = 40;

// // 값을 순환 교환하세요.

// let temp=x
// x=y
// y=z
// z=w
// w=temp

// console.log(x, y, z, w); // 예상 출력: 20, 30, 40, 10

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// // 여기에 코드를 작성해서 값을 순환 교환하세요.
// let temp=a
// a=b
// b=c
// c=d
// d=e
// e=temp

// console.log(a, b, c, d, e); // 예상 출력: 2, 3, 4, 5, 1

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// // 여기에 오른쪽으로 한 칸 회전하는 코드를 작성하세요.
// let temp=e//temp=5
// e=d
// d=c
// c=b
// b=a
// a=temp


// console.log(a, b, c, d, e); // 예상 출력: 5, 1, 2, 3, 4



// let a= 30
// let b= 50
// console.log(a,b)
// let temp=a
// a=b
// b=temp
// console.log(a,b)
