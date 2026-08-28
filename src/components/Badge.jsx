import { COLORS } from '../theme';

export default function Badge({ children, tone }) {
  const c = tone === 'warn' ? COLORS.warn : tone === 'muted' ? COLORS.text3 : COLORS.accent;
  const bg = tone === 'warn' ? COLORS.warnDim : tone === 'muted' ? COLORS.surface2 : COLORS.accentDim;
  return (
    <span style={{ fontSize: 11, background: bg, color: c, padding: '3px 10px', borderRadius: 6, whiteSpace: 'nowrap' }}>
      {children}
    </span>
  );
}
