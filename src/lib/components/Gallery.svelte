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

  function prevPhoto(e) {
    e.stopPropagation();
    if (activeIndex !== null) {
      activeIndex = (activeIndex - 1 + gallery.length) % gallery.length;
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto(e);
    if (e.key === 'ArrowLeft') prevPhoto(e);
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="section gallery-section" id="gallery">
  <div class="container">
    <span class="section-label">MOMENTS OF LOVE</span>
    <h2 class="section-title">Galeri Foto</h2>

    <div class="editorial-gallery-grid">
      {#each gallery as item, index}
        <button
          type="button"
          class="gallery-tile"
          class:arch-tile={index % 2 === 0}
          on:click={() => openLightbox(index)}
        >
          <img src={item.src} alt={item.caption} loading="lazy" />
          <div class="tile-hover">
            <span class="hover-icon">✦</span>
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
      <p class="lightbox-caption font-serif">{gallery[activeIndex].caption}</p>
    </div>

    <button type="button" class="lightbox-nav next" on:click={nextPhoto} aria-label="Selanjutnya">
      &#10095;
    </button>
  </div>
{/if}

<style>
  .gallery-section {
    background-color: var(--bg-subtle);
  }

  .editorial-gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    max-width: 540px;
    margin: 1.5rem auto 0;
  }

  @media (min-width: 600px) {
    .editorial-gallery-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  .gallery-tile {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid var(--border-arch);
    padding: 0;
    cursor: pointer;
    background: #EBE5DF;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .gallery-tile.arch-tile {
    border-radius: 80px 80px 16px 16px;
  }

  .gallery-tile:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  .gallery-tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .gallery-tile:hover img {
    transform: scale(1.06);
  }

  .tile-hover {
    position: absolute;
    inset: 0;
    background: rgba(44, 38, 33, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-tile:hover .tile-hover {
    opacity: 1;
  }

  .hover-icon {
    font-size: 1.5rem;
    color: var(--accent-light);
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    background: rgba(28, 24, 20, 0.95);
    z-index: 1100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
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
    position: relative;
    z-index: 2;
    max-width: 90vw;
    max-height: 85vh;
    text-align: center;
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 75vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.6);
  }

  .lightbox-caption {
    color: var(--accent-light);
    font-size: 1.05rem;
    margin-top: 1rem;
    letter-spacing: 0.05em;
  }

  .lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 3;
    line-height: 1;
    padding: 0.5rem;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
    font-size: 1.5rem;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
    transition: background 0.2s ease;
  }

  .lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .lightbox-nav.prev {
    left: 1.25rem;
  }

  .lightbox-nav.next {
    right: 1.25rem;
  }
</style>
