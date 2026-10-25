# Send emails from templates

As the developer of this API, I want every email built from a template, so that the text and the layout live outside the code.

## Acceptance criteria

- Each kind of email has its own template: the confirmation code, the password reset code, and the due date reminder.
- **(proposed)** A value put into a template, such as a member's name, is escaped, so it cannot break the email's HTML. Source: [NestJS, Mail](https://docs.nestjs.com/application/mail), "The HTML must be safe".
- **(proposed)** A failed send does not fail the request that caused it. Source: the same page, "The mail must survive failures".

## Questions

- Does each email come in English and in Arabic?
