import React from 'react';
import Poster from '../../public/image/asset_poster/poster.png';

export default function Page() {
  return (
    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
      {/* Full-width Image */}
      <img src={Poster.src} alt="asset_senior_poster" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
