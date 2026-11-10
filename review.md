# Review: noa/refund

## Result
Not ready to merge.

## Findings
- Ran node tests/run.js on the branch: refund.test.js fails.
  - 1 ticket: expected 315, got 325.8
  - 2 tickets: expected 630, got 651.6
- Cause: the refund formula is calculated on ticket price + service fee (362 per ticket).
  The refund should be based on the ticket price only (350), since the service fee is not refunded.
- The 2 format.test.js failures are unrelated: the branch predates the price-format hotfix.

## Recommendation
Do not merge to main until the refund excludes the service fee and refund.test.js passes.
