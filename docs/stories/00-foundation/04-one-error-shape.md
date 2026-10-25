# One shape for every error

As a developer of a client app, I want every error to have the same shape, so that I can show any error the same way.

## Acceptance criteria

- Every error comes back in one shape, with its status code and a message.
- A validation error lists a message for each wrong field, with the field's name.
- Errors that Nest throws by itself keep their own status code and use the same shape, such as a 401 from a guard or a 404 for an unknown route.
- **(proposed)** An unexpected error gives a 500 with a general message. Its details go to the log, never to the response. Source: [Error Handling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html).

## Questions

- Do we use the standard shape of [RFC 9457, Problem Details](https://www.rfc-editor.org/rfc/rfc9457.html), or a shape of our own? The course used its own `errors` list.
