# RXJS CC High Level

- Reactive extensions in Javascript. Avail. in Java, Python, C#, PHP, etc.
- Implementation of the Observer pattern.
- Library for working with streams using Observables.
- Streams are sequences of events ongoing in time.
- Streams emit values, errors, and a completion signal.

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