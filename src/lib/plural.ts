const rules = new Intl.PluralRules('en-US');

/** "1 item", "3 items": counts through Intl.PluralRules, not `n === 1`. */
export function formatItems(n: number) {
  return `${n.toLocaleString('en-US')} ${rules.select(n) === 'one' ? 'item' : 'items'}`;
}
