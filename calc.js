const fs = require('fs')
const Lexer = require('./lexer')
const Parser = require('./parser')
const Interpreter = require('./interpreter')

fs.readFile('part10.txt', function (err, data) {
  const text = data.toString()
  const lexer = new Lexer(text)
  const parser = new Parser(lexer)
  const interpreter = new Interpreter(parser)
  result = interpreter.interpret()
  console.log('res:', interpreter.GLOBAL_SCOPE)
})

// const text = `BEGIN BEGIN number := 2; END; s :=3; END.`

// const input = document.getElementById('input')
// const box = document.getElementById('box')

// input.addEventListener('input', updateValue)
// window.addEventListener('keyup', search)

function updateValue(e) {
  // text = e.srcElement.value
}

function search(e) {
  if (e.keyCode === 13) {
    // const lexer = new Lexer(text)
    // const interpreter = new Interpreter(lexer)
    // const res = interpreter.expr()
    // box.innerHTML = res
    const lexer = new Lexer(text)
    const parser = new Parser(lexer)
    const interpreter = new Interpreter(parser)
    result = interpreter.interpret()
    console.log(interpreter.GLOBAL_SCOPE)
  }
}