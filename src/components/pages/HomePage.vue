<template>
  <div class="container">

  <div class="slider-div">
    <img src="/src/assets/img/Rectangle-2.png" alt="">
  </div>

  <div class="Ticket-div">
    <BlocSearch />
  </div>

  <div class="bloc-filter">
    <FilterEvent />
  </div>
  <div class="search-div mt-4 mb-4">
    <RouterLink :to="{name: 'aide'}">
      <EventModel />
    </RouterLink>
  </div>
  <div class="search-div mt-4 mb-4">
    <RouterLink :to="{name: 'aide'}">
      <EventModel />
    </RouterLink>
  </div>
  <div class="search-div mt-4 mb-4">
    <RouterLink :to="{name: 'aide'}">
      <EventModel />
    </RouterLink>
  </div>

  </div>


</template>

<script setup>
  import EventModel from '../partials/EventModel.vue'
  import BlocSearch from '../partials/BlocSearch.vue'
  import FilterEvent from '../partials/FilterEvent.vue'
</script>

<style>

.slider-div {
  width: 100%;
}
.slider-div a {
  text-decoration: none;
}
.slider-div img {
  width: 100%;
  height: 30vh;
}

.search-div {
  text-decoration: none;
  border-radius: 20px;
}
.search-div * {
  text-decoration: none;
  color: inherit;
}
.search-div:hover {
  box-shadow: 10px 10px 5px rgba(0, 0, 0, .2);
}
</style>
