var cad = `
    <div class="banner-titulo">
        <img id="logo" src="./img/logo.webp" alt="logo"/>
        <h1 class="titulo">Adopcion de mascotas</h1>
    </div>

    <nav class="navbar">
    <div class="container-fluid">
        <ul class="navbar-nav flex-nav">
        
            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="mascotas.html">Mascotas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="animales.html">Animales</a>
            </li>
        </ul>
        </div>
    </nav>
`;
document.getElementById("idheader").innerHTML = cad;

function guardarAnimal() {

    let d = document.getElementById("txtDescripcion").value
    let i = document.getElementById("txtImagen").value
    
    let animal = {
        descripcion: d,
        imagen: i
    }
    let url = "http://127.0.0.1:5000/animales"
  
    var options = {
        body: JSON.stringify(animal),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            localStorage.setItem("operacionExitosa","true")
            localStorage.setItem("mensaje","animal agregado con exito")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/animales.html";
            //console.log("creado")
            //alert("Grabado")
  
            // Handle response we get from the API
        })
        .catch(err => {
            localStorage.setItem("operacionExitosa","false")
            localStorage.setItem("mensaje","error al agregar animal")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/animales.html";
            
            //alert("Error al grabar" )
            //console.error(err);
        })
};

/*var blob;
const foto = document.getElementById("txtFoto");
foto.addEventListener("change",(e) => {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;
    console.log(files[0]);
    blob = new Blob([files[0]], {type : 'image/jpeg'});
    console.log(blob)
    const miURL = URL.createObjectURL(blob)
    console.log(miURL)
    const img = document.getElementById("imagen");
    img.innerHTML = `<img src="${miURL}"/>`
    this.createImage(files[0]);

   
});*/


function guardarMascota() {

    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let s = document.querySelector('input[name="txtSexo"]:checked').value;
    let e = parseInt(document.getElementById("txtEdad").value)
    let an = parseInt(document.getElementById("txtAnimal").value)
    let f = document.getElementById("txtFoto").value;
    //console.log(document.querySelector('input[name="txtEsterilizado"]:checked').value);
    let checkboxs = document.getElementById("checkedValores").value;
    let esterilizado = checkboxs.includes("esterilizado");
    let vacunado = checkboxs.includes("vacunado");
    let desparasitado = checkboxs.includes("desparasitado");

    let peso = parseInt(document.getElementById("txtPeso").value)
    let t = document.querySelector('input[name="txtTamanio"]:checked').value;

    let mascota = {
        nombre: n,
        descripcion:d,
        sexo: s,
        edad: e,
        animal:an,
        foto:f,
        esterilizado: esterilizado,
        vacunado: vacunado,
        desparasitado: desparasitado,
        peso: peso,
        tamanio: t
    }
    console.log(mascota);
    let url = "http://127.0.0.1:5000/mascotas"
  
    var options = {
    body: JSON.stringify(mascota),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            //console.log("creado")
            //alert("Grabado")
            localStorage.setItem("operacionExitosa","true")
            localStorage.setItem("mensaje","Mascota agregada con exito")
            localStorage.setItem("mostrarAlerta","true")
            console.log(window.location)
            window.location.pathname = "./web/mascotas.html";
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            //alert("Error al grabar" )
            localStorage.setItem("operacionExitosa","false")
            localStorage.setItem("mensaje","error al agregar mascota")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "./web/mascotas.html";
            //console.error(err);
        })
};
  
   
function modificarMascota() {

    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let s = document.querySelector('input[name="txtSexo"]:checked').value;
    let e = parseInt(document.getElementById("txtEdad").value)
    let an = parseInt(document.getElementById("txtAnimal").value)
    let f = document.getElementById("txtFoto").value;
    console.log(document.querySelector('input[name="txtEsterilizado"]:checked')?.value);
    console.log(document.querySelector('input[name="txtVacunado"]:checked')?.value);
    console.log(document.querySelector('input[name="txtDesparasitado"]:checked')?.value);
    
    /*let checkboxs = document.getElementById("checkedValores").value;
    let esterilizado = checkboxs.includes("esterilizado");
    let vacunado = checkboxs.includes("vacunado");
    let desparasitado = checkboxs.includes("desparasitado");*/
    let esterilizado = document.querySelector('input[name="txtEsterilizado"]:checked')?.value != undefined;
    let vacunado = document.querySelector('input[name="txtVacunado"]:checked')?.value != undefined;
    let desparasitado = document.querySelector('input[name="txtDesparasitado"]:checked')?.value != undefined;

    let peso = parseInt(document.getElementById("txtPeso").value)
    let t = document.querySelector('input[name="txtTamanio"]:checked').value;
    
    let mascota = {
        nombre: n,
        descripcion:d,
        sexo: s,
        edad: e,
        animal:an,
        foto:f,
        esterilizado: esterilizado,
        vacunado: vacunado,
        desparasitado: desparasitado,
        peso: peso,
        tamanio: t
    }
   
    let url = "http://localhost:5000/mascotas/"+id
    var options = {
        body: JSON.stringify(mascota),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        //redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            localStorage.setItem("operacionExitosa","true")
            localStorage.setItem("mensaje","Mascota modificada con exito")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/mascotas.html";
            //console.log("modificado")
            //alert("Registro modificado")

            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            localStorage.setItem("operacionExitosa","false")
            localStorage.setItem("mensaje","error al modificar mascota")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/mascotas.html";
            //console.error(err);
            //alert("Error al Modificar")
        })      
}
   
function modificarAnimal() {
    let id = document.getElementById("txtId").value
    let d = document.getElementById("txtDescripcion").value
    let i = document.getElementById("txtImagen").value
    
    
    let animal = {
        descripcion: d,
        imagen: i
    }
    let url = "http://localhost:5000/animales/"+id
    var options = {
        body: JSON.stringify(animal),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        //redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            localStorage.setItem("operacionExitosa","true")
            localStorage.setItem("mensaje","Animal modificado con exito")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/animales.html";
            //console.log("modificado")
            //alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            localStorage.setItem("operacionExitosa","false")
            localStorage.setItem("mensaje","error al modificar animal")
            localStorage.setItem("mostrarAlerta","true")
            window.location.pathname = "/web/animales.html";
            //console.error(err);
            //alert("Error al Modificar")
        })      
};