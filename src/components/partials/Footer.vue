<template>
  <div>
    <span class="go-to-top">
      <a href="#" style="font-size: 30px;">+</a>
    </span>
  </div>
  <div class="footer m-auto">
    <Menu />
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
</script>

<style>
  .footer {
    background-color: white;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 0 3rem 3rem;
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0
  }

  .go-to-top {
    height: 30px;
    padding: 6px;
    background-color: rgba(0, 0, 0, 0.164);
    position: fixed;
    bottom: 4rem;
    right: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
  }

  .go-to-top:hover {
    background-color: rgba(0, 0, 0, 0.507);
  }

  .go-to-top a{
    text-decoration: none;
    color: rgb(0, 0, 0);
    transform: translateY(-3px);
  }
</style>
