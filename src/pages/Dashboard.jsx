import { useState } from 'react';
import { Wallet, Users, Receipt, FileText, Package, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { COLORS, fmt } from '../theme';
import { PERIODS, PRODUCTS, LOW_STOCK } from '../data/mockData';
import Card from '../components/Card';
import Badge from '../components/Badge';
import PageHeader from '../components/PageHeader';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{ background: COLORS.surface2, border: `0.5px solid ${COLORS.border}`, borderRadius: 8, padding: '6px 10px' }}>
      <div style={{ fontSize: 11, color: COLORS.text2, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 13, color: COLORS.text, fontWeight: 500 }}>{payload[0].value}</div>
    </div>
  );
}

export default function Dashboard() {
  const [period, setPeriod] = useState('week');
  const data = PERIODS[period];
  const avgTicket = Math.round(data.revenue / data.invoices);

  const metricCards = [
    { label: `فروش ${data.label}`, value: `${fmt(data.revenue)} تومان`, note: data.revenueNote, icon: Wallet, tone: 'accent' },
    { label: `مشتریان ${data.label}`, value: fmt(data.customers), note: 'نفر', icon: Users, tone: 'accent' },
    { label: `فاکتورهای ${data.label}`, value: fmt(data.invoices), note: 'فاکتور ثبت‌شده', icon: Receipt, tone: 'accent' },
    { label: 'میانگین هر فاکتور', value: `${fmt(avgTicket)} تومان`, note: 'ارزش سبد خرید', icon: FileText, tone: 'accent' },
    { label: 'موجودی انبار', value: fmt(PRODUCTS.reduce((s, p) => s + p.stock, 0)), note: 'قلم کالا، وضعیت فعلی', icon: Package, tone: 'warn' },
    { label: 'رو به اتمام', value: fmt(LOW_STOCK.length), note: 'قلم نیازمند سفارش', icon: AlertTriangle, tone: 'warn' },
  ];

  return (
    <div>
      <PageHeader
        title="داشبورد فروش و انبار"
        subtitle="نمای کلی وضعیت فروشگاه"
        action={
          <div style={{ display: 'flex', background: COLORS.surface, border: `0.5px solid ${COLORS.border}`, borderRadius: 10, padding: 4, gap: 2 }}>
            {Object.entries(PERIODS).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                style={{
                  border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: 13,
                  padding: '7px 16px', borderRadius: 7, cursor: 'pointer',
                  background: period === key ? COLORS.accent : 'transparent',
                  color: period === key ? '#0A1310' : COLORS.text2,
                  fontWeight: period === key ? 600 : 400,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 20 }}>
        {metricCards.map((c, i) => {
          const Icon = c.icon;
          const accentColor = c.tone === 'accent' ? COLORS.accent : COLORS.warn;
          return (
            <Card key={i} style={{ borderRight: `2px solid ${accentColor}`, padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Icon size={16} color={accentColor} />
                <span style={{ fontSize: 12.5, color: COLORS.text2 }}>{c.label}</span>
              </div>
              <div style={{ fontSize: 19, fontWeight: 600 }}>{c.value}</div>
              <div style={{ fontSize: 11.5, color: COLORS.text3, marginTop: 4 }}>{c.note}</div>
            </Card>
          );
        })}
      </div>

      <Card style={{ padding: '18px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 13.5, color: COLORS.text2, marginBottom: 6 }}>روند فروش &mdash; {data.label}</div>
        <div style={{ width: '100%', height: 200, direction: 'ltr' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.trend} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="fillTrend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.accent} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={COLORS.accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="d" tick={{ fill: COLORS.text3, fontSize: 11, fontFamily: 'Vazirmatn' }} axisLine={{ stroke: COLORS.border }} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="v" stroke={COLORS.accent} strokeWidth={2} fill="url(#fillTrend)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
        <Card style={{ padding: '18px 20px' }}>
          <div style={{ fontSize: 13.5, color: COLORS.text2, marginBottom: 14 }}>پرفروش‌ترین کالاها &mdash; {data.label}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {data.topProducts.map((p, i) => {
              const max = data.topProducts[0].qty;
              return (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 5 }}>
                    <span>{p.name}</span>
                    <span style={{ color: COLORS.text2 }}>{fmt(p.qty)} عدد</span>
                  </div>
                  <div style={{ background: COLORS.surface2, borderRadius: 4, height: 5 }}>
                    <div style={{ background: COLORS.accent, width: `${(p.qty / max) * 100}%`, height: 5, borderRadius: 4 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card style={{ padding: '18px 20px' }}>
          <div style={{ fontSize: 13.5, color: COLORS.text2, marginBottom: 14 }}>کالاهای رو به اتمام</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {LOW_STOCK.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < LOW_STOCK.length - 1 ? `0.5px solid ${COLORS.border}` : 'none' }}>
                <span style={{ fontSize: 13 }}>{item.name}</span>
                <Badge tone="warn">{fmt(item.stock)} عدد</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
