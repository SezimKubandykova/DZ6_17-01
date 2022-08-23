//1
const arr = [1, 2, 3]
const arr2 = ['Jack', 'John', 'Sara', 'Ben']
const arr3 = [54, 87, 55, 45]
const arr4 = ['search', 'find']
const arr5 = ['hello', 'bye']

const arr6 = [...arr, ...arr2, ...arr3, ...arr4, ...arr5]
console.log(arr6)

//2
const obj = {
  first_name: 'Sezim',
  last_name: 'Kubandykova',
  age: 23,
  nation: 'kyrgyz',
  country: 'Kyrgyzstan'
}
const obj2 = {
  ...obj,
  address: 'Bishkek',
  profession: 'architect',
  company: 'Project'
}
console.log(obj2)

//3
const button = document.getElementById('button')
const input = document.getElementById('input')
button.onclick = () => {
  const text = document.createElement('div')
  text.setAttribute('class', 'text')
  text.innerText = `Hello ${input.value}!`
  document.body.append(text)
}

