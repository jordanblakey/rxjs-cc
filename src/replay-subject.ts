import { ReplaySubject } from 'rxjs'

// Replays a specified number of previously emitted values on sub.
// Second arg specifies the max time to replay in milliseconds
const subject = new ReplaySubject(30, 300)

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
}, 500)

function addItem(val: any) {
  const node = document.createElement('li')
  const textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}