# Log in

As a member, I want to log in with my email and password, so that I can use my account.

## Acceptance criteria

- The endpoint is public.
- The right email and password of a confirmed account return an access token and a refresh token.
- An unconfirmed account cannot log in.
- **(proposed)** A wrong email and a wrong password get the same error, which does not say which one was wrong. Source: [Authentication Cheat Sheet, "Login"](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).

## Questions

- Does an unconfirmed account get told to confirm its email, or the same error as a wrong password? OWASP gives "account disabled" as an example of a wrong message.
