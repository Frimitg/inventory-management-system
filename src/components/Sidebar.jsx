import { LogOut } from 'lucide-react';
import { COLORS } from '../theme';
import { NAV_ITEMS } from '../data/mockData';

export default function Sidebar({ page, setPage }) {
  return (
    <div style={{ width: 232, minWidth: 232, height: '100vh', background: COLORS.bg, borderLeft: `0.5px solid ${COLORS.border}`, display: 'flex', flexDirection: 'column', position: 'sticky', top: 0 }}>
      <div style={{ padding: '22px 20px 18px', borderBottom: `0.5px solid ${COLORS.border}` }}>
        <div style={{ fontSize: 19, fontWeight: 700 }}>انبار</div>
        <div style={{ fontSize: 11.5, color: COLORS.text3, marginTop: 2 }}>سیستم مدیریت</div>
      </div>

      <div style={{ padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = page === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, textAlign: 'right',
                border: 'none', outline: 'none', cursor: 'pointer', fontFamily: 'inherit',
                padding: '10px 12px', borderRadius: 8, fontSize: 13.5,
                background: active ? COLORS.accentDim : 'transparent',
                color: active ? COLORS.accent : COLORS.text2,
                fontWeight: active ? 600 : 400,
              }}
            >
              <Icon size={16} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div style={{ padding: '16px 18px', borderTop: `0.5px solid ${COLORS.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: COLORS.accent, color: '#0A1310', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, flexShrink: 0 }}>
            ا
          </div>
          <div>
            <div style={{ fontSize: 11.5, color: COLORS.text3 }}>خوش آمدید</div>
            <div style={{ fontSize: 13.5, fontWeight: 500 }}>ادمین</div>
          </div>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'transparent', border: `0.5px solid ${COLORS.border}`, borderRadius: 8, padding: '9px 12px', color: COLORS.text2, fontFamily: 'inherit', fontSize: 13, cursor: 'pointer' }}>
          <LogOut size={15} />
          خروج
        </button>
      </div>
    </div>
  );
}
