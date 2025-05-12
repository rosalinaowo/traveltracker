<script>
export default {
  data() {
    return {     
      today: '',
      selectedDepartureDate: '',
      selectedReturnDate: '',
      alertDiv: null,
      isAlertVisible: false,
      alertText: '',
      invalidDateError: '❌ Inserisci una data nel futuro!',
      suggestionsArr: [],
      suggestionsPart: [],
      departureStation: '',
      arrivalStation: '',
    };
  },
  watch: {
    selectedDepartureDate(date) {
      //alert('aaa');
      if (!date || date < this.today) {
        this.alertText = this.invalidDateError;

        this.alertDiv.classList.remove('animate__fadeOutUp');
        this.alertDiv.classList.add('animate__fadeInDown');
        this.isAlertVisible = true;
        this.selectedDepartureDate = '';
      } else {
        this.alertDiv.classList.remove('animate__fadeInDown');
        this.alertDiv.classList.add('animate__fadeOutUp');

        setTimeout(() => {
          this.isAlertVisible = false;
          this.alertText = '';
        }, 500)
      }
    }
  },
  mounted() {
    this.today = new Date().toISOString().split('T')[0];
    this.alertDiv = document.getElementById('alert');
    this.departureDateInput = document.getElementById('departureDate');

    this.selectedDepartureDate = this.today;

    this.$nextTick(() => {
      
    });
  },
  methods: {
    async getStationArr(name){
      console.log(name)
      const url = `http://localhost:8090/api/getStazione/${name}`
      try{
        const response = await fetch(url)
        if(!response.ok){throw new Error("Erroraccio")}
        else{
          const data = await response.json()
          this.suggestionsArr = data
          console.log(this.suggestionsArr)
          
        }
      }catch(e){console.error(e)}
    },
    async getStationPart(name){
      console.log(name)
      const url = `http://localhost:8090/api/getStazione/${name}`
      try{
        const response = await fetch(url)
        if(!response.ok){throw new Error("Erroraccio")}
        else{
          const data = await response.json()
          this.suggestionsPart = data
          console.log(this.suggestionsPart)
          
        }
      }catch(e){console.error(e)}
    },
    async setDepartureStation(name){
      this.departureStation = name
      document.getElementById("inputStartCity").value = name
      this.suggestionsPart = []
      // console.log(this.departureStation)
      this.test()
    },
    async setArrivalStation(name){
      this.arrivalStation = name
      document.getElementById("inputArriveCity").value = name
      this.suggestionsArr = []
      // console.log(this.arrivalStation)
      this.test()
    },
    test(){
      console.log("Stazione partenza : " + this.departureStation)
      console.log("Stazione arrivo : "+this.arrivalStation)
      console.log("Giorno partenza : "+this.selectedDepartureDate)
      console.log("Giorno Arrivo : "+this.selectedReturnDate)
    }

    

    
  }
}
</script>

<template>
  <div class="container mt-4">
    <div style="position: relative; z-index: -99;">
      <div id="alert" class="alert alert-warning animate__animated animate__fadeInDown" role="alert" :style="{ display: isAlertVisible ? 'block' : 'none' }">{{ alertText }}</div>
    </div>
    <div class="input-group mb-3">
      <select class="form-select" id="selectMean">
        <option value="1" selected>Treno</option>
        <option value="2">Aereo</option>
      </select>

      <form class="form-floating">
        <input id="inputStartCity" type="text" class="form-control" placeholder="Napoli" aria-label="Città di partenza" aria-describedby="startCity" @input="getStationPart($event.target.value)">
        <label for="inputStartCity">Da</label>
        <ul v-if="suggestionsPart.length > 0" class="dropdown Part">
          <li v-for="(station, index) in suggestionsPart" :key="index" @click= "setDepartureStation(station.name)">
            {{ station.name }}
          </li>
        </ul>
      </form>

      <form class="form-floating">
        <input id="inputArriveCity" type="text" class="form-control" placeholder="Milano" aria-label="Città di arrivo" @input="getStationArr($event.target.value)">
        <label for="inputArriveCity">A</label>
        <ul v-if="suggestionsArr.length > 0" class="dropdown Arr">
          <li v-for="(station, index) in suggestionsArr" :key="index" @click="setArrivalStation(station.name)">
            {{ station.name }}
          </li>
        </ul>
      </form>

      <form class="form-floating">
        <input id="inputDepartureDate" type="date" class="form-control" aria-label="Data di partenza" v-model="selectedDepartureDate">
        <label for="inputDepartureDate">Partenza</label>
        
      </form>

      <form class="form-floating">
        <input id="inputReturnDate" type="date" class="form-control" aria-label="Data di ritorno" v-model="selectedReturnDate">
        <label for="inputReturnDate">Ritorno</label>
      </form>

      <form class="form-floating">
        <input id="inputAdultNumber" type="number" min="0" value="1" class="form-control" aria-label="Numero di passeggeri adulti">
        <label for="inputAdultNumber">Adulti</label>
      </form>

      <form class="form-floating">
        <input id="inputChildrenNumber" type="number" min="0" value="0" class="form-control" aria-label="Numero di passeggeri bambini">
        <label for="inputChildrenNumber">Bambini</label>
      </form>

      <button class="btn btn-primary" type="button" id="searchButton">Cerca</button>
    </div>
  </div>
</template>

<style>
  #alert {
    --animate-duration: 0.5s;
  }

  .dropdown {
    position: absolute;
    background: "#141414";
    border: 1px solid "#141414";
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    z-index: 1000;
  }

  .dropdown li {
    padding: 8px;
    cursor: pointer;
  }

  .dropdown li:hover {
    background-color: #f0f0f0;
    color: black;
  }
</style>