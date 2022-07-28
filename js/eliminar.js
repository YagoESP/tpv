export let Eliminar = () =>{

    let btnEliminar = document.querySelector('.boton-eliminar');
    let ticket = document.querySelector('.eliminar-ticket');
    let IconoCerrarEliminar = document.querySelector('.cerrar-icono-eliminar');
    let CerrarTicket = document.querySelector('.ticket-btn-cerrar-e');

    if(btnEliminar){
        btnEliminar.addEventListener('click', () =>{
            ticket.classList.add('activado');
        })
    }

    if(IconoCerrarEliminar){
        IconoCerrarEliminar.addEventListener('click', () =>{
            ticket.classList.remove('activado');
        })
    }

    if(CerrarTicket){
        CerrarTicket.addEventListener('click', () =>{
            ticket.classList.remove('activado');
        })
    }

    //Eliminar Ivas

    let eliminarIvas = document.querySelectorAll('.tabla-btn-eliminar');
    let ticketEliminar = document.querySelector('.eliminar-iva');
    let IconoCerrarEliminarIva = document.querySelector('.eliminar-iva-btn-cerrar');
    let CerrarTicketIva = document.querySelector('.cerrar-icono-iva');

    if(eliminarIvas){
        eliminarIvas.forEach(eliminarIva =>{
            eliminarIva.addEventListener('click', () =>{
                ticketEliminar.classList.add('activado');
            })
        }
        )
    }

    if(IconoCerrarEliminarIva){
        IconoCerrarEliminarIva.addEventListener('click', () =>{
            ticketEliminar.classList.remove('activado');
        })
    }

    if(CerrarTicketIva){
        CerrarTicketIva.addEventListener('click', () =>{
            ticketEliminar.classList.remove('activado');
        })
    }
}