
async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function renderData() {
let container = document.getElementById("container")
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {

        console.log(item);
let card =document.createElement("div")
card.className="card m-1 px-1"
card.style.width= "20rem"
card.style.height="30rem"
let flags = document.createElement("img")
flags.className="card-img-top"
flags.style.height="50%"
flags.src=item.flags.png

let countryName =document.createElement("h4")
countryName.textContent= ` country Name: ${item.name.common}`

let countryCommon= document.createElement("h4")
countryCommon.innerText=`Common name: ${item.name.official}`
countryCommon.className="fs-5"
let population = document.createElement("p")
population.innerText=`population: ${item.population}`

let region= document.createElement("p")
region.innerText=`region: ${item.region}`

let languages1 = document.createElement("p")

languages1.innerText=item.languages.eng


//let googleMaps = document.createElement("p")
 let url = document.createElement("a")
url.href=item.maps.googleMaps 
url.innerText=url.href

/* googleMaps.appendChild(url)
 */card.appendChild(flags)

card.appendChild(countryName)
card.appendChild(countryCommon)
card.appendChild(population)
card.appendChild(region)
card.appendChild(languages1)
card.appendChild(url)




container.appendChild(card)
   });
}

renderData();


      




    
