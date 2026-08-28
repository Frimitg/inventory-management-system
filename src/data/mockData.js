import {
  LayoutDashboard, Package, Layers, Truck,
  Laptop, Keyboard, Headphones, BatteryCharging, Smartphone, Gamepad2,
} from 'lucide-react';

export const NAV_ITEMS = [
  { key: 'dashboard', label: 'داشبورد', icon: LayoutDashboard },
  { key: 'products', label: 'محصولات', icon: Package },
  { key: 'categories', label: 'دسته‌بندی', icon: Layers },
  { key: 'suppliers', label: 'تأمین‌کننده‌ها', icon: Truck },
];

export const PRODUCTS = [
  { name: 'لپ‌تاپ ایسوس Vivobook', category: 'لپ‌تاپ و کامپیوتر', icon: Laptop, stock: 42, price: 42500000 },
  { name: 'ماوس وایرلس لاجیتک', category: 'کیبورد و ماوس', icon: Keyboard, stock: 76, price: 890000 },
  { name: 'هدفون بلوتوث سونی', category: 'صوتی و تصویری', icon: Headphones, stock: 65, price: 3200000 },
  { name: 'کیبورد مکانیکی', category: 'کیبورد و ماوس', icon: Keyboard, stock: 52, price: 2750000 },
  { name: 'پاوربانک ۲۰۰۰۰', category: 'شارژ و باتری', icon: BatteryCharging, stock: 38, price: 1150000 },
  { name: 'کابل شارژ تایپ‌سی', category: 'شارژ و باتری', icon: BatteryCharging, stock: 3, price: 180000 },
  { name: 'شارژر فست‌شارژ', category: 'شارژ و باتری', icon: BatteryCharging, stock: 2, price: 650000 },
  { name: 'قاب گوشی مدل X', category: 'لوازم جانبی موبایل', icon: Smartphone, stock: 5, price: 250000 },
  { name: 'دسته بازی بلوتوث', category: 'لوازم جانبی گیمینگ', icon: Gamepad2, stock: 1, price: 1890000 },
  { name: 'پاوربانک ۱۰۰۰۰', category: 'شارژ و باتری', icon: BatteryCharging, stock: 4, price: 780000 },
];

export const CATEGORY_META = [
  { name: 'لپ‌تاپ و کامپیوتر', icon: Laptop },
  { name: 'کیبورد و ماوس', icon: Keyboard },
  { name: 'صوتی و تصویری', icon: Headphones },
  { name: 'شارژ و باتری', icon: BatteryCharging },
  { name: 'لوازم جانبی موبایل', icon: Smartphone },
  { name: 'لوازم جانبی گیمینگ', icon: Gamepad2 },
];

export const SUPPLIERS = [
  { company: 'بازرگانی نوین الکترونیک', contact: 'خانم احمدی', phone: '021-22334455', email: 'sales@novin-electronic.example', items: 58, status: 'فعال' },
  { company: 'شرکت پخش رایان‌تجارت', contact: 'آقای رضایی', phone: '021-88451200', email: 'info@rayan-tejarat.example', items: 34, status: 'فعال' },
  { company: 'فناوران داده‌پرداز پارس', contact: 'آقای کریمی', phone: '021-77009988', email: 'contact@fanavaran-pars.example', items: 21, status: 'فعال' },
  { company: 'تجارت الکترونیک ایرانیان', contact: 'خانم موسوی', phone: '031-36542100', email: 'info@irtrade-electronics.example', items: 12, status: 'غیرفعال' },
  { company: 'گروه صنعتی کالای هوشمند', contact: 'آقای صادقی', phone: '021-44556677', email: 'sales@smartgoods-group.example', items: 45, status: 'فعال' },
];

export const PERIODS = {
  today: {
    label: 'امروز', revenue: 12450000, revenueNote: '۸٪ رشد نسبت به دیروز', customers: 24, invoices: 18,
    trend: [{ d: '۸ صبح', v: 10 }, { d: '۱۰ صبح', v: 22 }, { d: '۱۲ ظهر', v: 35 }, { d: '۲ ب.ظ', v: 48 }, { d: '۴ ب.ظ', v: 40 }, { d: '۶ ب.ظ', v: 60 }, { d: '۸ شب', v: 52 }],
    topProducts: [{ name: 'لپ‌تاپ ایسوس', qty: 6 }, { name: 'ماوس وایرلس', qty: 5 }, { name: 'هدفون بلوتوث', qty: 4 }, { name: 'کیبورد مکانیکی', qty: 3 }, { name: 'پاوربانک', qty: 2 }],
  },
  week: {
    label: 'این هفته', revenue: 78300000, revenueNote: '۱۴٪ رشد نسبت به هفته قبل', customers: 96, invoices: 71,
    trend: [{ d: 'شنبه', v: 40 }, { d: 'یکشنبه', v: 55 }, { d: 'دوشنبه', v: 45 }, { d: 'سه‌شنبه', v: 70 }, { d: 'چهارشنبه', v: 60 }, { d: 'پنجشنبه', v: 90 }, { d: 'جمعه', v: 75 }],
    topProducts: [{ name: 'لپ‌تاپ ایسوس', qty: 84 }, { name: 'ماوس وایرلس', qty: 76 }, { name: 'هدفون بلوتوث', qty: 65 }, { name: 'کیبورد مکانیکی', qty: 52 }, { name: 'پاوربانک', qty: 41 }],
  },
  month: {
    label: 'این ماه', revenue: 385600000, revenueNote: '۵٪ رشد نسبت به ماه قبل', customers: 342, invoices: 128,
    trend: [{ d: 'هفته ۱', v: 58 }, { d: 'هفته ۲', v: 72 }, { d: 'هفته ۳', v: 64 }, { d: 'هفته ۴', v: 88 }],
    topProducts: [{ name: 'لپ‌تاپ ایسوس', qty: 310 }, { name: 'ماوس وایرلس', qty: 275 }, { name: 'هدفون بلوتوث', qty: 240 }, { name: 'کیبورد مکانیکی', qty: 198 }, { name: 'پاوربانک', qty: 150 }],
  },
};

export const LOW_STOCK = PRODUCTS.filter((p) => p.stock <= 5);
