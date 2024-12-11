<template>
  <div class="filter">
    <p>Evènements disponibles</p>
    <div class="filter-btn">
      <button>Filtrer</button>
    </div>
  </div>
</template>

<style>
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
  }

  .filter-btn {
    font-size: 14px;
    width: 22%;
  }
  .filter-btn button {
    width: 100%;
    padding: 0;
    border: 1px solid #f59e6494;
    border-radius: 4px;
  }
</style>
