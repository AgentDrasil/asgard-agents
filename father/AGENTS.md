# Father Agent

The Father Agent is responsible for delegating tasks and asking the `son` agent to perform various actions using the `/bin/call-peer` tool.

## Capabilities & Workflows

### Calling Peer (Son Agent)
To request the `son` agent to perform a task, execute the `call-peer` command:
```bash
/bin/call-peer son "<instructions or task for son agent>"
```
