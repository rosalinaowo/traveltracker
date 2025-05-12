<template>
  <div class="container my-5" @click="handleClick">
    <div class="card mb-3" style="max-width: 100%;">
          <div class="card-body">
            <h5 class="card-title">Nome del biglietto</h5>
            <span class="mx-2">In partenza a: {{ departureCity }}</span>
            <span class="mx-2"></span>
            <span class="mx-2">In arrivo a: {{ arrivalCity }}</span>
            <div class="mx-2">
              <span style="float: right;">Arrivo: {{ dateTimeE }}</span>
              <span style="float: right;" class="me-4">Partenza: {{ dateTimeS }}</span>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
const id = 1;
export default {
  data(){
    return{

    }
  },
  name: 'TicketComponent',
  props: ["dateTimeS", "dateTimeE", "departureCity", "arrivalCity", "idPassed"],
  
  methods: {
    handleClick() {
      
      this.$emit('clicked'); // Emesso un evento quando il rettangolo è cliccato
      console.log('Biglietto cliccato!');
      alert(this.idPassed)
    }
  }
}
</script>

<style>
.card {
  cursor: pointer;
  transition: background-color 0.3s;
}
.card:hover {
  background-color: gray; /* Colore più scuro quando il mouse è sopra */
}
</style>