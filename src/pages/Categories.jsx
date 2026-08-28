import { COLORS, fmt } from '../theme';
import { CATEGORY_META, PRODUCTS } from '../data/mockData';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

export default function Categories() {
  return (
    <div>
      <PageHeader title="دسته‌بندی کالاها" subtitle="گروه‌بندی محصولات انبار" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
        {CATEGORY_META.map((c, i) => {
          const Icon = c.icon;
          const count = PRODUCTS.filter((p) => p.category === c.name).length;
          return (
            <Card key={i} style={{ padding: '20px 18px' }}>
              <div style={{ background: COLORS.accentDim, borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon size={19} color={COLORS.accent} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontSize: 12.5, color: COLORS.text3 }}>{fmt(count)} کالا</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
