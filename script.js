document.addEventListener('DOMContentLoaded', () => {
    const imageEndpoint = 'https://dog.ceo/api/breeds/image/random';
    const dogImage = document.getElementById('dog-image');
    document.getElementById('get-image').addEventListener('click', async () => {
        try {
            const response = await fetch(imageEndpoint);
            const data = await response.json();
            dogImage.src = data.message;
            dogImage.classList.remove('d-none');
        } catch (error) {
            console.error('Error al obtener la imagen del perro:', error);
            dogImage.alt = 'No se pudo cargar la imagen del perrito';
        }
    });
});