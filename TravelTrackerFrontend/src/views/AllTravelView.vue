<script setup>

import { onMounted, onBeforeMount } from 'vue'



let travels = [];
let typeFilter = 'all';
onBeforeMount(() => {


  const cityList = ['Cervia', 'Cesena', 'Santa Maria Nuova Spallicci di Bertinoro Centro', 'Crocevia Ciarpame', 'Napoli', 'Massachussets Institute of Technology', 'Nessus'];
  for (let i = 0; i < 5; i++) {
    /// <summary> 
    /// questa funzione genera viaggi fittizi per testare l'interfaccia grafica con elementi di lunghezza variabile.
    /// il tipo e citta' sono decisi con un random, mentre le date sono fisse rispetto alla data corrente
    /// </summary>

    //dichiarazione tipo (aereo-treno)
    let _type;
    if (getRndIntegerInclusive(0, 1) == 0) { _type = 'Treno'; } else { _type = 'Aereo'; };

    // dichiara data 
    var _code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    var _departureDate = new Date();
    _departureDate.setDate(_departureDate.getDate() + 1)

    var _arrivalDate = _departureDate;
    _arrivalDate.setHours(_arrivalDate.getHours() + 1)

    var _departureCity = cityList[getRndIntegerInclusive(0, cityList.length - 1)]

    var _arrivalCity = cityList[getRndIntegerInclusive(0, cityList.length - 1)]

    travels[i] = {
      type: _type,
      code: _code,
      departureDate: _departureDate,
      departureCity: _departureCity,
      arrivalDate: _arrivalDate,
      arrivalCity: _arrivalCity
    }
  }
})



</script>

<template>
  <div class="vertFlex">
    <div style="width: 50%;" class="input-group my-4">
      <span class="input-group-text">Arrivi e partenze da:</span>
      <input type="text" class="form-control" placeholder="Napoli" aria-label="Città di partenza"
        aria-describedby="startCity">
      <button class="btn btn-outline-secondary">Invio</button>
    </div>
    <div class="horzFlex">
      <h1>Lista dei viaggi</h1>
      <div class="spacer"></div>
      <input type="radio" class="btn-check" @:click="typeFilter = 'all'; console.log(typeFilter)" name="options-base" id="allCheck" autocomplete="off" checked>
      <label class="btn" for="allCheck">Tutto 🔀</label>

      <input type="radio" class="btn-check" @:click="typeFilter = 'Aereo'; console.log(typeFilter)" name="options-base" id="planesCheck" autocomplete="off">
      <label class="btn" for="planesCheck">Solo Aerei 🛫</label>

      <input type="radio" class="btn-check" @:click="typeFilter = 'Treno'; console.log(typeFilter)" name="options-base" id="trainsCheck" autocomplete="off">
      <label class="btn" for="trainsCheck">Solo Treni 🚃</label>
    </div>
    <table id="mainTable" class="table">
      <thead>
        <tr>
          <th scope="col">Codice viaggio</th>
          <th scope="col">Partenza</th>
          <th scope="col">Data & Ora di partenza</th>
          <th scope="col">Arrivo</th>
          <th scope="col">Data & Ora di arrivo</th>
          <th scope="col">Tipo di viaggio</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in travels">
        <tr v-if="typeFilter == 'all' || item.type == typeFilter">
          <td>{{ item.code }}</td>
          <td>{{ item.departureCity }}</td>
          <td>{{ item.departureDate }}</td>
          <td>{{ item.arrivalCity }}</td>
          <td>{{ item.arrivalDate }}</td>
          <td>{{ item.type }}</td>
        </tr>
        </template>




        
      </tbody>
    </table>
  </div>
</template>

<script>
function getRndIntegerInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



</script>

<style>
.vertFlex {
  /*ccd sta per centered content div*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

.horzFlex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
}

#mainTable {
  width: 50%;
}

.form-check {
  align-self: flex-end;
}

.spacer {
  flex-grow: 1;
}
</style>