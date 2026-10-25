# Read settings from the environment

As the developer of this API, I want it to read its settings from the environment, and refuse to start when one is missing or wrong, so that a bad setting fails at once, not in the middle of a request.

## Acceptance criteria

- Every setting comes from the environment, or from a `.env` file on my machine.
- A missing required setting stops the app at start, with a message that names it.
- A setting with a wrong value, such as a port that is not a number, stops the app at start, with a message that names it.
- Secrets, such as the token secret, are never written in the code.
- **(proposed)** The `.env` file is never committed. A committed `.env.example` lists every setting, with no real secrets. Source: [The Twelve-Factor App, "Config"](https://12factor.net/config), on keeping config apart from code.
