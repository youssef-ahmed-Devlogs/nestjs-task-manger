# Project stats

As a member, I want to see how far a project is, so that I know how much is left.

## Acceptance criteria

- For one of my projects, I get the number of tasks in each status, and the percent done.
- Deleted tasks are not counted.
- A project with no tasks shows zero for each status, and 0 percent done.

Agreed in the interview: the numbers are computed with a MongoDB aggregation, to learn it.

## Questions

- Stats for one project only, or for all my projects at once too?
