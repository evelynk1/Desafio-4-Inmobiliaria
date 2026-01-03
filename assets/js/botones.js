
export const rutaPropiedades = (ruta) => {
    location.href = ruta
}

document.querySelector("#ventaBtn").addEventListener("click",() => {
    rutaPropiedades("./assets/views/propiedades_venta.html")
})

document.querySelector("#alquilerBtn").addEventListener("click",() => {
    rutaPropiedades("./assets/views/propiedades_alquiler.html")
})