import Image from "next/image";
import "./Riviera.css";
import BookingPopup from "@/app/components/BookingPopup/BookingPopup"; // Путь к вашему CSS файлу

const Riviera = () => {
  return (
    <>
      <div className="container">
        <div className="villa-info">
          <div className="villa-info-size">
            <div className="villa-info-container">
              <h1 className="villa-title">Ривьера</h1>
              <div className="villa-specs">
                <span>77 м²</span>
                <span>2 комнаты</span>
              </div>
            </div>

            <p className="villa-description">
              Функциональная, современная, компактная вилла для спокойного
              отдыха небольшой компании
            </p>
          </div>

          <div className="villa-tags">
            <span>Умный дом</span>
            <span>Кондиционер</span>
            <span>Сейф</span>
            <span>Зона барбекю</span>
            <span>Просторная кухня-гостиная</span>
            <span>2 ТВ</span>
          </div>
          <div className="villa-description-container">
            <div className="villa-description-about">
              <div>
                <p className="villa-text">
                  Продуманная планировка помещений позволяет эффективно
                  использовать каждый метр в доме, не создавая при этом ощущения
                  тесноты...
                </p>

                <p className="villa-text">
                  Дом выдержан в современном стиле. Панорамные окна «продлевают»
                  пространство благодаря свету и отсутствию глухих перегородок:
                  помещение становится шире и уютнее. Из окон открывается вид на
                  придомовую территорию, который скрасит любой вечер в компании
                  семьи или друзей. В таком доме хочется проводить время, и не
                  важно – одному или с близкими.
                </p>
              </div>
              <div className="buttons-container">
                <button className="button-book">Забронировать</button>
                <button className="button-tour">Виртуальный тур</button>
              </div>
            </div>
            <div className="villa-image">
              <Image
                src="/images/riviera.png"
                alt="Вилла Ривьера"
                width={550}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      <BookingPopup />
    </>
  );
};

export default Riviera;
