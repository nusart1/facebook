import React from "react";
import {FaHome} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {FaLayerGroup} from 'react-icons/fa';
import {FaMapMarkedAlt} from 'react-icons/fa';
import {FaWatchmanMonitoring} from 'react-icons/fa';
import {FaMemory} from 'react-icons/fa';
import {FaSave} from 'react-icons/fa';
import ReactDOM from "react-dom/client";
import "./main.css";
import Rasm from '../../assetts/image.jpg';
import Photo from '../../assetts/img.jpg';
import Img from '../../assetts/logo.jpg';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <SavePasswordBox />
        <StatusBox />
        <Stories />
      </main>
      <RightSidebar />
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);


export default App;

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img className="img" src={Img} alt="" />
        <p>Холиков Сайёрбек</p>
      </div>
      <ul>
        <li><FaUserFriends size={20} color="blue"/>Друзья</li>
        <li><FaMemory size={20} color="blue"/>Воспоминания</li>
        <li><FaSave size={20} color="blue"/>Сохраненное</li>
        <li><FaLayerGroup size={20} color='blue' />Группы</li>
        <li><FaWatchmanMonitoring size={20} color='blue' />Видео</li>
        <li><FaMapMarkedAlt size={20} color='blue' />Marketplace</li>
        <li><FaLayerGroup size={20} color='blue' />Ленты</li>
        <li><FaWatchmanMonitoring size={20} color='blue' />Мероприятия</li>
        <li><FaMemory size={20} color="blue"/>Ads Manager</li>
        <li><FaSave size={20} color="blue"/>Показать больше</li>
      </ul>
      <div className="quick-links"><FaUserFriends size={20} color="blue"/>8 Ball Pool</div>
    </aside>
  );
}

function SavePasswordBox() {
  return (
    
    <div>
      <div className="header">
        <ul>
          <li><FaHome size={20} color="blue" /></li>
          <li><FaUserFriends size={20} color="blue" /></li>
          <li><FaLayerGroup size={20} color='blue' /></li>
          <li><FaMapMarkedAlt size={20} color='blue' /></li>
          <li><FaWatchmanMonitoring size={20} color='blue' /></li>
        </ul>
      </div>
      <div className="save-password-box">
      <strong>Запомнить пароль</strong>
      <p>При следующем входе из этого браузера нажмите на фото профиля вместо ввода пароля.</p>
      <div className="buttons">
        <button className="ok">OK</button>
        <button className="not-now">Не сейчас</button>
      </div>
    </div>
    </div>
  );
}

function StatusBox() {
  return (
    <div className="status-box">
      <input  type="text" placeholder="Что у вас нового, Сайёрбек?"/>
      <div className="options">
        <button> <FaWatchmanMonitoring size={20} color="blue"/>Прямой эфир</button>
        <button><FaMemory size={20} color="blue"/>Фото/видео</button>
        <button><FaSave size={20} color="blue"/>Чувства/действия</button>
      </div>
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <div className="story">
        <img className="log" src={Img} alt="" />
        <img className="demo" src={Rasm} alt="" />
        <p>Создать историю</p>
        <button>+</button>
        </div>
      <div className="story">
      <img className="log" src={Rasm} alt="" />
      <img className="demo" src={Img} alt="" />
        <p>Erkin Bozorov</p>

      </div>
      <div className="story">
      <img className="log" src={Photo} alt="" />
      <img className="demo" src={Rasm} alt="" />
        <p>Yurak Amri</p>
        </div>
    </div>
  );
}

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="ads">
        <div className="ad">
          <img src={Rasm} alt="" />
        </div>
        <div className="ad">
          <img src={Photo} alt="" />
        </div>
      </div>
      <div className="friend-request">
        <img className="img" src={Img} alt="" />
        <p>Шариф Мирсаидов
           (2 общих друга)</p>
        <button>Подтвердить</button>
        <button>Удалить</button>
      </div>
      <div className="contacts">Cosmoschaning Malikasi</div>
    </aside>
  );
}

