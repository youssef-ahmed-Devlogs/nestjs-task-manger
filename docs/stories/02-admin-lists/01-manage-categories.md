# Manage categories

As an admin, I want to create, edit and delete categories, so that members have a shared list to pick from.

## Acceptance criteria

- Only an admin can create, edit or delete a category. A member gets a 403.
- A category has a name.
- Two categories never share a name.
- Each missing or invalid field gets its own validation error.

## Questions

- When a category is deleted, what happens to the tasks that use it: is the delete refused, or do they lose the category?
- Does a category have a name in English and a name in Arabic?
- Is a deleted category kept in the database, like projects and tasks? The course did this for its lists.
