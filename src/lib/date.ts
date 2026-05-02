const czDateFormatter = new Intl.DateTimeFormat('cs-CZ', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function parseIsoDateOnly(value: string): Date | undefined {
  // Expecting YYYY-MM-DD from frontmatter.
  const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(value.trim());
  if (!m) {
    return undefined;
  }

  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);

  if (!Number.isFinite(y) || !Number.isFinite(mo) || !Number.isFinite(d)) {
    return undefined;
  }

  // Use UTC to avoid timezone shifting the day.
  return new Date(Date.UTC(y, mo - 1, d));
}

export function parseDate(value: unknown): Date | undefined {
  if (value instanceof Date) {
    return Number.isFinite(value.getTime()) ? value : undefined;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  // Prefer strict YYYY-MM-DD parsing (frontmatter value when quoted).
  const iso = parseIsoDateOnly(value);
  if (iso) {
    return iso;
  }

  // YAML can parse `2026-03-10` as a Date, and z.coerce.string() then turns it
  // into a `Date#toString()` like "Tue Mar 10 2026 01:00:00 GMT+0100 ...".
  const d = new Date(value);
  if (!Number.isFinite(d.getTime())) {
    return undefined;
  }
  return d;
}

export function formatCzDate(value: unknown): string {
  const parsed = parseDate(value);
  if (!parsed) {
    return typeof value === 'string' ? value : String(value ?? '');
  }
  return czDateFormatter.format(parsed);
}
