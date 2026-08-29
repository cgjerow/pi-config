---
name: git-checkpoint
description: Creates a git branch checkpoint before making changes, and offers to create a PR or rebase on completion. Use when working on feature work or any changes where you want a clean branch history.
---

# Git Checkpoint Skill

Creates a temporary branch before making changes, with options to create a PR or rebase on completion.

## Usage

### Before Starting Work

1. Create a checkpoint branch:
```bash
# In the project root:
git checkout -p feature/your-task
```

### After Finishing Work

1. Check for uncommitted changes:
```bash
git status --porcelain
```

2. If there are changes, offer the user options:

**Option A: Create a PR**
```bash
git add -A
git commit -m "feat: your description"
git push -u origin feature/your-task
gh pr create --title "feat: your description" --body ""
```

**Option B: Rebase onto main**
```bash
git checkout main
git pull origin main
git checkout feature/your-task
git rebase main
# Resolve conflicts if any
```

**Option C: Keep as-is**
Just leave the branch for later.

## Notes

- Always use descriptive branch names: `feature/description` or `fix/description`
- If no git repo, skip this skill
- If already on a feature branch, suggest reusing it
