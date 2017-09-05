import { generateRandom, sum } from './components/Nav'

let sum1 = sum(3,1)

let App = document.querySelector('.App')

App.innerHTML = `<h1>${sum1}</h1>`
