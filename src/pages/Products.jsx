import { useState, useEffect } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { COLORS, fmt } from '../theme';
import Card from '../components/Card';
import Badge from '../components/Badge';
import PageHeader from '../components/PageHeader';

export default function Products() {
  const [q, setQ] = useState('');
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    category_id: '',
    supplier_id: '',
    quantity: '',
    price: ''
  });

  // گرفتن محصولات از دیتابیس
  const loadProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // تغییر مقادیر فرم
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // افزودن محصول
  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          category_id: form.category_id || null,
          supplier_id: form.supplier_id || null,
          quantity: Number(form.quantity),
          price: Number(form.price)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'خطا در افزودن محصول');
        return;
      }

      alert('محصول با موفقیت اضافه شد');

      setShowModal(false);

      setForm({
        name: '',
        category_id: '',
        supplier_id: '',
        quantity: '',
        price: ''
      });

      loadProducts();

    } catch (error) {
      console.error(error);
      alert('ارتباط با سرور برقرار نشد');
    }
  };

  const filtered = products.filter(
    (p) =>
      p.name?.includes(q) ||
      String(p.category_id || '').includes(q)
  );

  return (
    <div>
      <PageHeader
        title="محصولات"
        subtitle="لیست کامل کالاهای موجود در انبار"
        action={
          <button
            onClick={() => setShowModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: COLORS.accent,
              color: '#0A1310',
              border: 'none',
              borderRadius: 8,
              padding: '9px 16px',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}
          >
            <Plus size={15} />
            افزودن محصول
          </button>
        }
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: COLORS.surface,
          border: `0.5px solid ${COLORS.border}`,
          borderRadius: 9,
          padding: '9px 14px',
          marginBottom: 16,
          maxWidth: 320
        }}
      >
        <Search size={15} color={COLORS.text3} />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="جستجوی نام یا دسته‌بندی..."
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: COLORS.text,
            fontFamily: 'inherit',
            fontSize: 13,
            width: '100%'
          }}
        />
      </div>

      <Card style={{ overflow: 'hidden' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13
          }}
        >
          <thead>
            <tr style={{ background: COLORS.surface2 }}>
              {['کالا', 'دسته‌بندی', 'موجودی', 'قیمت واحد', 'وضعیت'].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'right',
                      padding: '11px 16px',
                      color: COLORS.text2,
                      fontWeight: 500,
                      fontSize: 12
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => {
              const low = p.quantity <= 5;

              return (
                <tr
                  key={p.id}
                  style={{
                    borderTop: `0.5px solid ${COLORS.border}`
                  }}
                >
                  <td
                    style={{
                      padding: '11px 16px'
                    }}
                  >
                    {p.name}
                  </td>

                  <td
                    style={{
                      padding: '11px 16px',
                      color: COLORS.text2
                    }}
                  >
                    {p.category_id}
                  </td>

                  <td style={{ padding: '11px 16px' }}>
                    {fmt(p.quantity)}
                  </td>

                  <td
                    style={{
                      padding: '11px 16px',
                      color: COLORS.text2
                    }}
                  >
                    {fmt(p.price)} تومان
                  </td>

                  <td style={{ padding: '11px 16px' }}>
                    <Badge tone={low ? 'warn' : 'accent'}>
                      {low ? 'کم موجود' : 'موجود'}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* پنجره افزودن محصول */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              width: 420,
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: 24,
              direction: 'rtl'
            }}
          >
            {/* عنوان */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 22
              }}
            >
              <h2
                style={{
                  margin: 0,
                  color: COLORS.text,
                  fontSize: 18
                }}
              >
                افزودن محصول
              </h2>

              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: COLORS.text2,
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddProduct}>

              {/* نام */}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="نام محصول"
                required
                style={inputStyle}
              />

              {/* دسته بندی */}
              <input
                name="category_id"
                value={form.category_id}
                onChange={handleChange}
                placeholder="شناسه دسته‌بندی"
                style={inputStyle}
              />

              {/* تامین کننده */}
              <input
                name="supplier_id"
                value={form.supplier_id}
                onChange={handleChange}
                placeholder="شناسه تأمین‌کننده"
                style={inputStyle}
              />

              {/* موجودی */}
              <input
                name="quantity"
                type="number"
                value={form.quantity}
                onChange={handleChange}
                placeholder="موجودی"
                required
                style={inputStyle}
              />

              {/* قیمت */}
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="قیمت"
                required
                style={inputStyle}
              />

              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: 8,
                  padding: '11px',
                  background: COLORS.accent,
                  color: '#0A1310',
                  border: 'none',
                  borderRadius: 8,
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                ذخیره محصول
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '11px 12px',
  marginBottom: 12,
  background: COLORS.surface2,
  border: `1px solid ${COLORS.border}`,
  borderRadius: 8,
  outline: 'none',
  color: COLORS.text,
  fontFamily: 'inherit',
  fontSize: 13
};