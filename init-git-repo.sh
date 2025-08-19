#!/bin/bash

# This script initializes a Git repository and prepares it for pushing to GitHub

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}====== AksharTech Git Repository Setup ======${NC}"

# Initialize Git repository
echo -e "${YELLOW}Initializing Git repository...${NC}"
git init

# Stage all files
echo -e "${YELLOW}Staging all files...${NC}"
git add .

# Commit files
echo -e "${YELLOW}Committing files...${NC}"
git commit -m "Initial commit: AksharTech website with React frontend and Flask backend"

echo -e "${GREEN}====== Git Repository Initialized Successfully ======${NC}"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "2. Connect your local repository to GitHub with:"
echo "   git remote add origin https://github.com/yourusername/akshartech.git"
echo "3. Push your code to GitHub with:"
echo "   git push -u origin main"
echo ""
echo "For more detailed instructions, see github-setup-guide.md"
