# GitHub Repository Setup Troubleshooting

Let's fix the issues you're experiencing with GitHub:

## Step 1: Check Your Local Git Status

Run these commands to see the current state of your repository:

```bash
# Check if you have any branches
git branch

# Check if you have any commits
git log --oneline
```

## Step 2: Create the GitHub Repository First

You need to create the repository on GitHub before pushing:

1. Go to https://github.com/new
2. Repository name: akshartech
3. Description: AksharTech website with React frontend and Flask backend
4. Choose Public or Private
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 3: Make Sure You Have Committed Changes

If you haven't made any commits yet:

```bash
# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: AksharTech website"
```

## Step 4: Check Your Default Branch Name

Git repositories created after October 2020 usually use "main" as the default branch, but older Git versions might use "master":

```bash
# Check your current branch name
git branch
```

## Step 5: Push to GitHub Using the Correct Branch Name

If your branch is named "master":

```bash
git push -u origin master
```

If your branch is named "main":

```bash
git push -u origin main
```

If you don't have a branch yet or want to explicitly create a "main" branch:

```bash
# Create a main branch and switch to it
git checkout -b main

# Push to GitHub
git push -u origin main
```

## Step 6: Verify the Repository Exists

Make sure you've created the repository on GitHub before pushing. The URL should be:
https://github.com/ahpythoneer/akshartech

If you're still getting "repository not found", double-check:
1. That you've created the repository on GitHub
2. That your GitHub username is correct in the URL
3. That you have the necessary permissions
