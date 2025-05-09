<script>
  import { webhooks, deleteWebhook } from "../stores/webhooks";
  import WebhookForm from "./WebhookForm.svelte";
  import TriggerModal from "./TriggerModal.svelte";

  let showForm = false;
  let editingWebhook = null;
  let webhookToTrigger = null;

  const handleEdit = (webhook) => {
    editingWebhook = webhook;
    showForm = true;
  };

  const handleFormClose = () => {
    showForm = false;
    editingWebhook = null;
  };
</script>

<div class="webhook-list">
  <div class="header">
    <h2>Your Webhooks</h2>
    <button
      on:click={() => {
        showForm = true;
        editingWebhook = null;
      }}
      class="create-button"
    >
      + Create new
    </button>
  </div>

  {#if showForm}
    <WebhookForm webhook={editingWebhook} onClose={handleFormClose} />
  {/if}

  <div class="grid-container">
    {#each $webhooks as webhook (webhook.id)}
      <div class="webhook-card">
        <div class="card-header">
          <h3>{webhook.name}</h3>
          <div class:active={webhook.enabled} class:inactive={!webhook.enabled}>
            {webhook.enabled ? "Active" : "Inactive"}
          </div>
        </div>

        <div class="urls">
          {#each webhook.urls as url}
            <div class="url">{url}</div>
          {/each}
        </div>

        <div class="card-actions">
          <button on:click={() => handleEdit(webhook)} class="edit-button"
            >Edit</button
          >
          <button
            on:click={() => (webhookToTrigger = webhook)}
            class="trigger-button">action</button
          >
          <button
            on:click={() => deleteWebhook(webhook.id)}
            class="delete-button">Delete</button
          >
        </div>
      </div>
    {/each}
  </div>

  {#if webhookToTrigger}
    <TriggerModal onClose={() => (webhookToTrigger = null)} />
  {/if}
</div>

<style>
  .webhook-list {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .create-button {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .create-button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-1px);
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .webhook-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    box-sizing: border-box;
  }

  .webhook-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .card-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--text-color);
  }

  .active {
    color: var(--success);
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 12px;
    background-color: var(--success-bg);
    font-size: 0.85rem;
  }

  .inactive {
    color: var(--error);
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 12px;
    background-color: var(--error-bg);
    font-size: 0.85rem;
  }

  .urls {
    flex-grow: 1;
    margin-bottom: 16px;
  }

  .url {
    word-break: break-all;
    font-family: monospace;
    font-size: 0.85rem;
    color: var(--secondary-text);
    background-color: var(--code-bg);
    padding: 8px;
    border-radius: 6px;
    margin-bottom: 8px;
  }

  .card-actions {
    display: flex;
    gap: 10px;
  }

  .card-actions button {
    flex: 1;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .edit-button {
    background-color: var(--edit);
    color: white;
  }

  .edit-button:hover {
    background-color: var(--edit-dark);
  }

  .trigger-button {
    background-color: var(--trigger);
    color: white;
  }

  .trigger-button:hover {
    background-color: var(--trigger-dark);
  }

  .delete-button {
    background-color: var(--delete);
    color: white;
  }

  .delete-button:hover {
    background-color: var(--delete-dark);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .grid-container {
      grid-template-columns: 1fr;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .create-button {
      width: 100%;
    }
  }
</style>
