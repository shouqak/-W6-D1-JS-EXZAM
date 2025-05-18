async function fetchData() {
  const response = await fetch(
    "https://api.harvardartmuseums.org/object?apikey=3c858690-e0bd-4fbe-ad4e-8ace52a38451"
  )
  const data = await response.json()
  renderData(data)

  //console.log(data);

  /* let container = document.getElementById("container")
let card =document.createElement("p")
card.textContent=item.records.classification
console.log(item.records.creditline);


    container.appendChild(card) */
}

async function renderData(data) {


  data.records.forEach((item) => {
    console.log(item)
let container = document.getElementById("container")
let card =document.createElement("div")
card.innerHTML=`
<div class="container text-center bg-warning-subtle my-2">
  <div class="row">
    <div class="col">
      ${item.url}
    </div>
    <div class="col">
     <p>${item.creditline}</p>
     <br> 
     <p>${item.division}</p>
     <br> 
     <p>${item.copyright}</p>
     <br> 
     <p>${item.createdate}</p>
    </div>
  </div>
  </div`

container.appendChild(card)
  })
}

fetchData() 