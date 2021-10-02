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
