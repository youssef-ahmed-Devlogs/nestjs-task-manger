# Manage categories

As an admin, I want to create, edit and delete categories, so that members have a shared list to pick from.

## Acceptance criteria

- Only an admin can create, edit or delete a category. A member gets a 403.
- A category has one name, not one per language.
- Two categories never share a name.
- A deleted category is removed for good. It is not kept in the database.
- Each missing or invalid field gets its own validation error.
