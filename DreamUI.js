/**
 * DreamUI.js - کتابخانه رابط کاربری رویایی و تعاملی
 * نسخه 1.0
 * توسعه داده شده توسط مسعود حدادان (Masoud Hadadan)
 * ایمیل: masoudhadadan@gmail.com
 * لایسنس: MIT
 * 
 * Copyright (c) 2023 Masoud Hadadan
 * 
 * امکانات اصلی:
 * - پنل‌های شیشه‌ای با افکت نور
 * - منوهای مغناطیسی واکنش‌گرا
 * - انیمیشن‌های ورود/خروج حرفه‌ای
 * - سیستم صوتی تعاملی
 */

class DreamUI {
  constructor(options = {}) {
    // تنظیمات پیش‌فرض
    this.defaultConfig = {
      theme: 'glass',
      motion: 'gentle',
      audioFeedback: false,
      magneticEffect: true,
      waveEffect: true,
      glowEffect: true
    };

    // ادغام تنظیمات کاربر با پیش‌فرض‌ها
    this.config = {...this.defaultConfig, ...options};

    // متغیرهای سیستمی
    this.version = '1.0.0';
    this.author = 'Masoud Hadadan';
    this.license = 'MIT';

    // مقداردهی اولیه
    this.init();
  }

  /**
   * مقداردهی اولیه کتابخانه
   */
  init() {
    console.log(`%cDreamUI v${this.version} | توسط ${this.author} | لایسنس: ${this.license}`, 
      'color: #3498db; font-weight: bold;');

    // بررسی پشتیبانی مرورگر
    if (!this.checkBrowserSupport()) {
      console.warn('DreamUI: برخی ویژگی‌ها در این مرورگر پشتیبانی نمی‌شوند');
      this.config.glowEffect = false;
      this.config.waveEffect = false;
    }

    // راه‌اندازی اولیه
    this.setupEventListeners();
    this.setupAudioSystem();
    this.applyTheme();
  }

  /**
   * بررسی پشتیبانی مرورگر از ویژگی‌های مورد نیاز
   */
  checkBrowserSupport() {
    return (
      'backdropFilter' in document.documentElement.style || 
      'webkitBackdropFilter' in document.documentElement.style
    ) && CSS.supports('transform-style', 'preserve-3d');
  }

  /**
   * تنظیم شنودگرهای رویداد
   */
  setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.animateElements();
      
      // فعال کردن اثر مغناطیسی اگر روشن باشد
      if (this.config.magneticEffect) {
        this.enableMagneticEffect();
      }
    });
  }

  /**
   * راه‌اندازی سیستم صوتی
   */
  setupAudioSystem() {
    if (this.config.audioFeedback) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.sounds = {
        click: this.createClickSound(),
        hover: this.createHoverSound()
      };
    }
  }

  /**
   * ایجاد صدای کلیک
   */
  createClickSound() {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 600;
    gainNode.gain.value = 0.3;
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(
      0.001, this.audioContext.currentTime + 0.1
    );
    oscillator.stop(this.audioContext.currentTime + 0.1);
    
    return { oscillator, gainNode };
  }

  /**
   * ایجاد صدای هاور
   */
  createHoverSound() {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 300;
    gainNode.gain.value = 0.1;
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(
      0.001, this.audioContext.currentTime + 0.3
    );
    oscillator.stop(this.audioContext.currentTime + 0.3);
    
    return { oscillator, gainNode };
  }

  /**
   * اعمال تم انتخابی
   */
  applyTheme() {
    document.documentElement.style.setProperty('--dream-primary', this.getThemeColor());
  }

  /**
   * دریافت رنگ بر اساس تم
   */
  getThemeColor() {
    const themes = {
      glass: 'rgba(255, 255, 255, 0.2)',
      dream: 'rgba(179, 136, 255, 0.3)',
      neon: 'rgba(100, 255, 218, 0.3)',
      astro: 'rgba(148, 0, 211, 0.3)'
    };
    return themes[this.config.theme] || themes.glass;
  }

  /**
   * فعال کردن اثر مغناطیسی روی عناصر
   */
  enableMagneticEffect() {
    const magneticElements = document.querySelectorAll('[data-magnetic]');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        this.applyMagneticEffect(e, element);
      });
      
      element.addEventListener('mouseleave', () => {
        this.resetMagneticEffect(element);
      });
    });
  }

  /**
   * اعمال اثر مغناطیسی
   */
  applyMagneticEffect(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distance = Math.min(20, Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)));
    const angle = Math.atan2(y - centerY, x - centerX);
    
    element.style.transform = `
      translate(
        ${(distance * Math.cos(angle)) / 3}px,
        ${(distance * Math.sin(angle)) / 3}px
      )
    `;
    
    // پخش صدای هاور اگر فعال باشد
    if (this.config.audioFeedback) {
      this.playHoverSound();
    }
  }

  /**
   * بازنشانی اثر مغناطیسی
   */
  resetMagneticEffect(element) {
    element.style.transform = '';
  }

  /**
   * انیمیشن عناصر
   */
  animateElements() {
    // انیمیشن پنل‌ها
    const panels = document.querySelectorAll('.dream-panel');
    panels.forEach((panel, index) => {
      setTimeout(() => {
        panel.classList.add('dream-active');
      }, 300 * index);
    });

    // فعال کردن موج پس‌زمینه اگر روشن باشد
    if (this.config.waveEffect) {
      const waves = document.querySelectorAll('.dream-wave');
      waves.forEach(wave => {
        wave.style.opacity = '1';
      });
    }
  }

  /**
   * پخش صدای کلیک
   */
  playClickSound() {
    if (this.config.audioFeedback) {
      this.createClickSound();
    }
  }

  /**
   * پخش صدای هاور
   */
  playHoverSound() {
    if (this.config.audioFeedback) {
      this.createHoverSound();
    }
  }

  /**
   * ایجاد یک پنل جدید
   */
  createPanel(options = {}) {
    const panel = document.createElement('div');
    panel.className = `dream-panel ${options.glow ? 'dream-glow' : ''}`;
    
    if (options.content) {
      panel.innerHTML = options.content;
    }
    
    if (options.parent) {
      document.querySelector(options.parent).appendChild(panel);
    } else {
      document.body.appendChild(panel);
    }
    
    return panel;
  }

  /**
   * نمایش نوتیفیکیشن
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `dream-notification dream-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('dream-show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('dream-show');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  }
}

// اکسپورت برای استفاده ماژولار
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DreamUI;
} else if (typeof define === 'function' && define.amd) {
  define([], () => DreamUI);
} else {
  window.DreamUI = DreamUI;
}
