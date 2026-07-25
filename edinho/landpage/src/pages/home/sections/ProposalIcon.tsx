const PATHS: Record<string, string> = {
  health: 'M12 21s-7-4.35-9.5-8.5C1 9.5 2.5 6 6 6c2 0 3 1.2 3.5 2 .5-.8 1.5-2 3.5-2 3.5 0 5 3.5 3.5 6.5C19 16.65 12 21 12 21Z',
  education: 'M12 4 2 9l10 5 8-4v5h2V9L12 4ZM6 13v3.5c0 1.5 3 3 6 3s6-1.5 6-3V13l-6 3-6-3Z',
  agro: 'M12 3c0 4-3 5-3 9a3 3 0 0 0 6 0c0-4-3-5-3-9Zm-6 8c-1 2 0 5 3 6M18 11c1 2 0 5-3 6M12 15v6',
  city: 'M3 21V9l6-4v4l6-4v6l6-2v12H3Zm4-3h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Z',
  work: 'M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6Zm2 0h2V5h-2v2Z',
};

export function ProposalIcon({ name }: { name: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name] ?? PATHS.city} />
    </svg>
  );
}
