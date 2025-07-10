// src/pages/Home/HomePage.jsx

// Импорты остаются те же
import { Bonjour } from "../../modules/Bonjour/Bonjour";
import { NewArrival } from "../../modules/NewArrival/NewArrival";
import { HeaderPart2 } from "../../modules/HeaderPart2/HeaderPart2";
import { ThisMonth } from "../../modules/iBlock1/ThisMonth";
import ExploreProducts from "../../modules/ExploreProducts/ExploreProducts.jsx";

// 👇 Мы импортируем стили для контейнера
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <HeaderPart2 />

      {/* 👇 ВОТ ГЛАВНЫЙ КОНТЕЙНЕР ДЛЯ ВСЕГО КОНТЕНТА 👇 */}
      {/* Все, что внутри него, будет идеально ровным по бокам */}
      <main className="container">
        <ThisMonth />
        <ExploreProducts />
        <NewArrival />
        <Bonjour />
      </main>

      {/* Футер, если он есть, обычно идет после main */}
    </div>
  );
};

