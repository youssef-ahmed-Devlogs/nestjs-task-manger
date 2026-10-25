# One shape for every success

As a developer of a client app, I want every successful response to have the same shape, so that I always know where the data is.

## Acceptance criteria

- Every successful response has one shape, with the data in the same place.
- A paged list also says the page, the page size and the total count, always in the same place.

## Questions

- What does the shape look like? For example `{ "data": ... }` for one item, and `{ "data": [...], "meta": { ... } }` for a list.
