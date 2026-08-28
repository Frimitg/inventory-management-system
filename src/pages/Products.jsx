import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { COLORS, fmt } from '../theme';
import { PRODUCTS } from '../data/mockData';
import Card from '../components/Card';
import Badge from '../components/Badge';
import PageHeader from '../components/PageHeader';

export default function Products() {
  const [q, setQ] = useState('');
  const filtered = PRODUCTS.filter((p) => p.name.includes(q) || p.category.includes(q));

  return (
    <div>
      <PageHeader
        title="محصولات"
        subtitle="لیست کامل کالاهای موجود در انبار"
        action={
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: COLORS.accent, color: '#0A1310', border: 'none', borderRadius: 8, padding: '9px 16px', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>
            <Plus size={15} /> افزودن محصول
          </button>
        }
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: COLORS.surface, border: `0.5px solid ${COLORS.border}`, borderRadius: 9, padding: '9px 14px', marginBottom: 16, maxWidth: 320 }}>
        <Search size={15} color={COLORS.text3} />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="جستجوی نام یا دسته‌بندی..."
          style={{ background: 'transparent', border: 'none', outline: 'none', color: COLORS.text, fontFamily: 'inherit', fontSize: 13, width: '100%' }}
        />
      </div>

      <Card style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: COLORS.surface2 }}>
              {['کالا', 'دسته‌بندی', 'موجودی', 'قیمت واحد', 'وضعیت'].map((h) => (
                <th key={h} style={{ textAlign: 'right', padding: '11px 16px', color: COLORS.text2, fontWeight: 500, fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => {
              const Icon = p.icon;
              const low = p.stock <= 5;
              return (
                <tr key={i} style={{ borderTop: `0.5px solid ${COLORS.border}` }}>
                  <td style={{ padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ background: COLORS.surface2, borderRadius: 7, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={15} color={COLORS.text2} />
                    </div>
                    {p.name}
                  </td>
                  <td style={{ padding: '11px 16px', color: COLORS.text2 }}>{p.category}</td>
                  <td style={{ padding: '11px 16px' }}>{fmt(p.stock)}</td>
                  <td style={{ padding: '11px 16px', color: COLORS.text2 }}>{fmt(p.price)} تومان</td>
                  <td style={{ padding: '11px 16px' }}>
                    <Badge tone={low ? 'warn' : 'accent'}>{low ? 'کم موجود' : 'موجود'}</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
