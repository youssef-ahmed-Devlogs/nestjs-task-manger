# Flow

One story = one branch = one pull request.

```bash
git switch main
git pull
git switch -c feat/02-01-manage-categories

# work, and commit each small step

git push -u origin feat/02-01-manage-categories

# open the pull request on GitHub, then merge it

git switch main
git pull
git branch -d feat/02-01-manage-categories
```

- Keep a branch short: a few days at most.
- After a squash merge, `git branch -d` refuses. Check that the pull request says "Merged", then use `-D`.

Source: [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
