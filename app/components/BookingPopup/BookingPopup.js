"use client";
import "./BookingPopup.css";

const BookingPopup = ({ onClose, isVisible }) => {
  return (
    <>
      <div
        className={`booking-popup-overlay ${isVisible ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`booking-popup ${isVisible ? "active" : ""}`}>
        <div className="booking-popup-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Бронирование</h2>
          <form>
            <div className="form-group">
              <label htmlFor="cottage-type">Желаемый коттедж</label>
              <select
                id="cottage-type"
                name="cottage_type"
                className="form-control"
              >
                <option value="riviera">Ривьера</option>
                {/* Другие опции */}
              </select>
            </div>
            <div className="form-group-date">
              <input
                type="text"
                id="arrival-date"
                name="arrival_date"
                className="form-control"
                placeholder="Дата заезда"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.placeholder = "";
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = "text";
                    e.target.placeholder = "Дата заезда";
                  }
                }}
              />
            </div>
            <div className="form-group-date">
              <input
                type="text"
                id="departure-date"
                name="departure_date"
                className="form-control"
                placeholder="Дата выезда"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.placeholder = "";
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = "text";
                    e.target.placeholder = "Дата выезда";
                  }
                }}
              />
            </div>
            <div className="form-group quantity-selector">
              <label className="quantity-label">Взрослые</label>
              <div className="quantity-controls">
                <button type="button" className="quantity-minus">
                  -
                </button>
                <input
                  type="text"
                  id="adults"
                  name="adults"
                  className="quantity-input"
                  readOnly
                  value="1" // Здесь должно быть состояние из вашего компонента
                />
                <button type="button" className="quantity-plus">
                  +
                </button>
              </div>
            </div>

            <div className="form-group quantity-selector">
              <label className="quantity-label">Дети</label>
              <div className="quantity-controls">
                <button type="button" className="quantity-minus">
                  -
                </button>
                <input
                  type="text"
                  id="children"
                  name="children"
                  className="quantity-input"
                  readOnly
                  value="0" // И здесь состояние из вашего компонента
                />
                <button type="button" className="quantity-plus">
                  +
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Ваш телефон</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-button">
              Забронировать
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingPopup;
