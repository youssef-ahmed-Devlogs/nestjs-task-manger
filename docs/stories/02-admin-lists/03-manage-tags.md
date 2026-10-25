# Manage tags

As an admin, I want to create, edit and delete tags, so that members can label their tasks from a shared list.

## Acceptance criteria

- Only an admin can create, edit or delete a tag. A member gets a 403.
- A tag has a name.
- Two tags never share a name.
- Each missing or invalid field gets its own validation error.

## Questions

- When a tag is deleted, is it removed from the tasks that use it, or is the delete refused?
- Does a tag have a name in English and a name in Arabic?
