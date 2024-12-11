<template>
  <div class="header">
    <h1 class="header-logo"><RouterLink to="/"><img src="\src\assets\img\tolewa-logo.png" class="logo-img" alt=""></RouterLink></h1>
    <span><i class="bi bi-bell-fill fs-2"></i></span>
  </div>
</template>



<style>
  .header {
    background-color: white;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
  }

  .header-logo a{
    margin-top: 2%;
    color: black;
    text-decoration: none;
  }
  .logo-img {
    /* margin-top: 12px; */
    height: 100px;
    width: 70px;
  }

  .bi-bell-fill:hover {
    color: rgba(13, 110, 253, 1);
    cursor: pointer;
  }
</style>
