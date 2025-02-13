let patient ={
    name:"jimin",
    age : "17",
    disease : "cold"
}

console.log(patient.name)
console.log(patient["name"])

patient.name="minji"
console.log(patient)

patient["age"]=18
console.log(patient)

let patientList =[{name:"minji",age:13},{name:"mj",age:12},{name:"mz",age:11}]
console.log(patientList)

console.log("첫번째 환자는 : ", patientList[0], "입니다.")
console.log("첫번째 환자의 나이는 : ", patientList[0].age, "세 입니다.")
console.log("첫번째 환자의 나이는 : ", patientList[0]["age"], "세 입니다.")