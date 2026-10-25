# Ask for a password reset code

As a member who forgot my password, I want a code sent to my email, so that I can set a new password.

## Acceptance criteria

- The endpoint is public.
- A member gives their email, and gets a code by email.
- **(proposed)** The answer is the same whether the email has an account or not. Source: [Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).
- **(proposed)** Many requests for the same email are slowed down. Source: the same page, on rate limiting.
