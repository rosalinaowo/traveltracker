async function getStazione(nomeStazione) {
  const url = `https://www.lefrecce.it/Channels.Website.BFF.WEB/website/locations/search?name=${nomeStazione}`;
  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erroraccio");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("errore nella ricerca", error.message);
    return null;
  }
}

// async function getStations() {
//   const url =
//     "https://www.trenitalia.com/content/dam/tcom/config/stationList.json";
//   try {
//     const response = await fetch(url)
//     if (!response.ok) { throw new Error("Erroraccio") }
//     else {
//       const data = await response.json()
//       return data
//     }
//   }catch(e){console.error(e)}
// }



async function getTickets(params) {
  
  console.log(params)
  const url =
    "https://www.lefrecce.it/Channels.Website.BFF.WEB/website/ticket/solutions";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: params,
  };



  try {
    const response = await fetch(url, options);
  

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("errore nella ricerca", error.message);
    return null;
  }
}

module.exports = {
  getStazione: getStazione,
  getTickets: getTickets
};
