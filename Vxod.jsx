import React, { useState } from "react";
import './vxod.css';
import { useNavigate } from "react-router-dom";



export default function Vxod() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Введите эл. адрес и пароль.");
    } else if (password.length < 8 || password.length > 12) {
      setError("Пароль должен быть от 8 до 12 символов.");
    } else {
      setError("");
      alert("Вход выполнен успешно!");
      navigate("/main");

    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1 className="logo">facebook</h1>
        <p className="text">
          Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
        </p>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="email"
            placeholder="Электронный адрес или номер телефона"
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль (8–12 символов)"
            onChange={handleChange}
            className="input"
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="login">Вход</button>

          <a href="https://ru-ru.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className="forgot">Забыли пароль?</a>
          <hr />

          
          <button
            type="button"
            className="register"
            onClick={() => navigate("/")}
          >
            Создать новый аккаунт
          </button>
        </form>
        <p className="bottom-link">
          <b>Создать Страницу</b> знаменитости, музыкальной группы или компании.
        </p>
      </div>
    </div>
  );
}