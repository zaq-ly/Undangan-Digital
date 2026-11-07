<script>
  import { invitationData } from '../data/invitation.js';
  const { loveStories } = invitationData;
</script>

<section class="section story-section" id="story">
  <div class="container">
    <span class="section-label">OUR JOURNEY</span>
    <h2 class="section-title">Kisah Cinta</h2>

    <div class="timeline-wrap">
      {#each loveStories as story, index}
        <div class="timeline-row">
          <div class="timeline-marker">
            <span class="marker-dot"></span>
          </div>

          <div class="card timeline-card">
            <span class="timeline-year font-editorial">{story.year}</span>
            <h3 class="timeline-heading font-serif">{story.title}</h3>
            <p class="timeline-desc">{story.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .story-section {
    background-color: var(--bg-main);
  }

  .timeline-wrap {
    position: relative;
    max-width: 520px;
    margin: 2.5rem auto 0;
    padding-left: 2.25rem;
    text-align: left;
  }

  .timeline-wrap::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 30px;
    left: 10px;
    width: 1px;
    background: linear-gradient(180deg, var(--accent) 0%, var(--primary-light) 100%);
  }

  .timeline-row {
    position: relative;
    margin-bottom: 2rem;
  }
  .timeline-row:last-child {
    margin-bottom: 0;
  }

  .timeline-marker {
    position: absolute;
    left: -2.25rem;
    top: 1.5rem;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 1px solid var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .marker-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent-dark);
  }

  .timeline-card {
    padding: 1.75rem 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--border-subtle);
  }

  .timeline-year {
    font-size: 1.6rem;
    color: var(--accent-dark);
    font-weight: 400;
    line-height: 1;
    display: block;
    margin-bottom: 0.35rem;
  }

  .timeline-heading {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  .timeline-desc {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.65;
  }

  @media (max-width: 480px) {
    .timeline-wrap {
      padding-left: 1.75rem;
    }
    .timeline-marker {
      left: -1.75rem;
    }
    .timeline-card {
      padding: 1.25rem 1.15rem;
    }
  }
</style>
