# Set a new password with the code

As a member who forgot my password, I want to set a new password with the code I got, so that I can log in again.

## Acceptance criteria

- The endpoint is public.
- The right code and a valid new password change the password. The old password stops working.
- A code works only once, and stops working after a set time.
- A wrong code gets an error, and the password does not change.
- **(proposed)** This does not log the member in: they log in with the new password. Source: [Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html).
- **(proposed)** All the member's refresh tokens stop working. Source: the same page, on sessions after a reset.
- **(proposed)** The member gets an email that their password changed. Source: the same page, on notifying the user.
