<script>
  import { invitationData } from '../data/invitation.js';
  const { mapEmbedUrl, events } = invitationData;
  const primaryLocation = events[1] || events[0];
</script>

<section class="section location-section" id="location">
  <div class="container">
    <span class="section-label">MAPS & DIRECTIONS</span>
    <h2 class="section-title">Denah Lokasi</h2>

    <div class="card map-editorial-card">
      <div class="map-arch-frame">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="320"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Lokasi Pernikahan"
        ></iframe>
      </div>

      <div class="location-body">
        <h3 class="venue-title font-editorial">{primaryLocation.place}</h3>
        <p class="venue-address">{primaryLocation.address}</p>

        <a
          href={primaryLocation.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-champagne"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
          </svg>
          Petunjuk Arah Google Maps
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .location-section {
    background-color: var(--bg-main);
  }

  .map-editorial-card {
    padding: 1.25rem;
    border-radius: 24px;
    max-width: 540px;
    margin: 0 auto;
    border: 1px solid var(--border-subtle);
  }

  .map-arch-frame {
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    background: #EBE5DF;
    border: 1px solid var(--border-subtle);
  }

  .map-arch-frame iframe {
    display: block;
    width: 100%;
    min-height: 280px;
  }

  .location-body {
    padding: 2rem 1rem 1rem;
    text-align: center;
  }

  .venue-title {
    font-size: 1.85rem;
    color: var(--text-main);
    margin-bottom: 0.35rem;
    line-height: 1.25;
  }

  .venue-address {
    font-size: 0.9rem;
    color: var(--text-muted);
    max-width: 440px;
    margin: 0 auto 1.75rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    .map-editorial-card {
      padding: 0.85rem;
    }
    .location-body {
      padding: 1.5rem 0.5rem 0.5rem;
    }
    .venue-title {
      font-size: 1.55rem;
    }
  }
</style>
