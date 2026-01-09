export const BADGES = [
    {
        id: 'badge-status',
        name: 'Status Badge',
        category: 'badge',
        description: 'Small status indicator badge.',
        tags: ['badge', 'status', 'label'],
        preview: `<span class="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
  Active
</span>`,
        code: {
            html: `<span class="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
  Active
</span>`,
            react: `import React from 'react';

const Badge = ({ children }) => {
  return (
    <>
      <span className="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
        {children}
      </span>
    </>
  );
};

export default Badge;`,
            tailwind: `<span class="bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-brand-primary/30">
  Active
</span>`
        }
    }
];
