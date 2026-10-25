# Sign up

As a visitor, I want to create an account, so that I can keep my own projects and tasks.

## Acceptance criteria

- The endpoint is public.
- A visitor signs up with a name, an email, a phone number and a password.
- The new account is not confirmed, and cannot log in until it is ([Confirm my email](02-confirm-email.md)).
- A confirmation code is sent to the email.
- Two accounts never share an email, even when two sign ups with the same email arrive at the same moment.
- Each missing or invalid field gets its own validation error.
- The password is never stored as plain text, and never appears in a response.

## Questions

- When the email already has an account, does sign up say so, or give the same answer as a new sign up? OWASP advises the same answer, so nobody can find out which emails have accounts. Source: [Authentication Cheat Sheet, "Account creation"](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).
- How long must a password be? OWASP says shorter than 15 characters is weak without MFA, and the maximum should be at least 64. Source: [Authentication Cheat Sheet, "Password Length"](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).
- Must the phone number be unique, and in which format?
