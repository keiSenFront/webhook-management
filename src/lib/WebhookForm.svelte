<script>
  import { addWebhook, updateWebhook } from "../stores/webhooks";

  export let webhook;
  export let onClose;

  let name = webhook?.name || "";
  let enabled = webhook?.enabled || false;
  let urls = webhook?.urls?.join("\n") || "";
  let error = "";

  const handleSubmit = () => {
    if (!name.trim()) {
      error = "Name is required";
      return;
    }

    const urlList = urls.split("\n").filter((url) => url.trim());
    if (urlList.length === 0) {
      error = "At least one URL is required";
      return;
    }

    const webhookData = {
      name: name.trim(),
      enabled,
      urls: urlList,
    };

    if (webhook) {
      updateWebhook(webhook.id, webhookData);
    } else {
      addWebhook(webhookData);
    }

    onClose();
  };
</script>

<div class="form-overlay">
  <div class="form-container">
    <h2>{webhook ? "Edit Webhook" : "Create Webhook"}</h2>

    {#if error}
      <div class="error">{error}</div>
    {/if}

    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" type="text" bind:value={name} />
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" bind:checked={enabled} />
        Enabled
      </label>
    </div>

    <div class="form-group">
      <label for="urls">URLs (one per line)</label>
      <textarea id="urls" bind:value={urls} rows="4"></textarea>
    </div>

    <div class="form-actions">
      <button on:click={handleSubmit}>Save</button>
      <button class="secondary" on:click={onClose}>Cancel</button>
    </div>
  </div>
</div>

<style>
  .form-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .form-container {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--card-bg);
    color: var(--text-color);
  }

  textarea {
    font-family: monospace;
  }

  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .secondary {
    background-color: var(--secondary);
  }

  .error {
    color: red;
    margin-bottom: 1rem;
  }
</style>
