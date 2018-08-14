import { Observable } from 'rxjs';
import { share } from 'rxjs/operators'
import { fromEvent } from 'rxjs'

// Create the Observable (aka Producer)
var observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    setInterval(() => {
      observer.next('I am good.')
    }, 2000)

    // observer.complete()
    // observer.next('This will not send')

  }
  catch (err) {
    observer.error(err)
  }
}).pipe(share()) // sharing causes the

// Subscribe to the observable and pass a function
const observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
)

// Observable subscriptions (observers) are independent of the Observable
// const observer2 = observable.subscribe(
//   (x: any) => addItem(x)
// )

// Bind subscriptions together with the add method, so unsub applies to both.
// observer.add(observer2)
// observer.remove(observer2)

// Set a timeout to unsub from the observer (no completion signal)
setTimeout(() => {
  const observer3 = observable.subscribe(
    (x: any) => addItem('Subscriber 2: ' + x)
  )
  // observer.unsubscribe()
}, 1000)

// Print helper method
function addItem(val: any) {
  let node = document.createElement('li')
  let textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}