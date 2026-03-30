import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'KontentFire - AI-Powered Social Media Content Automation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Kontent
          </span>
          <span
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#f97316',
            }}
          >
            Fire
          </span>
        </div>
        <div
          style={{
            fontSize: '36px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          AI-Powered Social Media Content Automation
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '40px',
          }}
        >
          {['Generate', 'Schedule', 'Publish'].map((text) => (
            <div
              key={text}
              style={{
                background: 'rgba(249, 115, 22, 0.15)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontSize: '24px',
                color: '#fb923c',
              }}
            >
              {text}
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#64748b',
          }}
        >
          kontentfire.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
