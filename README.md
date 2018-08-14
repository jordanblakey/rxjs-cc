# RXJS CC High Level

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array#extras (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

Think of RxJS as Lodash for events.

- Reactive extensions in Javascript. Avail. in Java, Python, C#, PHP, etc.
- Implementation of the Observer pattern x Iterator pattern in a functional style.
- Library for working with streams using Observables.
- Streams are sequences of events ongoing in time.
- Streams emit values, errors, and a completion signal.

## Terms

- Observable: invokable collection of future values or events.
- Observer: collection of callbacks that listen to values from the observable.
- Subscription: represents the execution of an obervable. Used to cancel.
- Operators: Pure functions - map, filter, concat, reduce, etc.
- Subject: basically an EventEmiiter. Used to multicast values & events.
- Schedulers: Central dispatch to manage concurrency. Coordinate computation.

## Observable sequences

- Watch streams and emit functions asyncronously
- Subscribed by observer
- Interact w/ as array

## Aspects of working with RXJS

- Examining data streams from events
- Creating observables from array-like objects
- Creating observables from scratch
- Filtering and piping observables
- Promises to observables
- Error handling

## Observable types

- Manual
- From Event: emit values on DOM events
- Subject
- Behavior Subject: Replays the last value emitted on subscription
- Replay Subject: Replays emitted values on subscription
- Async Subject: Based on completion signal

## Operators

-