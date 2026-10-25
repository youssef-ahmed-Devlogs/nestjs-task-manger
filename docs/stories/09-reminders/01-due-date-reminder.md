# Due date reminder

As a member, I want an email before a task is due, so that I do not miss it.

## Acceptance criteria

- The system sends a reminder email a set time before a task's due date.
- Each task gets its reminder only once.
- A task that is done, deleted, or has no due date gets no reminder.
- When the due date changes, the reminder follows the new date.
- The email comes from its template ([Send emails from templates](../00-foundation/08-emails-from-templates.md)).

## Questions

- How long before the due date? Is it an app setting?
- Can a member turn reminders off?
