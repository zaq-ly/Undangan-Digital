<script>
  import { invitationData } from '../data/invitation.js';
  const { gallery } = invitationData;

  let activeIndex = null;

  function openLightbox(index) {
    activeIndex = index;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    activeIndex = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  function nextPhoto(e) {
    e.stopPropagation();
    if (activeIndex !== null) {
      activeIndex = (activeIndex + 1) % gallery.length;
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto(e);
    if (e.key === 'ArrowLeft') prevPhoto(e);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="section gallery-section">
  <div class="container">
    <h2 class="section-title">Galeri Foto</h2>
    <p class="section-subtitle">Moments of Love</p>

    <div class="gallery-grid">
      {#each gallery as item, index}
        <button
          type="button"
          class="gallery-item"
          on:click={() => openLightbox(index)}
        >
          <img src={item.src} alt={item.caption} loading="lazy" />
          <div class="overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
{#if activeIndex !== null}
  <div class="lightbox" role="dialog" aria-modal="true" tabindex="-1">
    <button
      type="button"
      class="lightbox-backdrop"
      on:click={closeLightbox}
      aria-label="Tutup"
    ></button>

    <button type="button" class="lightbox-close" on:click={closeLightbox} aria-label="Tutup">
      &times;
    </button>

    <button type="button" class="lightbox-nav prev" on:click={prevPhoto} aria-label="Sebelumnya">
      &#10094;
    </button>

    <div class="lightbox-content">
      <img src={gallery[activeIndex].src} alt={gallery[activeIndex].caption} />
      <p class="lightbox-caption">{gallery[activeIndex].caption}</p>
    </div>

    <button type="button" class="lightbox-nav next" on:click={nextPhoto} aria-label="Selanjutnya">
      &#10095;
    </button>
  </div>
{/if}

<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 0.5rem auto 0;
    max-width: 440px;
    width: 100%;
  }

  .gallery-item {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 12px;
    border: none;
    padding: 0;
    cursor: pointer;
    background: #e2e8e0;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.08);
  }

  .gallery-item .overlay {
    position: absolute;
    inset: 0;
    background: rgba(44, 62, 45, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .overlay {
    opacity: 1;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(15, 22, 16, 0.94);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .lightbox-backdrop {
    position: absolute;
    inset: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .lightbox-content {
    max-width: 90vw;
    max-height: 85vh;
    text-align: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 75vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  .lightbox-caption {
    color: #e2e8e0;
    font-size: 0.95rem;
    margin-top: 0.85rem;
    font-family: var(--font-serif);
    letter-spacing: 0.05em;
  }

  .lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    color: #ffffff;
    font-size: 2.5rem;
    cursor: pointer;
    line-height: 1;
    padding: 0.5rem;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: #ffffff;
    font-size: 1.5rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .lightbox-nav.prev {
    left: 1rem;
  }

  .lightbox-nav.next {
    right: 1rem;
  }
</style>
