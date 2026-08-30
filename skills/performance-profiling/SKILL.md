---
name: performance-profiling
description: Identify bottlenecks and optimize hot paths. Uses profiling techniques, analyzes metrics, and proposes targeted optimizations.
---

# Performance Profiling Skill

Identifies performance bottlenecks and proposes targeted optimizations.

## Workflow

### 1. Measure
- Establish a baseline: current performance metrics
- Identify the slow part: which function, query, or endpoint?
- Profile the code: where is time/memory being spent?

### 2. Analyze

**Common Bottlenecks:**
- **CPU:** CPU-bound operations, inefficient algorithms, tight loops
- **Memory:** Memory leaks, excessive allocations, large data structures
- **I/O:** Disk reads/writes, network calls, database queries
- **Concurrency:** Lock contention, thread pool exhaustion, race conditions

**Profiling Techniques:**
- Use built-in profilers (cProfile, perf, pprof, etc.)
- Add timing instrumentation
- Analyze heap snapshots
- Check database query plans

### 3. Optimize

**Optimization Strategies:**
- **Algorithmic:** Better time/space complexity
- **Caching:** Memoization, result caching, CDN
- **Batching:** Combine requests, batch database operations
- **Lazy loading:** Load data on demand
- **Parallelization:** Concurrent requests, async operations
- **Indexing:** Database indexes, search indexes

**Optimization Order:**
1. Fix the biggest bottleneck first
2. Measure the improvement
3. Move to the next bottleneck
4. Don't optimize prematurely

### 4. Verify
- Performance improved by the expected amount
- No regressions in correctness
- Memory usage is acceptable
- Code readability is maintained

## Output Format

```markdown
## Performance Profile Report

**Target:** [Function/Endpoint/Query]
**Baseline:** [Current metrics]
**Profiled:** [When]

### Bottleneck Analysis
| # | Location | Time/Memory | % of Total | Type |
|---|----------|------------|-----------|------|
| 1 | [function] | [Nms] | [N%] | CPU/IO/Memory |

### Recommendations
| Priority | Change | Expected Impact | Effort |
|----------|--------|----------------|--------|
| 🔴 High | [Change 1] | [N% improvement] | [Low/Med/High] |

### Profiling Data
[Key metrics and findings]

### Before/After
| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Response time | [Nms] | [Nms] | [N%] |
| Memory | [N MB] | [N MB] | [N%] |
```

## Tips

- Always measure before optimizing — don't guess
- Focus on the biggest bottlenecks first (90/10 rule)
- Profile under realistic load, not just local testing
- Consider the trade-off: is the optimization worth the complexity?
- Add performance tests to catch regressions
- Document the baseline so future optimizations can be measured
