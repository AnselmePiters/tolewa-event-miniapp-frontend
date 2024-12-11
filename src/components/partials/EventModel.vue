<template>

  <div class="event">

    <img src="\src\assets\img\Rectangle-4.png" alt="">

    <div class="right">
      <div class="info-evnt">
        <h3>Titre</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div class="section-date">
        <span class="date-event">11 dec 2024 - 15:00</span>
        <span class="ticket-btn">Ticket</span>
      </div>
    </div>


  </div>

</template>

<style>
.event {
  height: 131px;
  border: solid 1px white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
}

.event img {
  height: 130px;
}

.info-evnt {
  padding: 6px;
  margin-left: 1rem;
}

.info-evnt h3 {
  font-size: 20px;
  font-weight: 700;
}

.info-evnt p {
  font-size: 14px;
}

.right {
  padding: 8px 8px 8px 0;
}

.section-date {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -10px 0 0 12px;
  padding-left: 8px;
}

.date-event {
  font-size: 12px;
}

.ticket-btn {
  font-size: 12px;
  background-color: #F59D64;
  padding: 1px 18px;
  border-radius: 6px;
  color: white;
}
</style>
