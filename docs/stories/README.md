# Stories

The product brief, split into user stories. Each folder is one group, and each file is one story, in the order to build them.

Each story is one vertical slice: it works end to end, and you can check every acceptance criterion from Swagger. A story says what is needed, never how to code it.

A line marked **(proposed)** is not in the brief. It comes from the source at the end of the line, and waits for your yes. A "Questions" part holds what the product owner still has to decide.

## Rules for every story

- Every endpoint needs a logged-in user, unless its story says it is public. A request with no valid access token gets a 401.
- An admin-only endpoint gives a member a 403.
- A member only ever sees or changes their own data.
- Passwords, tokens and codes are never stored as plain text, and never appear in a response.
- Every error uses the shared error shape. A validation error has a message per field.

## Groups

- [00-foundation](00-foundation/): local services, settings, API docs, error and success shapes, languages, logs, email templates.
- [01-accounts](01-accounts/): sign up, email confirmation, log in, tokens, password reset, my account, the first admin.
- [02-admin-lists](02-admin-lists/): categories, tags and app settings.
- [03-projects](03-projects/): projects, their lists, soft delete and stats.
- [04-tasks](04-tasks/): tasks, their lists, filters, search and soft delete.
- [05-work-sessions](05-work-sessions/): planning sessions with no overlap.
- [06-attachments](06-attachments/): files on tasks.
- [07-favorites](07-favorites/): favorite projects and tasks.
- [08-comments](08-comments/): comments on tasks.
- [09-reminders](09-reminders/): the email before a task is due.
