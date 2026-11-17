'use client'

import { useEffect, useState } from 'react';
import { guardarContacto } from '../actions/contactoAction';

export default function ContactoPage() {
   const [nombre, setNombre] = useState('')
   const [correo, setCorreo] = useState('')
   const [telefono, setTelefono] = useState('')
   const [mensaje, setMensaje] = useState('')

   // Recupera los datos guardados en el navegador
   useEffect(() => {
      const itemNombre = JSON.parse(localStorage.getItem('Nombre'));
      if (itemNombre) { setNombre(itemNombre) }

      const itemCorreo = JSON.parse(localStorage.getItem('Correo'));
      if (itemCorreo) { setCorreo(itemCorreo) }

      const itemTelefono = JSON.parse(localStorage.getItem('Telefono'));
      if (itemTelefono) { setTelefono(itemTelefono) }

      const itemMensaje = JSON.parse(localStorage.getItem('Mensaje'));
      if (itemMensaje) { setMensaje(itemMensaje) }
   }, []);

   // Guarda los datos en el navegador cada vez que cambian
   useEffect(() => {
      localStorage.setItem('Nombre', JSON.stringify(nombre));
      localStorage.setItem('Correo', JSON.stringify(correo));
      localStorage.setItem('Telefono', JSON.stringify(telefono));
      localStorage.setItem('Mensaje', JSON.stringify(mensaje));
   }, [nombre, correo, telefono, mensaje]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await guardarContacto(nombre, correo, telefono, mensaje);
         alert('Mensaje guardado correctamente');
      } catch (error) {
         console.error('Error al guardar contacto:', error);
         alert('No se pudo guardar el mensaje');
      }
   }

   return (
      <section>
         <br></br>
         <h2 className="font-bold text-cyan-300">CONTACTO</h2>

         <div className="mt-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-md">

               <div>
                  <label>Nombre</label>
                  <input
                     type="text" value={nombre} onChange={e => setNombre(e.target.value)}
                     placeholder="Escribe tu nombre"
                     className="border p-2 w-full"
                  />
               </div>

               <div>
                  <label>Correo</label>
                  <input
                     type="email" value={correo} onChange={e => setCorreo(e.target.value)}
                     placeholder="Correo Electronico"
                     className="border p-2 w-full"
                  />
               </div>

               <div>
                  <label>Telefono</label>
                  <input
                     type="tel" value={telefono} onChange={e => setTelefono(e.target.value)}
                     placeholder="Escribe tu telefono"
                     className="border p-2 w-full"
                  />
               </div>

               <div>
                  <label>Mensaje</label>
                  <textarea
                     value={mensaje} onChange={e => setMensaje(e.target.value)}
                     placeholder="Escribe tu mensaje"
                     className="border p-2 w-full"
                  ></textarea>
               </div>

               <button
                  type="submit"
                  className="bg-cyan-300 p-2 font-bold"
               >
                  ENVIAR
               </button>

            </form>
         </div>
      </section>
   )
}
