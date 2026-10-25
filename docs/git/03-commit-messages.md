# Commit messages

```
<type>(<scope>): <what it does>
```

- `type`:
  - `feat`: new behavior
  - `fix`: a bug fix
  - `refactor`: same behavior, better code
  - `test`: tests only
  - `docs`: docs only
  - `chore`: packages, config, tools
- `scope`: the module, such as `categories`. Leave it out when the change is in no single module.
- What it does: a command, lowercase, no period, 50 characters at most.
- It must complete: "If applied, this commit will ___".
- To say why, run `git commit` without `-m`, leave a blank line after the title, and write the body.

```
feat(categories): add create category endpoint
fix(auth): reject expired refresh token
docs: answer questions in manage categories story
chore: add mongoose
```

Source: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), as [Nest's own repo](https://github.com/nestjs/nest/blob/master/CONTRIBUTING.md#commit) does.
