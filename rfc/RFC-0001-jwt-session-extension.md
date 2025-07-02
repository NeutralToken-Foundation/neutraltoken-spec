# RFC-0001: JWT Session Extension for NeutralToken
Licensed under CC BY 4.0


## Summary
Proposes an optional session extension strategy using short-lived, rotating JWTs.

## Motivation
Some use cases need smoother UX without constant re-prompting. This enables silent credential refresh within a secure session.

## Proposal
- Introduce optional `session_id` and `refresh_until` fields
- Allow wallet to issue a new JWT if within the refresh window

## Privacy Considerations
No session IDs are shared with verifiers; all activity remains unlinkable.

## Example

```json
{
  "exp": 1719700600,
  "session_id": "abc123",
  "refresh_until": 1719710000
}
```

## Status: Draft
