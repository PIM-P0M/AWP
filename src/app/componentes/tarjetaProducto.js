"use client";

import { useState } from "react";
import Image from "next/image";
import { eliminarProducto } from "../actions/productosaction";

export default function TarjetaProducto({ productos }) {
const [text, setTexto] = useState("Agregar");
const [color, setColor] = useState("bg-cyan-300");
const [cargando, setCargando] = useState(false);

function agregar() {
    if (text == "Agregar") {
        setTexto("Agregado");
        setColor("bg-green-500");
    } else {
        setTexto("Agregar");
        setColor("bg-cyan-300");
    }
}

const handleEliminar = async () => {
    const confirmacion = window.confirm(
        `¿Estás seguro de eliminar "${productos.nombre}"?`
    );

    if (confirmacion) {
        setCargando(true);

        try {
            await eliminarProducto(productos.id);
        } catch (error) {
            alert("Ocurrió un error al eliminar el producto");
            setCargando(false);
        }
    }
};

return (
    <section className="p-6">
        <div className="flex gap-3">
            <div
                key={productos.id}
                className="border p-3 rounded"
            >
                <Image
                    className="w-[250px] h-[250px] object-cover shrink-0"
                    src={productos.imagen}
                    width={250}
                    height={250}
                    alt={productos.nombre}
                />

                <br />
               <div className="w-[250px] h-[200px] flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-7">
                    {productos.nombre}
                </h3>

                <p className="text-lg">
                    {productos.descripcion}
                </p>
                 <br />

                <p>${productos.precio}</p>

                <br />

               </div>

                <button
                    onClick={agregar}
                    className={"p-2 font-bold rounded w-full text-white " + color}
                >
                    {text}
                </button>

                <button
                    onClick={handleEliminar}
                    disabled={cargando}
                    className="mt-2 p-2 font-bold rounded w-full text-white bg-red-500 disabled:opacity-60"
                >
                    {cargando ? "Eliminando..." : "Eliminar"}
                </button>
            </div>
        </div>
    </section>
);

}
