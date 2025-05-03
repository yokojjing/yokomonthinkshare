import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'My Blog';
  const date = searchParams.get('date') || '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(to bottom right, #fff, #f5f5f5)',
          padding: '40px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            color: 'black',
            marginBottom: 24,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        {date && (
          <div style={{ fontSize: 30, color: '#666' }}>
            {date}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}