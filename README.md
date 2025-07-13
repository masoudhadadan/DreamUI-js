# DreamUI.js - کتابخانه رابط کاربری رویایی و مدرن

## 🌐 لینک‌های رسمی
- **مخزن گیتهاب**: [https://github.com/masoudhadadan/DreamUI-js](https://github.com/masoudhadadan/DreamUI-js)
- **CDN (jsDelivr)**: [https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/](https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/)

## 📜 توضیحات فارسی

### معرفی DreamUI
DreamUI یک کتابخانه جاوااسکریپت برای ایجاد رابط‌های کاربری مدرن و رویایی است که ترکیبی از جلوه‌های بصری جذاب و تعامل‌های منحصر به فرد ارائه می‌دهد.

### امکانات کلیدی:
- **پنل‌های شیشه‌ای** با افکت‌های نورپردازی پویا
- **منوهای مغناطیسی** که به حرکت موس واکنش نشان می‌دهند
- **انیمیشن‌های روان** برای ظاهر و ناپدید شدن عناصر
- **سیستم صوتی تعاملی** برای بازخوردهای صوتی
- **پشتیبانی از تم‌های مختلف** (شیشه‌ای، نئون، رویایی، فضایی)
- **واکنش‌گرا** و سازگار با تمام دستگاه‌ها

### روش استفاده:
1. افزودن فایل CSS و JS:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/dreamUI.min.css">
<script src="https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/dreamUI.min.js"></script>
```

2. مقداردهی اولیه:
```javascript
const ui = new DreamUI({
  theme: 'glass', // تم پیش‌فرض
  audioFeedback: true, // فعال کردن بازخورد صوتی
  magneticEffect: true // فعال کردن منوهای مغناطیسی
});
```

3. ایجاد عناصر:
```javascript
// ایجاد یک پنل جدید
ui.createPanel({
  content: '<h2>عنوان پنل</h2><p>محتوای پنل</p>',
  glow: true,
  parent: '#container'
});

// نمایش نوتیفیکیشن
ui.showNotification('عملیات موفقیت آمیز بود', 'success');
```

## 📜 English Description

### Introduction to DreamUI
DreamUI is a JavaScript library for creating modern and dreamy user interfaces that combine stunning visual effects with unique interactions.

### Key Features:
- **Glass panels** with dynamic lighting effects
- **Magnetic menus** that respond to mouse movement
- **Smooth animations** for element appearance/disappearance
- **Interactive audio system** for sound feedback
- **Multiple theme support** (glass, neon, dream, astro)
- **Responsive** and compatible with all devices

### How to Use:
1. Add CSS and JS files:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/dreamUI.min.css">
<script src="https://cdn.jsdelivr.net/gh/masoudhadadan/DreamUI-js/dreamUI.min.js"></script>
```

2. Initialize:
```javascript
const ui = new DreamUI({
  theme: 'glass', // default theme
  audioFeedback: true, // enable sound feedback
  magneticEffect: true // enable magnetic menus
});
```

3. Create elements:
```javascript
// Create a new panel
ui.createPanel({
  content: '<h2>Panel Title</h2><p>Panel content</p>',
  glow: true,
  parent: '#container'
});

// Show notification
ui.showNotification('Operation successful', 'success');
```



## 📌 نکات مهم
- کتابخانه تحت لایسنس MIT منتشر شده است
- کاملاً رایگان و متن باز
- پشتیبانی از مرورگرهای مدرن
- حجم کم و بهینه شده برای اجرای سریع

## 📚 مستندات کامل
برای دریافت مستندات کامل و مثال‌های بیشتر به [صفحه گیتهاب](https://github.com/masoudhadadan/DreamUI-js) مراجعه کنید.

## 🛠️ توسعه و مشارکت
مشارکت‌های شما در توسعه این پروژه پذیرفته می‌شود. برای مشارکت:
1. پروژه را Fork کنید
2. تغییرات خود را اعمال کنید
3. Pull Request ارسال کنید

## 📧 ارتباط با توسعه‌دهنده
- ایمیل: masoudhadadan@gmail.com
- گیتهاب: [masoudhadadan](https://github.com/masoudhadadan)
