---
name: deployment
description: Step-by-step deployment with health checks. Handles release preparation, deployment execution, monitoring, and rollback procedures.
---

# Deployment Skill

Manages the deployment process from preparation through monitoring and rollback.

## Workflow

### 1. Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Changelog written
- [ ] Database migrations reviewed
- [ ] Environment variables configured
- [ ] Feature flags set (if applicable)
- [ ] Rollback plan documented

### 2. Prepare
- Create a release branch or tag
- Build the artifact
- Run integration tests against staging
- Verify configuration for the target environment

### 3. Deploy

**Choose Strategy:**
- **Blue-Green:** Spin up new version, switch traffic, keep old as backup
- **Canary:** Deploy to small subset, monitor, expand
- **Rolling:** Update instances one at a time
- **All-at-once:** Quick but riskiest

**Execution:**
1. Deploy to staging first (if not already done)
2. Deploy to production using chosen strategy
3. Monitor health checks
4. Verify key functionality

### 4. Post-Deployment Verification

**Automated Checks:**
- Health endpoint returns 200
- Key API endpoints respond correctly
- Database connectivity works
- External service integrations work

**Manual Checks:**
- Core user flows work
- Error pages render correctly
- Assets load properly

### 5. Monitor
- Watch error rates and latency
- Check logs for errors
- Monitor resource usage (CPU, memory, disk)
- Watch business metrics (if applicable)

### 6. Rollback (if needed)
- Identify the issue
- Execute rollback procedure
- Verify rollback was successful
- Document what went wrong

## Output Format

```markdown
## Deployment Report

**Version:** [x.y.z]
**Environment:** [staging/production]
**Strategy:** [blue-green/canary/rolling]
**Timestamp:** [When]

### Pre-Deployment Checklist
- [x] Tests passing
- [x] Code reviewed
- [x] ...

### Deployment Steps
1. [Step 1] — ✅
2. [Step 2] — ✅
3. [Step 3] — ⏳

### Post-Deployment Verification
- Health check: ✅
- API endpoints: ✅
- Database: ✅
- Manual checks: ✅

### Monitoring
- Error rate: [Normal/Elevated]
- Latency: [Normal/Elevated]
- Resource usage: [Normal/Elevated]

### Status: [Success / Partial / Failed]
```

## Tips

- Automate as much of the deployment as possible
- Use feature flags to control rollout
- Always have a tested rollback plan
- Deploy small changes frequently, not big changes rarely
- Monitor during and after deployment
- Document post-mortems for any issues
- Use CI/CD pipelines for consistency
