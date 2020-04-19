const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

const contenido = document.getElementById('contenido')
const nombre = document.createElement('h1')

//Conectar API
var request = new XMLHttpRequest()

request.open('GET', 'http://www.dnd5eapi.co/api/monsters/', true)
request.onload = function () {

        const modal = document.createElement('div')
        modal.setAttribute('class', 'modal')
        modal.setAttribute('id', 'myModal')


  var data = JSON.parse(this.response)
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  for (let index = 0; index < data.count; index++) {


    const ul = document.getElementById("myUL");
    const li = document.createElement('li')
    li.onclick = function () { Popup() };

    const a = document.createElement('a')
    const url = "http://www.dnd5eapi.co" + data.results[index].url
    a.textContent = data.results[index].name
    var monstruo = data.results[index].url


    container.appendChild(card)
    card.appendChild(ul)
    ul.appendChild(li)
    li.appendChild(a)


    //Datos por monstruo
    var requestBusqueda = new XMLHttpRequest()

    requestBusqueda.open('GET', url, true)
    requestBusqueda.onload = function () {


      var monstruo = JSON.parse(this.response)
      a.onclick = function (event) {


        nombre.textContent = monstruo.name
        console.log(monstruo.name)
        console.log(monstruo.size)
        console.log(monstruo.type)
        console.log(monstruo.subtype)
        console.log(monstruo.alignment)
        console.log(monstruo.armor_class)
        console.log(monstruo.hit_points)
        console.log(monstruo.hit_dice)
        console.log(monstruo.speed.walk)
        console.log(monstruo.speed.swim)

        contenido.appendChild(nombre)
      }
    }
    requestBusqueda.send()
  }
}


request.send()


function buscar() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function Popup() {
  modal.style.display = "block";
}