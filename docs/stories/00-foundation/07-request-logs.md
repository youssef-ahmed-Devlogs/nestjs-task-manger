# Log every request

As the developer of this API, I want every request logged, so that I can see what happened and how long it took.

## Acceptance criteria

- Every request writes one log line, with its method, path, status code and time taken.
- A failed request is logged too, with its status code.
- **(proposed)** Passwords, tokens and codes never appear in the logs, even when they are in the request. Source: [Logging Cheat Sheet, "Data to exclude"](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html).

## Questions

- Plain text lines, or JSON?
