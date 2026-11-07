<script>
  import { onMount } from 'svelte';
  import { getStoredWishes, saveWish } from '../utils/storage.js';
  import { getGuestName } from '../utils/params.js';

  let wishes = [];
  let name = '';
  let status = 'Hadir';
  let message = '';
  let isSubmitting = false;
  let successMsg = '';

  onMount(() => {
    wishes = getStoredWishes();
    const guest = getGuestName();
    if (guest && guest !== 'Tamu Undangan') {
      name = guest;
    }
  });

  function handleSubmit() {
    if (!name.trim() || !message.trim()) return;

    isSubmitting = true;
    const newEntry = {
      name: name.trim(),
      status,
      message: message.trim()
    };

    wishes = saveWish(newEntry);
    message = '';
    isSubmitting = false;
    successMsg = 'Terima kasih atas doa restu & konfirmasi kehadiran Anda!';

    setTimeout(() => {
      successMsg = '';
    }, 4500);
  }
</script>

<section class="section wishes-section" id="wishes">
  <div class="container">
    <span class="section-label">WISHES & RSVP</span>
    <h2 class="section-title">Ucapan & Doa</h2>

    <!-- RSVP Form Card -->
    <div class="card rsvp-editorial-card">
      <h3 class="form-headline font-editorial">Konfirmasi Kehadiran</h3>
      <p class="form-sub">Kirimkan doa dan konfirmasi kehadiran Anda untuk mempelai</p>

      {#if successMsg}
        <div class="alert-editorial">
          {successMsg}
        </div>
      {/if}

      <form on:submit|preventDefault={handleSubmit} class="editorial-form">
        <div class="input-field">
          <label for="rsvp-name">Nama Tamu</label>
          <input
            id="rsvp-name"
            type="text"
            bind:value={name}
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        <div class="input-field">
          <label for="rsvp-select">Kehadiran</label>
          <select id="rsvp-select" bind:value={status}>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Berhalangan Hadir</option>
            <option value="Ragu-ragu">Masih Ragu-ragu</option>
          </select>
        </div>

        <div class="input-field">
          <label for="rsvp-msg">Pesan & Doa Restu</label>
          <textarea
            id="rsvp-msg"
            rows="3"
            bind:value={message}
            placeholder="Tuliskan ucapan dan doa hangat Anda..."
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-champagne btn-full" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
        </button>
      </form>
    </div>

    <!-- Wishes Stream -->
    <div class="wishes-stream-container">
      <div class="stream-header">
        <span class="stream-count font-editorial">{wishes.length}</span>
        <span class="stream-title font-serif">Doa & Ucapan Tersimpan</span>
      </div>

      <div class="wishes-scroll-box card">
        {#each wishes as item (item.id)}
          <div class="wish-card">
            <div class="wish-top">
              <span class="wish-sender font-serif">{item.name}</span>
              <span
                class="rsvp-badge"
                class:badge-hadir={item.status === 'Hadir'}
                class:badge-absen={item.status === 'Tidak Hadir'}
                class:badge-ragu={item.status === 'Ragu-ragu'}
              >
                {item.status}
              </span>
            </div>
            <p class="wish-body">{item.message}</p>
            <span class="wish-timestamp">{item.createdAt}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .wishes-section {
    background-color: var(--bg-main);
  }

  .rsvp-editorial-card {
    max-width: 520px;
    margin: 0 auto 3rem;
    padding: 2.75rem 2rem;
    text-align: left;
    border-radius: 24px;
    border: 1px solid var(--border-subtle);
  }

  .form-headline {
    font-size: 1.85rem;
    font-weight: 400;
    color: var(--text-main);
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .form-sub {
    font-size: 0.88rem;
    color: var(--text-muted);
    text-align: center;
    margin-bottom: 1.75rem;
  }

  .alert-editorial {
    background: #F3EBDD;
    color: var(--primary-dark);
    border: 1px solid var(--border-arch);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    font-size: 0.88rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .editorial-form {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .input-field label {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--text-muted);
  }

  .input-field input,
  .input-field select,
  .input-field textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-main);
    background: #FAF8F5;
    transition: all 0.2s ease;
  }

  .input-field input:focus,
  .input-field select:focus,
  .input-field textarea:focus {
    outline: none;
    border-color: var(--accent);
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.15);
  }

  .btn-full {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.85rem 1.5rem;
  }

  /* Wishes Stream */
  .wishes-stream-container {
    max-width: 520px;
    margin: 0 auto;
    text-align: left;
  }

  .stream-header {
    display: flex;
    align-items: baseline;
    gap: 0.65rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  .stream-count {
    font-size: 1.85rem;
    color: var(--accent-dark);
    font-weight: 400;
  }

  .stream-title {
    font-size: 1.1rem;
    color: var(--text-main);
  }

  .wishes-scroll-box {
    max-height: 440px;
    overflow-y: auto;
    padding: 1.5rem;
    border-radius: 20px;
  }

  .wish-card {
    border-bottom: 1px solid var(--border-subtle);
    padding: 1.15rem 0;
  }
  .wish-card:first-child {
    padding-top: 0;
  }
  .wish-card:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .wish-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.35rem;
  }

  .wish-sender {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .rsvp-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.65rem;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .badge-hadir {
    background: #E8EFE5;
    color: #4A6E44;
  }

  .badge-absen {
    background: #F8E8E8;
    color: #9C4B4B;
  }

  .badge-ragu {
    background: #F6EDE1;
    color: #966E3A;
  }

  .wish-body {
    font-size: 0.92rem;
    color: var(--text-main);
    line-height: 1.6;
    margin-bottom: 0.35rem;
  }

  .wish-timestamp {
    font-size: 0.72rem;
    color: var(--text-light);
  }

  @media (max-width: 480px) {
    .rsvp-editorial-card {
      padding: 2rem 1.25rem;
    }
  }
</style>
