import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 h-screen bg-gray-100">
      <h2 className="text-2xl font-bold">Iniciar sesion</h2>
      <form
        className="flex flex-col w-1/3 gap-y-2 p-10 rounded-lg bg-white shadow-md"
        action="/"
        method="POST"
      >
        <label className="text-gray-600 font-medium text-sm" htmlFor="email">
          Correo electronico
        </label>
        <input className="mb-4 h-8 rounded-lg" type="text" name="email" />
        <label className="text-gray-600 font-medium text-sm" htmlFor="password">
          Contraseña
        </label>
        <input
          className="mb-6 h-8 rounded-lg"
          type="password"
          name="password"
        />

        <button
          className="rounded-lg p-1 text-white font-normal text-sm bg-indigo-600 cursor-pointer hover:bg-indigo-400 "
          type="submit"
          onClick={() => navigate("/")}
        >
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};
