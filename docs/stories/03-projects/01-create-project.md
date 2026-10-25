# Create a project

As a member, I want to create a project, so that I can group my tasks in one place.

## Acceptance criteria

- A logged-in member creates a project with a name and an optional description.
- The new project belongs to the member who created it.
- Another member cannot see it.
- A request with no name gets a validation error on the `name` field.

## Questions

- Can two projects of the same member have the same name?
