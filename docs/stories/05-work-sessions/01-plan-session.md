# Plan a work session

As a member, I want to plan a work session on one of my tasks, with a start and an end time, so that I set time aside for it.

## Acceptance criteria

- A member plans a session on their own task, with a start time and an end time.
- The end is after the start.
- A session never overlaps another active session of the same member, on any task.
- Two requests that arrive at the same moment can never both create overlapping sessions.
- A session on another member's task, or on a deleted task, is refused.

## Questions

- Can a session start in the past?
- Can one session end at the exact time the next one starts?
- Is there a longest session?
- In which time zone are times sent and returned?
