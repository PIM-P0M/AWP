import TarjetaProducto from "../componentes/tarjetaProducto";
import {createClient} from '../lib/supServer';
/*
//const PRODUCTOS = [
   { id: 1, nombre: "Mouse", precio: 150, descripcion:'Mouse gamer', imagen: "/mouse.jpg"},
   { id: 2, nombre: "Teclado", precio: 300, descripcion:'Teclado gamer', imagen: "/teclado.jpg" },
   { id: 3, nombre: "Audifonos", precio: 450, descripcion:'Audifonos gamer', imagen: "/audifonos.jpg"}
];
*/ 

async function getProductos() {
   const supabase = await createClient()

const {data: productos,error} = await supabase 
.from('productos')
.select('id,nombre,descripcion,precio,imagen');

if(error){
   console.error('Error al obtener productos:', error.message);
      return[];
   
}

return productos;

}

export default async function ProductosPage() {
   const productos = await getProductos();
   return (
      <section>
         <br></br>
           <h2 className="text-2xl font-bold mb-7">
            -- CATALOGO
         </h2>

            {productos.map((item) => (
            <TarjetaProducto key={item.id} productos={item}/>
            ))}

      </section>
   );
}