import { Phone, Mail } from 'lucide-react';
import { COLORS, fmt } from '../theme';
import { SUPPLIERS } from '../data/mockData';
import Card from '../components/Card';
import Badge from '../components/Badge';
import PageHeader from '../components/PageHeader';

export default function Suppliers() {
  return (
    <div>
      <PageHeader title="تأمین‌کننده‌ها" subtitle="شرکت‌های طرف قرارداد برای تأمین کالا" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SUPPLIERS.map((s, i) => (
          <Card key={i} style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 500, marginBottom: 4 }}>{s.company}</div>
              <div style={{ fontSize: 12.5, color: COLORS.text3 }}>شخص رابط: {s.contact}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12.5, color: COLORS.text2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Phone size={13} />{s.phone}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, direction: 'ltr', justifyContent: 'flex-end' }}><Mail size={13} />{s.email}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{fmt(s.items)}</div>
              <div style={{ fontSize: 11, color: COLORS.text3 }}>کالای تأمین‌شده</div>
            </div>
            <Badge tone={s.status === 'فعال' ? 'accent' : 'muted'}>{s.status}</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}
