export let Cobrar = () =>{
    let btnCobrar = document.querySelector('.boton-cobrar');
    let ticket = document.querySelector('.cobrar-ticket');
    let IconoCerrarCobrar = document.querySelector('.cerrar-icono-cobrar');
    let CerrarTicket = document.querySelector('.ticket-btn-cerrar-c');

    if(btnCobrar){
        btnCobrar.addEventListener('click', () =>{
            ticket.classList.add('activado');
        })
    }

    if(IconoCerrarCobrar){
        IconoCerrarCobrar.addEventListener('click', () =>{
            ticket.classList.remove('activado');
        })
    }

    if(CerrarTicket){
        CerrarTicket.addEventListener('click', () =>{
            ticket.classList.remove('activado');
        })
    }
}