// let userHeight = 180
// let userWeight = 74

// let normal_w = (userHeight - 100) * 0.9
// document.write(normal_w)
// console.log(normal_w)

let name = prompt("당신의 이름은?", "")
let height = prompt("당신의 키는?", "0")
let weight = prompt("당신의 체중은?", "0")

let normal_w = (height - 100) * 0.9
let result = weight >= normal_w - 5 && weight <= normal_w + 5

result = result ? "적정 체중입니다." : "적정 체중이 아닙니다."
document.write(name+" 님은"+result)

