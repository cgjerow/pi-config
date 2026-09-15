---
name: allocation-calculator
description: Calculate proportional 401k account allocations (Traditional vs Roth) across core holdings and PCRA.
---

# Allocation Calculator Skill

Calculates proportional share allocations between Traditional and Roth 401k accounts when PCRA holdings are funded from mixed sources.

## Workflow

### 1. Gather Input

Ask the user for two pieces of data:

**A. Core 401k breakdown** — the contribution source lines for DFSVX (or whichever fund is in the core plan):

```
Employee Pre-Tax 401k              $XX,XXX.XX    XXX.XXX    $XX.XX
Employer Match                     $XX,XXX.XX    XXX.XXX    $XX.XX
Employee Roth 401k                 $XX,XXX.XX    XXX.XXX    $XX.XX
Employee 401(k) Roth Converted     $XX,XXX.XX    XXX.XXX    $XX.XX
Employer Match Roth Convert        $XX,XXX.XX    XXX.XXX    $XX.XX
Employee After Tax Roth Conv       $XX,XXX.XX    XXX.XXX    $XX.XX
```

Identify which sources are **Traditional** (Pre-Tax, Employer Match without "Roth") and which are **Roth** (Roth 401k, Roth Converted, Roth Convert, After Tax Roth Conv).

**B. PCRA holdings** — the table from Schwab PCRA view:

```
Symbol    Description    Price    Qty    Mkt Val    % of Acct
DFIV      ...            $X.XX    XX     $X,XXX     XX.XX%
VOO       ...            $XXX.XX  XX     $X,XXX     XX.XX%
Cash      ...            -        -      $XXX       XX.XX%
```

And the PCRA funding source breakdown:

```
Employee Pre-Tax 401k              $X,XXX
Employer Match                     $XXX
Employee After Tax Roth Conv       $X,XXX
```

### 2. Calculate

**Step 1: Core account totals**
- Sum Traditional core contributions → `trad_core_value`, `trad_core_shares`
- Sum Roth core contributions → `roth_core_value`, `roth_core_shares`
- Note the core fund price per share

**Step 2: PCRA ratios**
- Sum Traditional PCRA funding dollars → `trad_pcra_dollars`
- Sum Roth PCRA funding dollars → `roth_pcra_dollars`
- Sum total PCRA funding dollars (all sources) → `total_funded_pcra_dollars`
- **Normalize to 100% of funded dollars** (cash in PCRA is NOT a funding source):
  - `trad_pct = trad_pcra_dollars / total_funded_pcra_dollars`
  - `roth_pct = roth_pcra_dollars / total_funded_pcra_dollars`
- **Critical: these percentages must sum to 100%.** If the funding sources don't equal the total PCRA market value, the difference is unallocated cash — normalize the ratios so Trad + Roth = 100% of the funded portion.

**Step 3: Allocate PCRA shares**
- For each PCRA holding (including cash): `trad_shares = total_shares × trad_pct`
- For each PCRA holding (including cash): `roth_shares = total_shares × roth_pct`
- Round to 3 decimal places
- For cash/money market: allocate the dollar amount directly (`trad_cash = total_cash × trad_pct`, `roth_cash = total_cash × roth_pct`)

**Step 4: Combine**
- `trad_total_shares = trad_core_shares + trad_pcra_shares`
- `roth_total_shares = roth_core_shares + roth_pcra_shares`

### 3. Output

Present results in three tables:

```
## EA Trad (Pre-Tax + Employer Match)

| Ticker | Core 401k | PCRA | Total |
|--------|-----------|------|-------|
| DFSVX  | XXX.XXX   | 0    | XXX.XXX |
| DFIV   | 0         | XX.XXX | XX.XXX |
| VOO    | 0         | X.XXX  | X.XXX |
| SNVXX  | 0         | XX.XXX | XX.XXX |

**Total Value: $XX,XXX.XX**

## EA Roth (Roth + After Tax)

| Ticker | Core 401k | PCRA | Total |
|--------|-----------|------|-------|
| DFSVX  | XXX.XXX   | 0    | XXX.XXX |
| DFIV   | 0         | XX.XXX | XX.XXX |
| VOO    | 0         | X.XXX  | X.XXX |
| SNVXX  | 0         | XX.XXX | XX.XXX |
| Cash   | 0         | $XXX | $XXX |

**Total Value: $XX,XXX.XX**

## Full EA Combined

| Ticker | Total Shares | Total Value | % of EA |
|--------|-------------|-------------|---------|
| DFSVX  | XXX.XXX     | $XXX,XXX    | XX.XX%  |
| DFIV   | XX.XXX      | $X,XXX      | X.XX%   |
| ...    | ...         | ...         | ...     |

**Total: $XXX,XXX.XX**

---

*Note: PCRA allocations are proportional (dollar-weighted). Actual ETF shares are whole numbers purchased at different times and cannot be perfectly traced to a bucket.*
```

## Edge Cases

- **No PCRA**: If PCRA is empty or not provided, just report the core breakdown.
- **Multiple core funds**: If the core plan has funds other than DFSVX, ask which fund each contribution source went to, or note that the user may need to provide that breakdown separately.
- **Cash in PCRA**: Allocate cash proportionally between buckets (same ratio as other holdings), as a dollar amount.
- **Rounding**: Always show 3 decimal places for shares. Note that fractional shares are theoretical — actual holdings are whole shares.

## Tips

- The ratio calculation is the key insight: PCRA is funded proportionally from different tax buckets. The same ratio applies to every PCRA holding.
- **Funding sources often don't equal total PCRA value** — the difference is usually cash sitting in the account. Always normalize ratios to the funded dollars, not the total PCRA value.
- If the user has PCRA funding sources beyond the three common ones (Pre-Tax, Match, After Tax Roth), ask for the full breakdown before calculating.
