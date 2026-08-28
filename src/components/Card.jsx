import { COLORS } from '../theme';

export default function Card({ children, style }) {
  return (
    <div style={{ background: COLORS.surface, border: `0.5px solid ${COLORS.border}`, borderRadius: 12, ...style }}>
      {children}
    </div>
  );
}
