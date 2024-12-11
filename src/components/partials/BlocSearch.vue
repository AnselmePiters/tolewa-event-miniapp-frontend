<template>
  <div class="compos-search">

    <h2>Tolewa Events</h2>
    <p>Découvrez, réservez, vibrez</p>

    <div class="recherche">

      <div class="champ-de-recherche">
        <input type="text" id="test" placeholder="Rechercher">
        <i class="bi bi-search fs-5"></i>
      </div>

      <div class="btn_scan">
        <label for="">
          <button>Scanner <i class="bi bi-qr-code-scan"></i>
          </button>
        </label>
      </div>

    </div>

  </div>
</template>

<style>

.compos-search {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
}
  .compos-search h2 {
    font-size: 20px;
    color: black;
  }
  .compos-search p {
    font-size: 15px;
    color: #F59D64;
    margin-top: -6px;
  }
  .recherche {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 10px;
  }

  .champ-de-recherche {
    display: flex;
    width: 60%;
  }

  #test {
    width: 100%;
    border: 1px solid #f59e6494;
    border-radius: 8px;

  }

  .btn_scan {
    font-size: 14px;
    text-align: right;
    width: 25%;
    margin: 0;
  }
  .btn_scan button {
    padding: 8px 10px;
    margin: 0;
    border: none;
    border-radius: 5px;
  }
  .btn_scan button:hover {
    background-color: rgba(0, 0, 0, 0.26);
  }

  .bi-search {
    font-size: 12px;
    transform: translateX(-27px);
    margin-top: 3px;
  }
</style>
