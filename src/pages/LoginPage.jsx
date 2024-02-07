import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../store/authSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({username, password}))
    navigate('/')
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <span className="text-2xl col-span-full">Страница входа</span>
      <form
        onSubmit={handleSubmit}
        className="w-[min(100%,20rem)] col-span-full md:col-span-1) md:col-start-1 md:col-end-2 flex flex-col justify-center gap-3 [&>*]:px-2 [&>*]:py-1 [&>input]:rounded-sm [&>button]:rounded-md [&>button]:bg-slate-300"
      >
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
