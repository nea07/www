let transSumEl = document.getElementById("currency");
let mountEl = document.getElementById("mount");
let sumEl = document.getElementById("sum");
let resultEl = document.getElementById("result");
let tr = new Audio('true.wav')

const sumCurrent = () => {
    let transSum = parseFloat(transSumEl.value)
    let mount= parseFloat(mountEl.value)
    let res = transSum*mount
    resultEl.innerHTML ='сумма:' +  res.toFixed(2) + 'сом'
    tr.play('true.wav')
}

sumEl.addEventListener('click',sumCurrent)

// let a = '20'
// let b = '30'

// console.log(parseFloat(a)+ parseFloat(b))