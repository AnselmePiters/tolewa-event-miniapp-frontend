<template>
  <ul class="nav-menu w-100 m-auto">

    <li class="nav-menu-link"><RouterLink :to="{name: 'home'}">
      <span>
        <i class="bi bi-house-door-fill fs-4"></i>
      </span>
      <span class="menu-title">Accueil</span>
      </RouterLink>
    </li>

    <li class="nav-menu-link"><RouterLink :to="{name: 'panier'}">
      <span>
        <i class="bi bi-cart3 fs-4"></i>
      </span>
      <span class="menu-title">Panier</span>
      </RouterLink>
    </li>

  <li class="nav-menu-link"><RouterLink :to="{name: 'ticket'}">
      <span>
        <i class="bi bi-ticket-perforated-fill fs-4"></i>
      </span>
      <span class="menu-title">Mes tickets</span>
    </RouterLink></li>

    <li class="nav-menu-link"><RouterLink :to="{name: 'aide'}">
      <span>
        <i class="bi bi-person-fill fs-4"></i>
      </span>
      <span class="menu-title">Aide</span>
    </RouterLink></li>

  </ul>
</template>




<style>
  .nav-menu {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    padding-bottom: 3rem;
  }

  .nav-menu-link
 {
    list-style: none;
    margin: 5px 2px;
  }

  .nav-menu-link a:hover {
    color: rgba(13, 110, 253, 1);
  }
  .nav-menu-link a:active {
    color: rgba(13, 110, 253, 1);
  }

  .menu-title {
    margin-top: -6px;
  }

  .nav-menu-link a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
</style>
