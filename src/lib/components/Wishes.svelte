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
  let activeTab = 'form'; // 'form' or 'list'

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
    activeTab = 'list';

    setTimeout(() => {
      successMsg = '';
    }, 4000);
  }
</script>

<section class="section wishes-section" id="wishes">
  <div class="container">
    <h2 class="section-title">Ucapan & Doa</h2>
    <p class="section-subtitle">Wishes & RSVP</p>

    <!-- Tab Buttons -->
    <div class="wishes-tabs">
      <button
        type="button"
        class="tab-btn"
        class:active={activeTab === 'form'}
        on:click={() => (activeTab = 'form')}
      >
        Kirim Ucapan
      </button>
      <button
        type="button"
        class="tab-btn"
        class:active={activeTab === 'list'}
        on:click={() => (activeTab = 'list')}
      >
        Ucapan ({wishes.length})
      </button>
    </div>

    {#if successMsg}
      <div class="alert-success">
        {successMsg}
      </div>
    {/if}

    {#if activeTab === 'form'}
      <div class="card form-card">
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
              rows="2"
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
    {:else}
      <!-- Wishes List -->
      <div class="wishes-list card">
        {#each wishes as item (item.id)}
          <div class="wish-item">
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
    {/if}
  </div>
</section>

<style>
  .wishes-section {
    background: rgba(135, 168, 120, 0.06);
  }

  .wishes-tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tab-btn {
    padding: 0.45rem 1.25rem;
    border-radius: 20px;
    border: 1px solid var(--accent);
    background: transparent;
    color: var(--text-dark);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .tab-btn.active {
    background: var(--accent);
    color: #ffffff;
  }

  .alert-success {
    background: #e7f4e4;
    color: #2e6027;
    border: 1px solid #c2e2bc;
    border-radius: 8px;
    padding: 0.5rem 0.85rem;
    margin-bottom: 0.75rem;
    font-size: 0.85rem;
  }

  .form-card {
    padding: 1.5rem 1.25rem;
    border: 1px solid rgba(135, 168, 120, 0.3);
    margin: 0 auto;
    max-width: 480px;
  }

  .wishes-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: left;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .form-group label {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-dark);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.6rem 0.75rem;
    border: 1px solid rgba(135, 168, 120, 0.4);
    border-radius: 8px;
    font-family: inherit;
    font-size: 0.9rem;
    color: var(--text-dark);
    background: #ffffff;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
  }

  .btn-submit {
    margin-top: 0.25rem;
    width: 100%;
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
  }

  .wishes-list {
    max-width: 480px;
    margin: 0 auto;
    max-height: 380px;
    overflow-y: auto;
    padding: 1rem;
    text-align: left;
  }

  .wish-item {
    border-bottom: 1px dashed rgba(135, 168, 120, 0.3);
    padding: 0.75rem 0;
  }
  .wish-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  .wish-item:first-child {
    padding-top: 0;
  }

  .wish-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .wish-author {
    font-size: 0.95rem;
    color: var(--text-dark);
  }

  .status-badge {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
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
    font-size: 0.85rem;
    color: var(--text-dark);
    line-height: 1.5;
    margin-bottom: 0.25rem;
  }

  .wish-date {
    display: block;
    font-size: 0.7rem;
    color: var(--text-muted);
  }

  @media (max-height: 680px) {
    .wishes-list {
      max-height: 280px;
    }
  }
</style>
