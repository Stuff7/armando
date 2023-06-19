<script lang="ts">
  import { getYearRange } from "utils/date";

  export let jobTitle: string;
  export let company: string;
  export let startDate: Date;
  export let endDate: Option<Date> = null;
  export let location: string;
  export let description: string;
</script>

<article class="ExperienceCard">
  <h1><strong>{jobTitle}</strong> @{company} ({getYearRange(startDate, endDate)})</h1>
  <em>{location}</em>
  <summary>{description}</summary>
</article>

<style lang="scss">
  .ExperienceCard {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
    border-inline: 1px solid var(--color-light);
    padding: var(--spacing-nm-100);
    color: var(--color-light);
    height: 100%;

    strong {
      color: var(--color-accent-2);
      font-size: var(--p-md-300);
    }

    h1 {
      color: var(--color-light);
      font-weight: 500;
      font-size: var(--p-md-200);
    }

    em {
      font-weight: 200;
      font-size: var(--p-md-100);
    }

    summary {
      color: white;
      font-size: var(--p-nm-200);
    }
  }
</style>
