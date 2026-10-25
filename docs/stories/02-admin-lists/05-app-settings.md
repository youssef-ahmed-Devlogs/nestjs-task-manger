# Change app settings

As an admin, I want to see and change app settings without a new release, so that I can tune the system while it runs.

## Acceptance criteria

- Only an admin can see or change the settings. A member gets a 403.
- A change works from the next request on, with no restart.
- Each setting has a default value, used until an admin changes it.
- A wrong value, such as a negative number, gets a validation error.
- The first setting is the most tasks a project can hold.

## Questions

- Which other settings are needed? The brief names only the most tasks a project can hold. Other stories may add some, such as the file size limit or the reminder time.
