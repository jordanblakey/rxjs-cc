import { Observable } from 'rxjs';

// Create the observable
var observable = Observable.create((observer: any) => {
  try {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('This will not send')

  }
  catch (err) {
    observer.error(err)
  }
})

// Subscribe to the observable and pass a function
observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed')
)

// Print helper method
function addItem(val: any) {
  let node = document.createElement('li')
  let textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}