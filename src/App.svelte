<script>
  import { theme } from "./stores/theme";
  import WebhookList from "./lib/WebhookList.svelte";
  import ThemeToggle from "./lib/ThemeToggle.svelte";

  $: document.documentElement.className = $theme;
</script>

<div class="app {$theme}">
  <header>
    <h1>Webhook Manager</h1>
    <ThemeToggle />
  </header>

  <main>
    <WebhookList />
  </main>

  <footer>
    <p>Webhook Management App</p>
  </footer>
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .light {
    --bg-color: #f5f5f5;
    --text-color: #333;
    --primary: #4a6fa5;
    --secondary: #6c757d;
    --card-bg: #fff;
    --border-color: #ddd;
  }

  .dark {
    --bg-color: #1a1a1a;
    --text-color: #f0f0f0;
    --primary: #6c8fc7;
    --secondary: #8e979f;
    --card-bg: #2d2d2d;
    --border-color: #444;
  }

  .app {
    background-color: var(--bg-color);
    color: var(--text-color);
  }

  header,
  footer {
    padding: 1rem;
    background-color: var(--primary);
    color: white;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  main {
    flex: 1;
    padding: 2rem;
  }

  footer {
    text-align: center;
  }
</style>
