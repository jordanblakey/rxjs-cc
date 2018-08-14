import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs'

// Subscribe to document mousemove events after timeout
var observable = fromEvent(document, 'mousemove')
setTimeout(() => {
  const subscription = observable.subscribe(
    (x: any) => addItem(x)
  )
}, 2000)


function addItem(val: any) {
  var node = document.createElement('li')
  var textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}