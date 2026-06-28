const btnTodos = document.getElementById("btnTodos");
const btnBuscar = document.getElementById("btnBuscar");

const resultado = document.getElementById("resultado");
const mensajeError = document.getElementById("mensajeError");

const nameInput = document.getElementById("name");
const statusInput = document.getElementById("status");
const speciesInput = document.getElementById("species");
const typeInput = document.getElementById("type");
const genderInput = document.getElementById("gender");

const URL = "https://rickandmortyapi.com/api/character";

// MOSTRAR PERSONAJES

function mostrarPersonajes(personajes) {

    resultado.innerHTML = "";

    personajes.forEach(personaje => {

        resultado.innerHTML += `

        <tr>

            <td>
                <img src="${personaje.image}" alt="${personaje.name}">
            </td>

            <td>${personaje.name}</td>

            <td>${personaje.status}</td>

            <td>${personaje.species}</td>

            <td>${personaje.type || "-"}</td>

            <td>${personaje.gender}</td>

        </tr>

        `;

    });

}

// OBTENER TODOS

btnTodos.addEventListener("click", async () => {

    mensajeError.textContent = "";

    resultado.innerHTML = "";

    try {

        const respuesta = await fetch(URL);

        if (!respuesta.ok) {
            throw new Error();
        }

        const datos = await respuesta.json();

        mostrarPersonajes(datos.results);

    }

    catch {

        mensajeError.textContent = "Error al obtener los personajes.";

    }

});

// BUSCAR CON FILTROS

btnBuscar.addEventListener("click", async () => {

    mensajeError.textContent = "";

    resultado.innerHTML = "";

    const parametros = new URLSearchParams();

    if (nameInput.value)
        parametros.append("name", nameInput.value);

    if (statusInput.value)
        parametros.append("status", statusInput.value);

    if (speciesInput.value)
        parametros.append("species", speciesInput.value);

    if (typeInput.value)
        parametros.append("type", typeInput.value);

    if (genderInput.value)
        parametros.append("gender", genderInput.value);

    try {

        const respuesta = await fetch(`${URL}?${parametros}`);

        if (!respuesta.ok) {
            throw new Error();
        }

        const datos = await respuesta.json();

        mostrarPersonajes(datos.results);

    }

    catch {

        mensajeError.textContent = "No se encontraron personajes.";

    }

});