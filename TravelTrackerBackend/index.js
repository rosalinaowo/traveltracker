var express = require("express");
var api = require("./crud");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("Server in funzione...");
  next();
});

router.route("/getStazione/:nStazione").get((req, res) => { //verrà chiamato ogni volta che si modifica il campo "Stazione di Partenza" e "Stazione di Arrivo"
  console.log(req.params.nStazione);
  nomeStazione = req.params.nStazione;
  api.getStazione(nomeStazione).then((data) => {
    res.status(201).json(data);
  });
});




router.route("/getTicket").post((req, res) => {
  console.log(req.body);  
  const searchParams = {
      departureLocationId: req.body.departureStation,
      arrivalLocationId: req.body.arrivalStation,
      departureTime: req.body.departureDate,
      arrivalTime : req.body.arrivalDate ? new Date(req.body.arrivalDate).toISOString() : null,
      adults: req.body.adultNumber,
      children: req.body.childrenNumber,
      criteria: req.body.criteria ? req.body.criteria : null,
      advancedSearchRequest: req.body.advancedSearchRequest ? req.body.advancedSearchRequest : null, 
    };


  if(searchParams.arrivalTime == null){
    delete searchParams.arrivalTime;
  }
  if(searchParams.advancedSearchRequest == null){
    delete searchParams.advancedSearchRequest;
  }
  if(searchParams.criteria == null){
    delete searchParams.criteria;
  }
  const searchParamsJson = JSON.stringify(searchParams);

  

  api.getTickets(searchParamsJson).then((data) => {
    res.status(201).json(data);
    
  });

});

var port = process.env.PORT || 8090;
app.listen(port);
console.log(`Le API sono in ascolto su http://localhost:${port}/api`);
