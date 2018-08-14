import { AsyncSubject } from 'rxjs'

// With async subject, observers only emit values when the complete signal is recieved
const subject = new AsyncSubject()

subject.subscribe(
  data => addItem('Observer 1: ' + data),
  err => addItem(err),
  () => addItem('Observer 1 completed')
)

let i = 1
let int = setInterval(() => subject.next(i++), 100)

setTimeout(() => {
  const observer2 = subject.subscribe(
    data => addItem('Observer2: ' + data)
  )
  subject.complete() //
}, 500)

function addItem(val: any) {
  const node = document.createElement('li')
  const textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}