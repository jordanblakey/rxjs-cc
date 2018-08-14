import { Observable, from } from 'rxjs';
import { Subject } from 'rxjs'
import { interval } from 'rxjs'
import { merge } from 'rxjs'
import { map, pluck, skipUntil } from 'rxjs/operators'

// MERGE, MAP //////////////////////////////////////////////////////////////////

const observable = Observable.create((observer: any) => {
  observer.next('Hey guys!')
})

const observable2 = Observable.create((observer: any) => {
  observer.next('How is it going?')
})

const newObs = merge(observable, observable2).pipe( // some operators piped in rxjs 6
  map((val: any) => val.toUpperCase()) // Map function
)

newObs.subscribe((x: any) => addItem(x))

// PLUCK ///////////////////////////////////////////////////////////////////////

from([
  { first: 'Gary', last: 'Simon', age: '34' },
  { first: 'Jane', last: 'Simon', age: '40' },
  { first: 'John', last: 'Simon', age: '60' }
])
  .pipe(pluck('first'))
  .subscribe((x: string) => addItem(x))


// SKIP UNTIL //////////////////////////////////////////////////////////////////

const observable3 = Observable.create((data: any) => {
  let i = 1
  setInterval(() => {
    data.next(i++)
  }, 1000)
})

const observable4 = new Subject

setTimeout(() => {
  observable4.next('Hey!')
}, 3000)

const newObs2 = merge(observable3.pipe(skipUntil(observable4)), observable4)
newObs2.subscribe((x: any) => addItem(x))


// ADD ITEM HELPER /////////////////////////////////////////////////////////////
function addItem(val: any) {
  const node = document.createElement('li')
  const textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}