---
name: database-migration
description: Safe database schema changes with rollback plans. Handles migrations, data transformations, and zero-downtime deployment strategies.
---

# Database Migration Skill

Manages database schema changes safely with rollback plans and zero-downtime strategies.

## Workflow

### 1. Analyze
- What schema changes are needed?
- What's the current database version?
- What data exists that might be affected?
- What's the deployment strategy? (rolling, blue-green, etc.)

### 2. Plan Migration

**Migration Order:**
1. Backward-compatible code changes (deploy first)
2. Database schema changes (add columns, tables)
3. Data migrations (populate new columns)
4. Remove old code (deploy last)

**Zero-Downtime Principles:**
- Always add, never remove (in the first step)
- New columns should have defaults
- New tables should be empty initially
- Indexes should be created online if possible

### 3. Create Migration Files

**Forward Migration:**
- Schema changes (ALTER TABLE, CREATE TABLE, etc.)
- Data transformations
- Index creation

**Rollback Migration:**
- Reverse schema changes
- Data cleanup
- Index removal

### 4. Execute

**Testing:**
- Test migration on staging/development first
- Verify data integrity after migration
- Check performance impact

**Deployment:**
- Run backward-compatible code changes
- Run schema migration
- Run data migration
- Monitor for errors
- Be ready to rollback

### 5. Verify
- All data is intact
- Performance is acceptable
- No application errors
- Rollback plan works if needed

## Output Format

```markdown
## Migration Report

**Database:** [Type and version]
**Current Version:** [N]
**Target Version:** [N+1]

### Changes
| # | Type | Description | Rollback |
|---|------|-------------|----------|
| 1 | Add column | users.email_verified | DROP COLUMN |
| 2 | New table | user_sessions | DROP TABLE |

### Migration Steps
1. [Deploy code with new columns, defaults]
2. [Run schema migration]
3. [Run data migration]
4. [Deploy code using new columns]

### Rollback Plan
1. [Rollback steps if needed]

### Risk Assessment
- **Risk Level:** [Low/Medium/High]
- **Downtime:** [Expected]
- **Data Loss Risk:** [None/Low/High]

### Performance Impact
- [Expected impact on queries]
- [Index considerations]
```

## Tips

- Always test migrations on a production-like dataset
- Keep migrations idempotent when possible
- Use transactions for data migrations
- Never drop columns in the first migration
- Monitor query performance after adding indexes
- Document the migration history
- Have a tested rollback plan before deploying
