# Stay logged in

As a member, I want a new pair of tokens from my refresh token, so that I stay logged in without typing my password again.

## Acceptance criteria

- The endpoint takes the refresh token, not an access token.
- A valid refresh token returns a new access token and a new refresh token.
- The used refresh token stops working at once.
- An expired refresh token gets a 401.
- The refresh token is never stored as plain text.
- **(proposed)** When an already used refresh token comes back, the member's active refresh token stops working too, and they must log in again. Source: [RFC 9700, section 4.14.2](https://www.rfc-editor.org/rfc/rfc9700.html#section-4.14.2).

## Questions

- How long does each token live?
