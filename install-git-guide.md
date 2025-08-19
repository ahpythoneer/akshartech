# Installing Git on Windows and Pushing to GitHub

Since Git is not currently installed on your system, you'll need to install it before you can push your project to GitHub.

## Step 1: Download and Install Git

1. Visit the official Git website: https://git-scm.com/download/win
2. The download should start automatically. If not, click on the download link.
3. Once downloaded, run the installer (.exe file).
4. Follow the installation wizard with these recommended settings:
   - **Select Components**: Leave the defaults checked
   - **Choosing the default editor**: Choose your preferred editor (VS Code, Notepad++, etc.)
   - **Adjusting your PATH environment**: Select "Git from the command line and also from 3rd-party software"
   - **Choosing HTTPS transport backend**: Use the OpenSSL library
   - **Configuring line ending conversions**: Select "Checkout Windows-style, commit Unix-style line endings"
   - **Configuring the terminal emulator**: Use MinTTY
   - **Configuring extra options**: Default options are fine
   - **Configuring experimental options**: No experimental options needed

5. Click "Install" and wait for the installation to complete.
6. Click "Finish" when the installation is complete.

## Step 2: Verify Git Installation

1. Close and reopen PowerShell (or open a new PowerShell window).
2. Verify that Git is installed by running:
   ```
   git --version
   ```
   You should see output like `git version 2.33.0.windows.1` (the version number may be different).

## Step 3: Configure Git

Set up your Git identity with your name and email:

```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 4: Initialize the Repository

Now that Git is installed, you can initialize your repository:

```
cd e:/AksharTech
git init
git add .
git commit -m "Initial commit: AksharTech website with React frontend and Flask backend"
```

## Step 5: Connect to GitHub

1. Make sure you have created a repository on GitHub named "akshartech"
2. Connect your local repository to GitHub:
   ```
   git remote add origin https://github.com/ahpythoneer/akshartech.git
   ```

## Step 6: Push Your Code to GitHub

Push your code to GitHub:

```
git push -u origin master
```

Note: If the default branch is named `main` instead of `master`, use:
```
git push -u origin main
```

You'll be prompted to enter your GitHub username and password. For password, you'll need to use a personal access token instead of your GitHub password if you have 2FA enabled.

## Creating a Personal Access Token (if needed)

If you need a personal access token:

1. Go to GitHub and sign in
2. Click on your profile photo in the top-right corner
3. Select "Settings"
4. Scroll down and select "Developer settings" from the left sidebar
5. Select "Personal access tokens" > "Tokens (classic)"
6. Click "Generate new token" > "Generate new token (classic)"
7. Give your token a descriptive name
8. Select the scopes (permissions): at minimum, select "repo"
9. Click "Generate token"
10. Copy the token - you won't be able to see it again!

Use this token as your password when pushing to GitHub.
