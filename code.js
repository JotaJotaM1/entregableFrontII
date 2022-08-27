/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Dame tu nombre");
  datosPersona.edad = 2022 - prompt("Dame tu anio de nacimiento");
  datosPersona.ciudad = prompt("Dame tu ciudad");
  datosPersona.interesPorJs = prompt ("Te interesa JS ?")
 
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('#nombre').innerHTML = datosPersona.nombre
  document.querySelector('#edad').innerHTML = datosPersona.edad
  document.querySelector('#ciudad').innerHTML = datosPersona.ciudad
  document.querySelector('#javascript').innerHTML = datosPersona.interesPorJs

}


let renderizacion = 0;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
    renderizacion++;
    if(renderizacion <= 1){

      for(const lista of listado){

        let recorrer = `<div class="caja">
                          <img src="${lista.imgUrl}" alt="${lista.lenguajes}">
                          <p class= "lenguajes"> ${lista.lenguajes} </p>
                          <p class= "bimestre"> ${lista.bimestre} </p>
                        </div>`;

        document.getElementById('fila').innerHTML += recorrer;

      }
    }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let cambiar = document .getElementById('sitio');
  cambiar.classList.toggle('dark')
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let text = document.querySelector("p");

window.addEventListener("keydown", function (evento) {
  let tecla = evento.key;
  if (tecla === "F" | tecla === "f") {
    text.classList.remove("oculto");
    console.log(evento.key);
  }
});
