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
    successMsg = 'Terima kasih atas doa & ucapannya!';

    setTimeout(() => {
      successMsg = '';
    }, 4000);
  }
</script>

<section class="section wishes-section" id="wishes">
  <div class="container">
    <h2 class="section-title">Ucapan & Doa</h2>
    <p class="section-subtitle">Wishes & RSVP</p>

    <div class="card form-card">
      <h3 class="form-title font-serif">Kirimkan Doa & Konfirmasi Kehadiran</h3>

      {#if successMsg}
        <div class="alert-success">
          {successMsg}
        </div>
      {/if}

      <form on:submit|preventDefault={handleSubmit} class="wishes-form">
        <div class="form-group">
          <label for="guest-name">Nama Anda</label>
          <input
            id="guest-name"
            type="text"
            bind:value={name}
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div class="form-group">
          <label for="rsvp-status">Konfirmasi Kehadiran</label>
          <select id="rsvp-status" bind:value={status}>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Berhalangan Hadir</option>
            <option value="Ragu-ragu">Masih Ragu-ragu</option>
          </select>
        </div>

        <div class="form-group">
          <label for="guest-message">Ucapan & Doa Restu</label>
          <textarea
            id="guest-message"
            rows="3"
            bind:value={message}
            placeholder="Tuliskan ucapan dan doa terbaik Anda..."
            required
          ></textarea>
        </div>

        <button type="submit" class="btn btn-gold btn-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
        </button>
      </form>
    </div>

    <!-- Wishes List -->
    <div class="wishes-list">
      <div class="wishes-count">
        <span>{wishes.length} Ucapan Tersimpan</span>
      </div>

      {#each wishes as item (item.id)}
        <div class="wish-item card">
          <div class="wish-header">
            <strong class="wish-author">{item.name}</strong>
            <span
              class="status-badge"
              class:status-hadir={item.status === 'Hadir'}
              class:status-absen={item.status === 'Tidak Hadir'}
              class:status-ragu={item.status === 'Ragu-ragu'}
            >
              {item.status}
            </span>
          </div>
          <p class="wish-text">{item.message}</p>
          <span class="wish-date">{item.createdAt}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .wishes-section {
    background: rgba(135, 168, 120, 0.06);
  }

  .form-card {
    padding: 2.25rem 1.75rem;
    border: 1px solid rgba(135, 168, 120, 0.3);
    margin-bottom: 2rem;
  }

  .form-title {
    font-size: 1.45rem;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
  }

  .alert-success {
    background: #e7f4e4;
    color: #2e6027;
    border: 1px solid #c2e2bc;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
  }

  .wishes-form {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
    text-align: left;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .form-group label {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-dark);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem 0.9rem;
    border: 1px solid rgba(135, 168, 120, 0.4);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text-dark);
    background: #ffffff;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(135, 168, 120, 0.2);
  }

  .btn-submit {
    margin-top: 0.5rem;
    width: 100%;
  }

  .wishes-count {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
    text-align: left;
    font-weight: 500;
  }

  .wishes-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    max-height: 520px;
    overflow-y: auto;
    padding-right: 0.25rem;
  }

  .wish-item {
    text-align: left;
    padding: 1.25rem;
    margin-bottom: 0;
  }

  .wish-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .wish-author {
    font-size: 1rem;
    color: var(--text-dark);
  }

  .status-badge {
    font-size: 0.72rem;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-weight: 600;
  }

  .status-hadir {
    background: #e2f2dd;
    color: #2f6825;
  }

  .status-absen {
    background: #fde8e8;
    color: #9e2323;
  }

  .status-ragu {
    background: #fff4d8;
    color: #8c6307;
  }

  .wish-text {
    font-size: 0.9rem;
    color: var(--text-dark);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .wish-date {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
  }
</style>
