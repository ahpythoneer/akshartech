#!/bin/bash
# Script to push the entire AksharTech project to GitHub

echo "===== Pushing AksharTech Project to GitHub ====="
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
  echo "Initializing git repository..."
  git init
else
  echo "Git repository already exists."
fi

# Make sure we're on the main branch
echo "Setting up main branch..."
git branch -M main

# Configure remote if needed
if ! git remote | grep -q "origin"; then
  echo "Adding remote origin..."
  git remote add origin https://github.com/ahpythoneer/akshartech.git
else
  echo "Remote origin already exists."
fi

# Add all project files
echo "Adding all project files..."
git add .

# Commit changes
echo "Committing all files..."
git commit -m "Initial commit: AksharTech website with React frontend and Flask backend"

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "===== Push Complete ====="
echo "If successful, your project is now on GitHub at: https://github.com/ahpythoneer/akshartech"
echo "You can visit this URL to verify your code has been uploaded."
