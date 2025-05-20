import React, { useState } from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";


export default function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "1",
    birthMonth: "января",
    birthYear: "2012",
    gender: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

if (!email || !password) {
  setError("Введите эл. адрес и пароль."); // "Elektron pochta va parolni kiriting."
} else if (password.length < 8 || password.length > 12) {
  setError("Пароль должен быть от 8 до 12 символов."); // "Parol 8 dan 12 gacha belgidan iborat bo‘lishi kerak."
} else {
  // Validatsiya muvaffaqiyatli — bu yerda login yoki boshqa amallarni bajaring
  setError(""); // Xatolik yo'q
  alert("Регистрация успешна!");
      navigate("/vxod");
      navigate("/main");
}

      

    
  };

  return (
    <div className="register-container">
      <h1 className="logo">facebook</h1>
      <div className="register-card">
        <h2>Создайте новый аккаунт</h2>
        <p>Это быстро и просто.</p>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="row1">
            <input type="text" name="firstName" placeholder="Имя" onChange={handleChange} className="input" />
            <input type="text" name="lastName" placeholder="Фамилия" onChange={handleChange} className="input" />
          </div>

          <div className="row">
            <select name="birthDay" onChange={handleChange} className="select">
              {[...Array(31)].map((_, i) => <option key={i + 1}>{i + 1}</option>)}
            </select>
            <select name="birthMonth" onChange={handleChange} className="select">
              {["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"].map((m) => <option key={m}>{m}</option>)}
            </select>
            <select name="birthYear" onChange={handleChange} className="select">
              {Array.from({ length: 100 }, (_, i) => 2025 - i).map((y) => <option key={y}>{y}</option>)}
            </select>
          </div>

          <div className="gender-row">
            <label><input type="radio" name="gender" value="Женщина" onChange={handleChange} />Женщина</label>
            <label><input type="radio" name="gender" value="Мужчина" onChange={handleChange} />Мужчина</label>
            <label><input type="radio" name="gender" value="Другое" onChange={handleChange} />Другое</label>
          </div>

          <input type="email" name="email" placeholder="Эл. адрес" onChange={handleChange} className="input-full" />
          <input type="password" name="password" placeholder="Новый пароль (8–12 символов)" onChange={handleChange} className="input-full" />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="submit-btn">Зарегистрироваться</button>
        </form>

        
        
          <button
            onClick={() => navigate("/vxod")}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit"
            }}
          >
            У вас уже есть аккаунт?
          </button>
      </div>
    </div>
  );
}