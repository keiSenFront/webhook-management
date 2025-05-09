<script>
    import { theme, toggleTheme } from '../stores/theme';
  </script>
  
  <button on:click={toggleTheme}>
    {#if $theme === 'light'}
      🌙
    {:else}
      ☀️
    {/if}
  </button>