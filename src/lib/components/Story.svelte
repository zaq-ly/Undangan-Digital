<script>
  import { invitationData } from '../data/invitation.js';
  const { loveStories } = invitationData;
</script>

<section class="section story-section">
  <div class="container">
    <h2 class="section-title">Kisah Cinta Kami</h2>
    <p class="section-subtitle">Our Love Journey</p>

    <div class="timeline">
      {#each loveStories as story, index}
        <div class="timeline-item">
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-content card">
            <span class="story-year font-serif">{story.year}</span>
            <h3 class="story-title">{story.title}</h3>
            <p class="story-desc">{story.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .story-section {
    background: rgba(135, 168, 120, 0.06);
  }

  .timeline {
    position: relative;
    max-width: 500px;
    margin: 0.75rem auto 0;
    padding-left: 1.75rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 25px;
    left: 8px;
    width: 2px;
    background: linear-gradient(180deg, var(--accent) 0%, var(--primary) 100%);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 0.85rem;
    text-align: left;
  }

  .timeline-dot {
    position: absolute;
    left: -1.75rem;
    top: 1rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .dot-inner {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary);
  }

  .timeline-content {
    margin-bottom: 0;
    padding: 0.85rem 1.15rem;
  }

  .story-year {
    display: inline-block;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--accent-dark);
    margin-bottom: 0.15rem;
  }

  .story-title {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    color: var(--text-dark);
    margin-bottom: 0.25rem;
  }

  .story-desc {
    font-size: 0.82rem;
    color: var(--text-muted);
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    .timeline {
      padding-left: 1.75rem;
    }
    .timeline-dot {
      left: -1.75rem;
    }
  }
</style>

