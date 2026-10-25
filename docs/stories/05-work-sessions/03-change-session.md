# Change a session

As a member, I want to move a planned session, so that my plan follows my day.

## Acceptance criteria

- A member changes the start or the end of their own future session.
- A past session cannot be changed.
- The changed session still never overlaps another active session of the same member, even when two requests arrive at the same moment.
- The end stays after the start.

## Questions

- Is a session that has started but not ended "past"?
