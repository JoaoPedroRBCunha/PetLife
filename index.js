var elementosDuvida = document.querySelectorAll('.duvida');

// forEach() == executada uma vez para cada elemento
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
    })
})