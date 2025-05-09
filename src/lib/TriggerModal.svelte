<script>
  export let onClose;

  const handleTrigger = () => {
    console.log("Trigger");
  };
</script>

<div class="modal-overlay">
  <div class="modal-container">
    <h2>Active actions</h2>
    <div class="modal-actions">
      <div class="action">
        <div>Lorem Ipsum1</div>
        <button class="trigger-button" on:click={() => handleTrigger}
          >Trigger</button
        >
      </div>
      <div class="action">
        <div>Lorem Ipsum1</div>
        <button class="trigger-button" on:click={() => handleTrigger}
          >Trigger</button
        >
      </div>
      <div class="action">
        <div>Lorem Ipsum1</div>
        <button class="trigger-button" on:click={() => handleTrigger}
          >Trigger</button
        >
      </div>
    </div>
    <div class="modal-footer">
      <button class="secondary" on:click={onClose}>Close</button>
    </div>
  </div>
</div>

<style>
  .modal-overlay {
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

  .modal-container {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--secondary-text);
    background-color: var(--code-bg);
    padding: 1rem;
    border-radius: 8px;
  }

  .action:not(:last-child) {
    margin-bottom: 1rem; /* 或者你想要的其他值 */
  }

  .trigger-button {
    background-color: var(--trigger);
    color: white;
  }

  .trigger-button:hover {
    background-color: var(--trigger-dark);
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .secondary {
    background-color: var(--secondary);
  }
</style>
