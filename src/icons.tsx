import type { ReactElement } from 'react';

export interface WorkGlyphIconProps {
  className?: string;
  size?: number;
}

type IconProps = WorkGlyphIconProps;

function GmailIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" fill="#4caf50" />
      <path d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" fill="#1e88e5" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
      <path
        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
        fill="#c62828"
      />
      <path
        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"
        fill="#fbc02d"
      />
    </svg>
  );
}

function SlackIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 512 512" aria-hidden>
      <path
        d="M107.57,323.544c0,29.603-24.182,53.785-53.785,53.785c-29.602,0-53.785-24.182-53.785-53.785c0-29.602,24.183-53.785,53.785-53.785l53.785,0l0,53.785Z"
        fill="#e01e5a"
      />
      <path
        d="M134.671,323.544c0-29.602,24.183-53.785,53.785-53.785c29.603,0,53.785,24.183,53.785,53.785l0,134.671c0,29.603-24.182,53.785-53.785,53.785c-29.602,0-53.785-24.182-53.785-53.785l0-134.671Z"
        fill="#e01e5a"
      />
      <path
        d="M188.456,107.57c-29.602,0-53.785-24.182-53.785-53.785c0-29.602,24.183-53.785,53.785-53.785c29.603,0,53.785,24.183,53.785,53.785l0,53.785l-53.785,0Z"
        fill="#36c5f0"
      />
      <path
        d="M188.456,134.671c29.603,0,53.785,24.183,53.785,53.785c0,29.603-24.182,53.785-53.785,53.785l-134.671,0c-29.602,0-53.785-24.182-53.785-53.785c0-29.602,24.183-53.785,53.785-53.785l134.671,0Z"
        fill="#36c5f0"
      />
      <path
        d="M404.43,188.456c0-29.602,24.183-53.785,53.785-53.785c29.603,0,53.785,24.183,53.785,53.785c0,29.603-24.182,53.785-53.785,53.785l-53.785,0l0-53.785Z"
        fill="#2eb67d"
      />
      <path
        d="M377.329,188.456c0,29.603-24.182,53.785-53.785,53.785c-29.602,0-53.785-24.182-53.785-53.785l0-134.671c0-29.602,24.183-53.785,53.785-53.785c29.603,0,53.785,24.183,53.785,53.785l0,134.671Z"
        fill="#2eb67d"
      />
      <path
        d="M323.544,404.43c29.603,0,53.785,24.183,53.785,53.785c0,29.603-24.182,53.785-53.785,53.785c-29.602,0-53.785-24.182-53.785-53.785l0-53.785l53.785,0Z"
        fill="#ecb22e"
      />
      <path
        d="M323.544,377.329c-29.602,0-53.785-24.182-53.785-53.785c0-29.602,24.183-53.785,53.785-53.785l134.671,0c29.603,0,53.785,24.183,53.785,53.785c0,29.603-24.182,53.785-53.785,53.785l-134.671,0Z"
        fill="#ecb22e"
      />
    </svg>
  );
}

function GoogleCalendarIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="20 20 110 110" aria-hidden>
      <polygon fill="#1E88E5" points="79.2,67.2 81.8,70.9 85.8,68 85.8,89 90.1,89 90.1,61.4 86.5,61.4" />
      <polygon fill="#FBC02D" points="100.2,120.3 49.8,120.3 49.8,100.2 100.2,100.2" />
      <polygon fill="#4CAF50" points="120.3,100.2 120.3,49.8 100.2,49.8 100.2,100.2" />
      <path
        fill="#1E88E5"
        d="M100.2,49.8V29.7h-63c-4.2,0-7.6,3.4-7.6,7.6v63h20.1V49.8H100.2z"
      />
      <polygon fill="#E53935" points="100.2,100.2 100.2,120.3 120.3,100.2" />
    </svg>
  );
}

function GoogleDriveIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path
        d="M38.59,39c-0.535,0.93-0.298,1.68-1.195,2.197C36.498,41.715,35.465,42,34.39,42H13.61c-1.074,0-2.106-0.285-3.004-0.802C9.708,40.681,9.945,39.93,9.41,39l7.67-9h13.84L38.59,39z"
        fill="#1e88e5"
      />
      <path
        d="M27.463,6.999c1.073-0.002,2.104-0.716,3.001-0.198c0.897,0.519,1.66,1.27,2.197,2.201l10.39,17.996c0.537,0.93,0.807,1.967,0.808,3.002c0.001,1.037-1.267,2.073-1.806,3.001l-11.127-3.005l-6.924-11.993L27.463,6.999z"
        fill="#fbc02d"
      />
      <path
        d="M5.947,33.001c-0.538-0.928-1.806-1.964-1.806-3c0.001-1.036,0.27-2.073,0.808-3.004l10.39-17.996c0.537-0.93,1.3-1.682,2.196-2.2c0.897-0.519,1.929,0.195,3.002,0.197l3.459,11.009l-6.922,11.989L5.947,33.001z"
        fill="#4caf50"
      />
    </svg>
  );
}

function GoogleDocsIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path d="M9 4h20l10 10v29a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="#4285F4" />
      <path d="M29 4v10h10" fill="#AECBFA" />
      <path d="M16 25h16M16 31h16M16 37h11" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function NotionIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="#111111" />
      <path
        d="M8 18.2V6.6h2.95l3.4 6.26h.06V6.6H16v11.6h-2.6l-3.75-6.8h-.05v6.8H8Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function PeopleIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3.2" fill="#818cf8" />
      <circle cx="16" cy="9" r="2.6" fill="#a5b4fc" />
      <path
        d="M3.5 18.5c.8-3 2.9-4.5 5.5-4.5s4.7 1.5 5.5 4.5"
        stroke="#6366f1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AgentsIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="7" width="14" height="11" rx="3" fill="#c084fc" />
      <circle cx="9.5" cy="12" r="1.4" fill="#4c1d95" />
      <circle cx="14.5" cy="12" r="1.4" fill="#4c1d95" />
      <path d="M12 3v3" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="2.5" r="1.2" fill="#a855f7" />
    </svg>
  );
}

function GenericConnectorIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Flat wireframe cube — same mark as the Containers sidebar (Lucide Box).
 * Use for static container / artifact inventory, not work objects.
 */
export function ActivityItemIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m3.3 7 8.7 5 8.7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Pointy-top hexagon + iso Y + outward chevrons (24×24 viewBox). */
const WORK_OBJECT_ICON = (() => {
  const cx = 12;
  const cy = 12;
  const r = 7.2;
  const fmt = (n: number) => n.toFixed(2);
  const verts = Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), a };
  });
  const hex = verts
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${fmt(v.x)} ${fmt(v.y)}`)
    .join(' ')
    .concat(' Z');
  const spokes = [0, 2, 4]
    .map((i) => {
      const v = verts[i]!;
      return `M${fmt(cx)} ${fmt(cy)} L${fmt(v.x)} ${fmt(v.y)}`;
    })
    .join(' ');
  const arrowLen = 2.35;
  const arrowHalf = 1.35;
  const arrows = verts
    .map((v) => {
      const tipX = v.x + arrowLen * Math.cos(v.a);
      const tipY = v.y + arrowLen * Math.sin(v.a);
      const leftX = v.x + arrowHalf * Math.cos(v.a + Math.PI * 0.72);
      const leftY = v.y + arrowHalf * Math.sin(v.a + Math.PI * 0.72);
      const rightX = v.x + arrowHalf * Math.cos(v.a - Math.PI * 0.72);
      const rightY = v.y + arrowHalf * Math.sin(v.a - Math.PI * 0.72);
      return `M${fmt(leftX)} ${fmt(leftY)} L${fmt(tipX)} ${fmt(tipY)} L${fmt(rightX)} ${fmt(rightY)}`;
    })
    .join(' ');
  return { hex, spokes, arrows };
})();

/**
 * Pointy-top hexagon with outward arrows — work objects.
 * Arrows signal interactive / dynamic; containers stay on the flat Box glyph.
 * Floor pads use the same hex outline in the engine.
 */
export function WorkObjectIcon({ className, size = 16 }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d={WORK_OBJECT_ICON.hex}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.1 1.85"
      />
      <path
        d={WORK_OBJECT_ICON.spokes}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2.1 1.85"
      />
      <path
        d={WORK_OBJECT_ICON.arrows}
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Rounded square — pods / collections. */
export function PodIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

/** Soft area outline — zones. */
export function ZoneIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 8.5c0-2 1.8-3.5 4-3.5h6c2.2 0 4 1.5 4 3.5v7c0 2-1.8 3.5-4 3.5H9c-2.2 0-4-1.5-4-3.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4.2 3.2c-.7.5-1.8 0-1.8-.9V6.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DocumentIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3.8h7.2L19 8.6V20a1.2 1.2 0 0 1-1.2 1.2H7A1.2 1.2 0 0 1 5.8 20V5A1.2 1.2 0 0 1 7 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M14 3.8V8h4.8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.5 12.5h7M8.5 15.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function FileIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3.8h6.5L18.5 8v11.2A1.2 1.2 0 0 1 17.3 20.4H8A1.2 1.2 0 0 1 6.8 19.2V5A1.2 1.2 0 0 1 8 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M14.2 3.8V8h4.3" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function NoteIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 4.5h9.5L18.5 8v11.5A1 1 0 0 1 17.5 20.5H6A1 1 0 0 1 5 19.5v-14A1 1 0 0 1 6 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M15 4.5V8h3.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8 11h8M8 14h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function AgentBriefIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5.5V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="5" y="8" width="14" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M2.8 13h2.2M19 13h2.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.2 12.2v2M14.8 12.2v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function TagIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 11.2V6.5A2 2 0 0 1 6.5 4.5h4.7c.5 0 1 .2 1.4.6l6.3 6.3a2 2 0 0 1 0 2.8l-4.7 4.7a2 2 0 0 1-2.8 0l-6.3-6.3a2 2 0 0 1-.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function PinIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function PersonIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 18.5c1-3.2 3.3-4.8 6.5-4.8s5.5 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Stacked cards — artifacts inventory. */
export function ArtifactsIcon({ className, size = 16 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="7" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      <rect x="8" y="4" width="12" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Kind glyph for create menus / chrome — always uses currentColor (neutral). */
export function PlacementKindIcon({
  kind,
  size = 16,
  className,
}: IconProps & { kind: string }) {
  switch (kind) {
    case 'zone':
      return <ZoneIcon size={size} className={className} />;
    case 'pod':
      return <PodIcon size={size} className={className} />;
    case 'work_object':
      return <WorkObjectIcon size={size} className={className} />;
    case 'message':
      return <MessageIcon size={size} className={className} />;
    case 'email':
      return <EmailIcon size={size} className={className} />;
    case 'document':
      return <DocumentIcon size={size} className={className} />;
    case 'file':
      return <FileIcon size={size} className={className} />;
    case 'note':
      return <NoteIcon size={size} className={className} />;
    case 'agent_brief':
      return <AgentBriefIcon size={size} className={className} />;
    case 'tag':
      return <TagIcon size={size} className={className} />;
    case 'icon':
      return <PinIcon size={size} className={className} />;
    case 'avatar_home':
      return <PersonIcon size={size} className={className} />;
    default:
      return <ActivityItemIcon size={size} className={className} />;
  }
}

const ICON_MAP: Record<string, (props: IconProps) => ReactElement> = {
  gmail: GmailIcon,
  slack: SlackIcon,
  'google-calendar': GoogleCalendarIcon,
  google_calendar: GoogleCalendarIcon,
  'google-drive': GoogleDriveIcon,
  google_drive: GoogleDriveIcon,
  'google-docs': GoogleDocsIcon,
  google_docs: GoogleDocsIcon,
  notion: NotionIcon,
  people: PeopleIcon,
  agents: AgentsIcon,
  workspace: GenericConnectorIcon,
};

function normalizeConnectorType(type: string): string {
  let normalized = type.trim().toLowerCase().replace(/_/g, '-');
  for (const prefix of ['composio-connector-', 'gigue-connector-', 'composio-', 'gigue-', 'native-']) {
    if (normalized.startsWith(prefix)) {
      normalized = normalized.slice(prefix.length);
      break;
    }
  }
  switch (normalized) {
    case 'googlecalendar':
    case 'calendar':
      return 'google-calendar';
    case 'google-gmail':
    case 'googlegmail':
    case 'googlemail':
      return 'gmail';
    case 'googledrive':
    case 'drive':
      return 'google-drive';
    case 'googledocs':
      return 'google-docs';
    case 'mail':
    case 'email':
      return 'gmail';
    case 'chat':
      return 'slack';
    default:
      return normalized;
  }
}

export function connectorDisplayName(type: string | null | undefined): string {
  if (!type?.trim()) return 'Source';
  switch (normalizeConnectorType(type)) {
    case 'gmail':
      return 'Gmail';
    case 'slack':
      return 'Slack';
    case 'google-calendar':
      return 'Calendar';
    case 'google-drive':
      return 'Drive';
    case 'notion':
      return 'Notion';
    case 'people':
      return 'People';
    case 'agents':
      return 'Agents';
    default: {
      const cleaned = normalizeConnectorType(type).replace(/-/g, ' ');
      return cleaned.replace(/\b\w/g, (c) => c.toUpperCase());
    }
  }
}

export function ConnectorTypeIcon({
  type,
  size = 16,
  className,
  logoUrl,
}: IconProps & { type: string; logoUrl?: string }) {
  const Icon = ICON_MAP[normalizeConnectorType(type ?? '')] ?? ICON_MAP[type];
  if (!Icon) {
    if (logoUrl) {
      return (
        <img
          src={logoUrl}
          alt=""
          width={size}
          height={size}
          className={className}
          style={{ objectFit: 'contain', borderRadius: 2 }}
        />
      );
    }
    return <GenericConnectorIcon size={size} className={className} />;
  }
  return <Icon size={size} className={className} />;
}

export function initialsFromName(name: string): string {
  const parts = name.replace(/^@/, '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0] ?? ''}${parts[1]![0] ?? ''}`.toUpperCase();
}
