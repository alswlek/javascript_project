// 배열
// pop() : 배열 끝에있는 아이템을 제거, 그 아이템값을 리턴
// push(‘아이템’): 배열 끝에 아이템 추가, 배열의 최종 길이 리턴
// includes(‘아이템’): 배열에 아이템이 포함되어있으면 true리턴 아니면 false 리턴
// indexOf(‘아이템’): 아이템의 인덱스 번호를 리턴
// slice(시작점, 끝점): 시작점~끝점(미포함) 까지 배열을 복사해서 리턴
// 좀더 다양한 사용법 참고 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice(시작점,개수): 시작점부터 개수만큼 실제 배열에서 아이템 제거
// length : 배열 함수는 아니지만 배열의 크기를 리턴해주는 속성

// let fruit4 ='banana'
// let fruit2='mango'
// let fruit3='grape'

// let fruit=['banana','mango','grape','apple']
// console.log(fruit)
// console.log(fruit[0])

// fruit.pop()
// console.log(fruit)
// fruit.push('pineapple')
// console.log(fruit)

// console.log(fruit.includes('apple'))
// console.log(fruit.includes('pear'))


let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

// 어레이에 마지막 아이템 “Zebra” 제거하기
console.log(animals.pop())
console.log(animals);

// 주어진 어레이에 “Dog” 추가하기
console.log(animals.push('Dog'))

// animals.unshift("Dog"); -> 이건 배열 앞쪽에 dog추가할수 있음.

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito", "Mouse", "Mule");
console.log(animals);
// 해당 어레이에는 "Human"이 있는가?
console.log(animals.includes('Human'))
// 해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes('Cat'))
// "Red deer"을 "Deer"로 바꾸시오
console.log(animals.indexOf('Red deer'))
console.log(animals[77]='deer');
console.log(animals[77])

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.indexOf('Spider'))
console.log(animals.splice(81,3));
console.log(animals);
// "Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)
console.log(animals.indexOf('Tiger'))
console.log(animals)

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf('Baboon'))
console.log(animals.indexOf('Bison'))
let newanimals=animals.slice(8,16);
console.log(newanimals);