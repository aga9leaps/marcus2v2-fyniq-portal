import { MOCK_APPLICATIONS } from '@/lib/mock-data';

// Generate static params for all application IDs (required for static export)
export function generateStaticParams() {
  return MOCK_APPLICATIONS.map((app) => ({
    id: app.id,
  }));
}

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
