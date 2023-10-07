const transmision= document.querySelector("#transmision");
const puertas= document.querySelector("#puertas");
const color= document.querySelector("#color");
const maximo= document.querySelector("#maximo");
const minimo= document.querySelector("#minimo");
const marca= document.querySelector("#marca");
const resultado = document.querySelector("#resultado");
const year = document.querySelector("#year");


const max = new Date().getFullYear();
const min = max -10;

const datosDeBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
   
};


document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);

    llenarSelect();
});

marca.addEventListener("change", e => {
datosDeBusqueda.marca = e.target.value;
filtrarAutos();
})
    color.addEventListener("change", e => {
        datosDeBusqueda.color = e.target.value;
        filtrarAutos();
      
        })
        year.addEventListener("change", e => {
            datosDeBusqueda.year = parseInt(e.target.value);
            filtrarAutos();
            })
            transmision.addEventListener("change", e => {
                datosDeBusqueda.transmision = e.target.value;
                filtrarAutos();
                })
                maximo.addEventListener("change", e => {
                    datosDeBusqueda.maximo = e.target.value;
                    filtrarAutos();
                    })
                    minimo.addEventListener("change", e => {
                        datosDeBusqueda.minimo = e.target.value;
                        filtrarAutos();
                        })
                        puertas.addEventListener("change", e => {
                            datosDeBusqueda.puertas = parseInt(e.target.value);
                            filtrarAutos();
                            })
                    

function mostrarAutos(autos) {
    limpiarHTML();
        for (let i = 0; i < autos.length; i++) {
        const auto = autos[i];
        const {marca, modelo, precio, year, puertas, color, transmision} = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
       Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Color: ${color} - Transmision: ${transmision} - ${puertas} Puertas
        `;

        resultado.appendChild(autoHTML);
        
    }
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}

function llenarSelect() {

    for(let i = max; i >= min; i--) {
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);

    }

}

function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(
        filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

        if(resultado.length) {
    mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados con su busqueda";
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosDeBusqueda
    if(marca) {
        return auto.marca === marca
    }
    return auto;

}

function filtrarYear(auto) {
    const { year } = datosDeBusqueda
    if(year) {
        return auto.year === year;
    }
    return auto;

}

function filtrarMinimo(auto) {
    const { minimo } = datosDeBusqueda
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    const { maximo } = datosDeBusqueda
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    const { puertas } = datosDeBusqueda
    if(puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTransmision(auto) {
    const { transmision } = datosDeBusqueda
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    const { color } = datosDeBusqueda
    if(color) {
        return auto.color === color;
    }
    return auto;
}