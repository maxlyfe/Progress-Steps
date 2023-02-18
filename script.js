/* Obtener el elemento con el id de progreso. */
const progress = document.getElementById('progress')

/* Obtener el elemento con el id de anterior. */
const prev = document.getElementById('prev')

/* Obtener el elemento con la identificación de next. */
const next = document.getElementById('next')

/* Seleccionando todos los elementos con la clase de círculo. */
const circles = document.querySelectorAll('.circle')

let currentActive = 1

/* Agregar un detector de eventos al siguiente botón. Cuando se hace clic en el siguiente botón, la
variable activa actual se incrementa en 1. Si la variable activa actual es mayor que la longitud de
la matriz de círculos, la variable activa actual se establece en la longitud de la matriz de
círculos. A continuación, se llama a la función de actualización. */
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

/* Agregar un detector de eventos al botón anterior. Cuando se hace clic en el botón anterior, la
variable currentActive se reduce en 1. Si la variable currentActive es menor que 1, la variable
currentActive se establece en 1. Luego se llama a la función de actualización. */
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})


function update() {
    /* Agregando la clase de activo a los círculos que son menores que el activo actual. */
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    /* Seleccionando todos los elementos con la clase de activo. */
    const actives = document.querySelectorAll('.active')

    /* Establecer el ancho de la barra de progreso en el porcentaje del número de círculos activos
    dividido por el número total de círculos. */
    progress.style.width = (actives.length -1 ) / (circles.length - 1 ) * 100 + '%'

    
    /* Deshabilitar el botón anterior cuando el activo actual es 1 y deshabilitar el botón siguiente
    cuando el activo actual es igual a la longitud de la matriz de círculos. */
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        prev.disabled = false
        next.disabled = false
    }
}