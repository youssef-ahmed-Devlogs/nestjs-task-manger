# Confirm my email

As a new member, I want to confirm my email with the code I got, so that I can start using my account.

## Acceptance criteria

- The endpoint is public.
- The right code confirms the account. After that, the member can log in.
- A wrong code gets an error, and the account stays unconfirmed.
- A code works only once.
- The code is never stored as plain text.
- **(proposed)** A code stops working after a set time. Source: [Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html), its advice for reset codes.
- **(proposed)** Too many wrong tries are blocked for a while. Source: the same page, on rate limiting.

## Questions

- How long does a code live?
- Can a member ask for a new code when the first one expires? The brief does not say.
