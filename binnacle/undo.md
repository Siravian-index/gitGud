<!-- useful commands -->

git differ <filename>

git reflog

<!-- Local changes -->

# 1 Discarding All Local Changes in a File

git restore <filename>

// Discarding uncommitted local changes cannot be undone!

# 2 Restoring a Deleted File

git restore <filename>

# 3 Discarding Chunks / Lines in a File

git restore -p <filename>

# 4 Discarding All Local Changes

git restore .

Discarding uncommitted local changes cannot be undone!

<!-- Committed changes -->

# 5 Fixing the Last Commit

git commit --amend -m "<descriptive-message>"

# 6 Reverting a Commit in the Middle

git revert <commit-hash>

// "git revert" creates a new commit that reverts the effects of a specified commit.

# 7 Resetting to an Old Revision

git reset --hard <commit-hash>

git reset --mixed <commit-hash>

// "git reset" sets your HEAD pointer to an older revision.
// --hard means delete everything that is ahead of the <commit-hash>
// --mixed means join everything and go back to the <commit-hash>

# Resetting a File to an Old Revision

git restore --source <commit-hash> <filename>
