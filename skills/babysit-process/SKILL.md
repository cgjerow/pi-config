---
name: babysit-process
description: "Watch and restart a long-running process until it completes successfully or the session is cancelled. Use for multi-hour to multi-day E2E runs that may fail intermittently."
---

# Babysit Process Skill

Watch a long-running process, detect failures, restart it, and keep going until it completes successfully or the session is cancelled.

## When to Use

- Running a long process (hours to days) that may fail intermittently
- Need the process to keep restarting until it passes end-to-end
- You want to monitor progress without keeping a terminal open

## Core Principle

**Never pass a `timeout` parameter to `bash` calls.** If a timeout is needed, use a very large value (e.g., `86400` for 24 hours).

## Workflow

### 1. Start the Process

Launch the process in the background with `nohup` so it survives session disconnects:

```bash
nohup npm run your-long-process > output.log 2>&1 &
echo $! > process.pid
```

Or use `disown` if already running:

```bash
npm run your-long-process > output.log 2>&1 &
disown
```

### 2. Monitor Progress

**Check on the process every 5 minutes.** Do not wait longer than 5 minutes between checks — this ensures you catch failures quickly and don't miss important log output.

Check if the process is still running:

```bash
cat process.pid && ps -p $(cat process.pid)
```

Check progress via logs:

```bash
tail -f output.log
# or
tail -n 50 output.log
```

### 3. Detect Failure

Check if the process exited:

```bash
PID=$(cat process.pid)
if ! ps -p $PID > /dev/null 2>&1; then
  echo "Process has exited"
  tail -n 20 output.log
else
  echo "Process is still running"
fi
```

Look for error indicators in the log:

```bash
grep -i "error\|fail\|exception\|crash" output.log | tail -5
```

### 4. Restart on Failure

If the process failed (exited non-zero or shows errors), restart it:

```bash
# Kill if still hanging
PID=$(cat process.pid)
kill $PID 2>/dev/null || true
wait $PID 2>/dev/null || true

# Truncate log (or append with >> instead of >)
> output.log

# Restart
nohup npm run your-long-process > output.log 2>&1 &
echo $! > process.pid
echo "Restarted. PID: $(cat process.pid)"
```

### 5. Loop Until Success

Repeat steps 2-4 in a loop, **checking on the process at least every 5 minutes**:

```
1. Check if process is running
2. If running: check logs for progress/completion
3. If failed: restart
4. If completed successfully: stop and report
5. If session cancelled: stop
6. If no activity in logs: still check process health every 5 minutes
```

## Key Rules

- **Always use `nohup`** — sessions can disconnect
- **Never pass `timeout` to bash** — the process controls its own runtime
- **Log to a file** — `> output.log 2>&1` captures both stdout and stderr
- **Save the PID** — so you can check/kill it later
- **Check exit codes** — `ps` tells you if it's alive, grep tells you if it errored

## Completion Criteria

The process has "passed" when:
- It exits with code 0
- The log shows a success message (e.g., "Build complete", "Tests passed", "Deployment successful")
- No errors appear in the final log output

## Session Cancel

If the user says "stop" or "cancel":
1. Kill the running process: `kill $(cat process.pid)`
2. Report how many restarts occurred
3. Summarize the last log output
4. End the session

## Example Interaction

```
User: "Babysit the npm run e2e-test process"

Agent: "Starting process with nohup. PID: 12345. No timeout set.
        Will monitor and restart on failure."

[5 minutes later]
Agent: "Process exited with code 1. Error found: 'Connection timeout'.
        Restarting..."

[30 minutes later]
Agent: "Process completed successfully. All tests passed.
        Total restarts: 3. Process ran for 35 minutes."
```
