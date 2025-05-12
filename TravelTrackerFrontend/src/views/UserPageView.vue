<script setup>
    import Ticket from "@/components/Ticket.vue"
    import { onBeforeMount } from 'vue'

    //array di esempio per simulare tempo, da cambiare col db
    let allTickets = [];
    let oldTicketsStart = [];
    let oldTicketsEnd = [];
    let oldTicketsDepartureCity = [];
    let oldTicketsArrivalCity = [];
    let currentTicketsStart = []; //ora int array poi da fare con dati component
    let currentTicketsEnd = [];
    let currentTicketsDepartureCity = [];
    let currentTicketsArrivalCity = [];
    let username = "";
    let userPfpSrc = "";
    //timeNow da cambiare dopo db
    //let timeNow = 2;
    let newDate = new Date();
    newDate.setTime(Date.now());
    let timeNow = Date.now();

    //metodo da fare come costruttore, eseguito prima del render
    onBeforeMount(() => {
        getUserData();
    });



    //fetcha i dati utente, ora fisso poi da prendere dal db
    function getUserData(){
        username = "Biggie Cheese";
        userPfpSrc = "";
        allTickets = [[1753408969304, 1753409069304, "Torino", "Bologna"],[1745408969303,1745409069303, "Milano", "Firenze"],[2743408969303,2743409069303, "Bologna", "Cesena"],[1743408969103,1743409069103, "Santa Maria Nuova", "Bertinoro"],[643408969303,743409069303, "Reggio Calabria", "Belluno"]]; //ms dal 1970

        fillTicketsLists();
    }

    function toFormatDate(msInp){

        let date = new Date(msInp);
        let min1 = addZeroes(date.getMinutes());
        let hour1 = addZeroes(date.getHours());
        let day1 = addZeroes(date.getDay());
        let month1 = addZeroes(date.getMonth());
        let year1 = date.getFullYear();

        return hour1 + ":" +  min1 + " " + day1 + "/" + month1 + "/" + year1;
    }

    function addZeroes(numInp){
        if(numInp.toString().length == 1){
            return "0" + numInp;
        }else{
            return numInp;
        }
    }


    // metti date cambio
    //inizializza biglietti filtrandoli tra viaggi futuri e passati
    function fillTicketsLists(){
        for(let i = 0; i< allTickets.length; i++){
            if(allTickets[i][1] > timeNow){
                currentTicketsStart.push(toFormatDate(allTickets[i][0]));
                currentTicketsEnd.push(toFormatDate(allTickets[i][1]));
                currentTicketsDepartureCity.push(allTickets[i][2]);
                currentTicketsArrivalCity.push(allTickets[i][3]);
                
            }else{
                oldTicketsStart.push(toFormatDate(allTickets[i][0]));
                oldTicketsEnd.push(toFormatDate(allTickets[i][1]));
                oldTicketsDepartureCity.push(allTickets[i][2]);
                oldTicketsArrivalCity.push(allTickets[i][3]);
                
            }
        }
    }
    
</script>

<template>
    <div class="container-fluid">
        <!--Titolo-->
        <div class="w-100 text-center my-2"><h1 class="fw-bolder">Area riservata</h1></div>

        <hr>

        <!--Div informazioni utente-->
        <div class="row mb-3">
            <div class="col-6"><h2 class="fw-bold">Bentornato {{ username }}!</h2></div>
            
        </div>
        <!--Div dei biglietti-->
        <div class="row">
            <!--Riga 1-->
            <div class="col-6">
                <h3>Viaggi futuri</h3>
            </div>
            <div class="col-6">
                <h3>Cronologia viaggi</h3>
            </div>
            <!--Riga 2-->
            <div class="col-6">
                <Ticket v-for="(ct, index) in currentTicketsStart" :dateTimeS="currentTicketsStart[index]" :dateTimeE="currentTicketsEnd[index]" :departureCity="currentTicketsDepartureCity[index]" :arrivalCity="currentTicketsArrivalCity[index]" :idPassed="index"></Ticket>
            </div>
            <div class="col-6">
                <Ticket v-for="(ct, index) in oldTicketsStart" :dateTimeS="oldTicketsStart[index]" :dateTimeE="oldTicketsEnd[index]":departureCity="oldTicketsDepartureCity[index]" :arrivalCity="oldTicketsArrivalCity[index]" :idPassed="index + currentTicketsStart.length"></Ticket>
            </div>
        </div>
        
    </div>
</template>
  
<style>
</style>