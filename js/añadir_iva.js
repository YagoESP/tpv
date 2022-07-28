export let AñadirIva = () =>{
    let btnAñadir = document.querySelector('.añadir-iva-btn');
    let Añadir = document.querySelector('.añadir-mesa');
    let IconoCerrar = document.querySelector('.cerrar-icono');
    let Cancelar = document.querySelector('.añadir-mesa-cerrar');

    if(btnAñadir){
        btnAñadir.addEventListener('click', () =>{
            Añadir.classList.add('activado');
        })
    }

    if(IconoCerrar){
        IconoCerrar.addEventListener('click', () =>{
            Añadir.classList.remove('activado');
        })
    }

    if(Cancelar){
        Cancelar.addEventListener('click', () =>{
            Añadir.classList.remove('activado');
        })
    }

    //Editar Ivas

    let editarIvas = document.querySelectorAll('.tabla-btn-editar');

    if(editarIvas){
        editarIvas.forEach(editarIva =>{
            editarIva.addEventListener('click', () =>{
                Añadir.classList.add('activado');
            })
        }
        )
    }
}