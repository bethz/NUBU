interface ProgressBarProps {
  label: string;
  current: number;
  target: number;
  unit: string;
}

export function ProgressBar({ label, current, target, unit }: ProgressBarProps) {
  const pct = Math.min(Math.round((current / target) * 100), 100);
  const overTarget = current > target;
  
  let barColor = 'bg-red-500';
  if (pct >= 80) barColor = 'bg-green-500';
  else if (pct >= 50) barColor = 'bg-yellow-500';
  if (overTarget && label === 'Sugar') barColor = 'bg-red-500';

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium" style={{ color: 'var(--cp-text)' }}>{label}</span>
        <span style={{ color: 'var(--cp-text-muted)' }}>
          {Math.round(current)}{unit} / {target}{unit} ({pct}%)
        </span>
      </div>
      <div className="h-2 rounded-full" style={{ background: 'var(--cp-surface-soft)' }}>
        <div
          className={`h-2 rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
