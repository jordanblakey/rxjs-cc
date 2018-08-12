window.rxjs = rxjs

// Create observable and sub
const observable = rxjs.Observable.create(observer => {
  observer.next('hello')
  observer.next('world')
})

observable.subscribe(val => print(val))

// Observe DOM events
const clicks = rxjs.fromEvent(document, 'click')

clicks.subscribe(click => {
  console.log(click)
})

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved!')
  }, 1000)
})

const obsvPromise = rxjs.from(promise)
obsvPromise.subscribe(result => print(result))

const timer = rxjs.timer(2000)
timer.subscribe(done => print('ding!!!'))
// timer.finally(() => { print('All done!') })


const interval = rxjs.interval(1000)
const subscription = interval.subscribe(int => print(new Date().getSeconds()))

setTimeout(() => {
  subscription.unsubscribe()
}, 3000)

const mashup = rxjs.of('anything', ['you', 'want'], 23, true, { 'key': 'value' })
mashup.subscribe(val => print(val))


const cold = rxjs.Observable.create(observer => {
  observer.next(Math.random())
})
// const hot = cold.publish()


cold.subscribe(a => print(`Subscriber A: ${a}`))
cold.subscribe(b => print(`Subscriber B: ${b}`))

const x = Math.random()
const hot = rxjs.Observable.create(observer => {
  observer.next(x)
})

hot.subscribe(a => print(`Subscriber A: ${a}`))
hot.subscribe(b => print(`Subscriber B: ${b}`))
// hot.connect()

// Helper to print values
function print(val) {
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
}