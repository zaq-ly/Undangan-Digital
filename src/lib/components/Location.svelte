<script>
  import { invitationData } from '../data/invitation.js';
  const { mapEmbedUrl, events } = invitationData;
  const primaryLocation = events[1] || events[0];
</script>

<section class="section location-section">
  <div class="container">
    <h2 class="section-title">Denah Lokasi</h2>
    <p class="section-subtitle">Maps & Directions</p>

    <div class="card map-card">
      <div class="map-wrapper">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="220"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Lokasi Acara"
        ></iframe>
      </div>

      <div class="location-details">
        <h3 class="venue-name font-serif">{primaryLocation.place}</h3>
        <p class="venue-address">{primaryLocation.address}</p>

        <a
          href={primaryLocation.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          Buka Petunjuk Arah
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .location-section {
    background: rgba(135, 168, 120, 0.06);
  }

  .map-card {
    padding: 0.85rem;
    overflow: hidden;
    margin: 0 auto;
    max-width: 500px;
  }

  .map-wrapper {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: #e2e8e0;
  }

  .map-wrapper iframe {
    display: block;
    width: 100%;
    height: 220px;
  }

  .location-details {
    padding: 1rem 0.5rem 0.25rem;
    text-align: center;
  }

  .venue-name {
    font-size: 1.3rem;
    color: var(--text-dark);
    margin-bottom: 0.25rem;
  }

  .venue-address {
    font-size: 0.85rem;
    color: var(--text-muted);
    max-width: 440px;
    margin: 0 auto 1.15rem;
    line-height: 1.5;
  }
</style>

