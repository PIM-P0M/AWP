"use client";

import Link from "next/link";
import { useState } from "react";
import { iniciarSesion } from "../actions/AuthAction";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setCargando(true);

        const resultado = await iniciarSesion(form);

        // Si el login es correcto, la acción redirige a /productos.
        // Si llegamos aquí con error, lo mostramos.
        if (resultado?.error) {
            setError(resultado.error);
            setCargando(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-indigo-700">
            <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">

                <header>
                    <img
                        className="w-20 mx-auto mb-5"
                        src="https://img.icons8.com/fluent/344/year-of-tiger.png"
                        alt="Logo"
                    />
                </header>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Escribe tu correo"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-indigo-500" htmlFor="password">
                            Contraseña
                        </label>

                        <input
                            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Escribe tu contraseña"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            required
                        />
                    </div>

                    {error && (
                        <p className="mb-4 text-sm text-red-600">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={cargando}
                            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer disabled:opacity-60"
                        >
                            {cargando ? "Ingresando..." : "Iniciar sesión"}
                        </button>
                    </div>
                </form>

                <footer className="flex justify-center">
                    <Link className="text-indigo-700 hover:text-pink-700 text-sm" href="/">
                        Volver
                    </Link>
                </footer>

            </div>
        </div>
    );
}
