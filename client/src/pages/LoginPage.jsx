import { useState } from "react";

export function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", form.username, "Contraseña:", form.password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
        <div className="text-center">
          <img src="/logo.png" alt="Logo" className="w-24 mx-auto mb-4" />
          <img src="/logo.png" alt="Logo" className="w-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-700">Iniciar Sesión</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Usuario</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="********"
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Recordar sesión
            </label>
            <a href="#" className="text-blue-600 text-sm">¿Olvidaste tu contraseña?</a>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
