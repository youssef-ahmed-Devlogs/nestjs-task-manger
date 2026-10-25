# Messages in English or Arabic

As a member, I want messages in English or Arabic, as my app asks, so that I can read them in my language.

## Acceptance criteria

- The request says which language it wants.
- Error messages come back in that language, validation messages included.
- A request that asks for neither language gets the default language.
- What members write, such as a project's name, is never translated.

## Questions

- How does a request say its language: the `Accept-Language` header, or something else?
- Which language is the default?
- Do emails follow the member's language too?
