# Add a task

As a member, I want to add a task to one of my projects, so that I can track a piece of work.

## Acceptance criteria

- A member adds a task to their own project, with a title, and a description, a priority, a due date, a category and tags.
- A new task starts as "to do".
- The category and the tags must be ones an admin created.
- A project never holds more tasks than the "most tasks a project can hold" setting.
- A task cannot be added to another member's project, or to a deleted one.
- Each missing or invalid field gets its own validation error.

## Questions

- Which fields are required, besides the title?
- Which priorities are there: low, medium and high?
- Can a due date be in the past?
