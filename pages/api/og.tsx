import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
export {};

// Use edge runtime for best performance with @vercel/og
export const config = {
  runtime: 'experimental-edge',
};

// --- YOUR OG IMAGE COMPONENT ---
// Define how your image should look using JSX and inline styles
// (Tailwind might require extra setup here, inline styles are safer)
function OgImageComponent({ title, date }: { title?: string, date?: string }) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc', // Example bg
        fontFamily: 'sans-serif',    // Use safe fonts or load custom ones
        padding: '40px',
      }}
    >
      <div style={{ fontSize: 30, color: '#334155', marginBottom: 40 }}>
        YokomonThinkShare {/* Your Site Title */}
      </div>
      <div
        style={{
          fontSize: 60,
          fontWeight: 700,
          color: '#0f172a',
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: 20,
        }}
      >
        {title ?? 'Default Blog Post Title'} {/* Use dynamic title */}
      </div>
      {date && (
        <div style={{ fontSize: 24, color: '#64748b' }}>
          {date} {/* Use dynamic date */}
        </div>
      )}
    </div>
  );
}
// --- END OF YOUR OG IMAGE COMPONENT ---


export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract parameters like title, date from the URL query string
    const title = searchParams.get('title');
    const date = searchParams.get('date');

    // Generate the image response
    return new ImageResponse(
      (
        // Pass the extracted parameters to your component
        <OgImageComponent title={title ?? undefined} date={date ?? undefined} />
      ),
      {
        width: 1200, // Standard OG image width
        height: 630, // Standard OG image height
        // Add font configurations here if needed
      },
    );
  } catch (e: any) {
    console.error(`Failed to generate OG image: ${e.message}`);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}