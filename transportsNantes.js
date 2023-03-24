// async function fetchParkingPublics() {
//     let response = await fetch('https://data.nantesmetropole.fr//api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&facet=grp_nom&facet=grp_statut&facet=grp_disponible&timezone=Europe%2FParis')
//     let parkingsPublics = await response.json()
//     console.log(parkingsPublics)
//     parkingsPublics = JSON.stringify(parkingsPublics)

//     let element = document.getElementById("zoneParkingsPublics")
//     element.innerHTML = "Voici les disponibilités en temps réel : " + parkingsPublics.facet_groups
//     console.log(parkingsPublics.facet_groups)

// }

// // fetchParkingPublics()

// function buttonClickGet() {
//     fetchParkingPublics()
// }

async function fetchParkingPublics() {
    let response = await fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parkings-publics-nantes-disponibilites&q=&lang=fr&rows=31&facet=grp_nom&facet=grp_statut&timezone=Europe%2FParis')
    let parkingsPublics = await response.json()
    // parkingsPublics = JSON.stringify(parkingsPublics)
    console.log('COUCOU', parkingsPublics)

    //let element = document.getElementById("zoneParkingsPublics")
    let list = document.getElementById("parkingsPublics")
    let titre1 = document.getElementById("Titre")
    titre1.style.visibility = "visible";

    let titre2 = document.getElementById("title")
    titre2.style.visibility = "visible";




    const parkingsTab = parkingsPublics.records
    console.log(parkingsTab)
    let Tab = 1
    for (const parking of parkingsTab) {
        console.log(parking.fields.grp_nom)
        list.innerHTML += '<div class = div'+ Tab +'>' + " " + " " + parking.fields.grp_nom + " " + '<br>' + " " + parking.fields.disponibilite + " places restantes" + '</div>'
        Tab = Tab + 1
        
    }
}

async function fetchParkingRelais() {
    let response = await fetch('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-relais-nantes-metropole-disponibilites&q=&facet=grp_nom&facet=grp_statut')
    let parkingsRelais = await response.json()
    let list = document.getElementById("parkingsRelais")

    const parkingsTab = parkingsRelais.records
    console.log(parkingsTab)
    let Tab = 1
    for (const parking of parkingsTab) {
        console.log(parking.fields.grp_nom)
        list.innerHTML += '<div class = div'+ Tab +'>' + " " + " " + parking.fields.grp_nom + " " + '<br>' + " " + parking.fields.disponibilite + " places restantes" + '</div>'
        Tab = Tab + 1
        
    }
}


    // for (const iterator of parkingName) {
    //     console.log(iteratoir)
    // }



    // let element = document.getElementById("zoneParkingsPublics")
    // let list = document.getElementById("list")

    // const parkingList = parkingsPublics.facet_groups[0].facets

    // parkingList.forEach((parking, index) => {
    //     list.innerHTML += '<li>' + parking.name + '</li>'
    // })

    // const dispos = parkingsPublics.facet_groups[2].facets
    // console.log("hello", dispos)

    // dispos.forEach((disponibilite, index) => {
    //     list.innerHTML += '<li>' + disponibilite.name + '</li>'
    // })

    // const status = parkingsPublics.facet_groups[1].facets

    // status.forEach((status, index) => {
    //     list.innerHTML += '<li>' + status.name + '</li>'
    // })
