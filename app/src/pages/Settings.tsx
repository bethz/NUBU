import { useState } from 'react';
import { getApiKey, setApiKey } from '../lib/storage';
import { Key, ExternalLink } from 'lucide-react';

export function Settings() {
  const [key, setKey] = useState(getApiKey());
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setApiKey(key);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--cp-text)' }}>Settings</h1>
      <p className="mb-8" style={{ color: 'var(--cp-text-muted)' }}>
        Configure your NUBU experience.
      </p>

      <div className="rounded-2xl p-6" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
        <div className="flex items-center gap-3 mb-4">
          <Key size={20} style={{ color: 'var(--cp-accent)' }} />
          <h2 className="text-lg font-semibold">USDA API Key</h2>
        </div>
        <p className="text-sm mb-4" style={{ color: 'var(--cp-text-muted)' }}>
          Get a free API key for precise nutrient lookups. Without it, NUBU uses a built-in database of common foods.
        </p>
        <a
          href="https://fdc.nal.usda.gov/api-key-signup.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm mb-4 hover:underline"
          style={{ color: 'var(--cp-accent)' }}
        >
          Get your free key <ExternalLink size={12} />
        </a>
        <div className="flex gap-2">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Paste your USDA API key here"
            className="flex-1 rounded-lg px-4 py-2 text-sm"
            style={{
              background: 'var(--cp-surface-soft)',
              border: '1px solid var(--cp-border)',
              color: 'var(--cp-text)',
            }}
          />
          <button
            onClick={handleSave}
            className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            style={{ background: 'var(--cp-accent)', color: 'var(--cp-accent-fg)' }}
          >
            {saved ? '✓ Saved' : 'Save'}
          </button>
        </div>
      </div>

      <div className="rounded-2xl p-6 mt-6" style={{ background: 'var(--cp-surface)', border: '1px solid var(--cp-border)' }}>
        <h2 className="text-lg font-semibold mb-4">About NUBU</h2>
        <p className="text-sm mb-2" style={{ color: 'var(--cp-text-muted)' }}>
          <strong>NUBU</strong> - NUtrition Builds a Better yoU!
        </p>
        <p className="text-sm" style={{ color: 'var(--cp-text-muted)' }}>
          A personal nutrition tracker that helps you understand what you're eating, identify gaps, and build better habits.
          Part of the "Better yoU" family alongside BABU (Be A Better yoU!).
        </p>
      </div>
    </div>
  );
}
