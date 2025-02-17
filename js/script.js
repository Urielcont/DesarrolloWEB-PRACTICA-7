// Obtener los datos de la api al hacer click en el boton
document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            mostrarDatos(data); //enviar los datos a la funcion mostrarDatos
            document.getElementById('loadData').style.display = 'none';
        });
});

// funcion para crear una card por cada dato obtenido de la api
function mostrarDatos(posts) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';
    posts.forEach((post, index) => {
        const card = document.createElement('div');
        card.classList.add('cont');
        card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(card);
        setTimeout(() => card.classList.add('show'), index * 100);
    });
}

// Buscar en tiempo real los datos de la api
document.getElementById('search').addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    document.querySelectorAll('.cont').forEach(post => {
        const title = post.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchText)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});