#jgit-laziness

lazy git commands

##install
```bash
npm install -g jgit-laziness
```

##usage

```bash
jgit commit
jgit commit "commit message"

# will add and commit
# git add .
# git commit -a -m "auto-commit"
```

```bash
jgit push
jgit push "commit message"

# will add, commit, and push
# git add .
# git commit -a -m "auto-commit"
# git push
```

```bash
jgit files

# will list all files
# git ls-files
```

```bash
jgit tracked

# will list all tracked files
# git ls-tree --full-tree -r HEAD
```
