# The first admin

As the person who runs the system, I want the first admin to be created when the system starts for the first time, so that someone can manage categories, tags and settings.

## Acceptance criteria

- On the first start, one admin account is created.
- Starting again never creates a second one.
- The admin can log in, and gets admin-only access.

## Questions

- Where do the first admin's email and password come from? The course read them from the environment.
- Does the admin log in through the same endpoint as members? The course had its own admin login.
