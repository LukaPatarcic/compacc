'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('form.namePlaceholder')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t('form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('form.emailPlaceholder')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('form.message')}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('form.messagePlaceholder')}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? t('form.sending') : t('form.submit')}
          </button>

          {status === 'success' && (
            <p className="form-message form-success">{t('form.success')}</p>
          )}
          {status === 'error' && (
            <p className="form-message form-error">{t('form.error')}</p>
          )}
        </form>
      </div>
    </section>
  );
}
