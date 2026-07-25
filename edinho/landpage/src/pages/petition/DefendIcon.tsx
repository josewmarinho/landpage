const PATHS: Record<string, string> = {
  hospital: 'M4 21V8l8-4 8 4v13H4Zm8-11v4m-2-2h4M9 21v-4h6v4',
  queue: 'M4 7h16M4 12h16M4 17h10M18.5 15.5 20 17l3-3.2',
  structure: 'M3 21V10l6-3v3l6-3v4l6-2v12H3Zm4-2h2v-3H7v3Zm5 0h2v-3h-2v3Z',
  city: 'M4 21V9l5-3v3l5-3v4l6-2v13H4Zm3-2h2v-2H7v2Zm5 0h2v-2h-2v2Z',
};

export function DefendIcon({ name }: { name: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name] ?? PATHS.hospital} />
    </svg>
  );
}
