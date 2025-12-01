import React from "react";

export const Services = () => {
  const [selectedId, setSelectedId] = React.useState(1);
  const filterServs = [
    {
      id: 1,
      title: "Стрижка",
      details: [
        {
          id: 1,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
        {
          id: 2,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
        {
          id: 3,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
        {
          id: 4,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
        {
          id: 5,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
      ],
    },
    {
      id: 2,
      title: "Оформление",
      details: [
        {
          id: 1,
          title: "Оформление",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 990,
        },
        {
          id: 2,
          title: "Питание",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 3,
          title: "Модельная",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 4,
          title: "Модельная",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 5,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
      ],
    },
    {
      id: 3,
      title: "Уход",
      details: [
        {
          id: 1,
          title: "Увлажнение",
          descr:
            "Нанесение специального крема для глубокого увлажнения и питания.",
          price: 890,
        },
        {
          id: 2,
          title: "Питание",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 3,
          title: "Модельная",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 4,
          title: "Модельная",
          descr:
            "Стильное и аккуратное оформление, подчеркивающее вашу индивидуальность",
          price: 600,
        },
        {
          id: 5,
          title: "Модельная",
          descr: "Стильная и актуальная, подчеркивающая индивидуальность.",
          price: 600,
        },
      ],
    },
  ];

  const selectedService = filterServs.find(
    (service) => service.id === selectedId
  );
  return (
    <div id="services">
      <div className="container">
        <div className="services">
          <h4>Услуги</h4>
          <div className="services-menu">
            <div className="services-btns">
              {filterServs.map((service) => (
                <h2
                className="service-btn"
                  key={service.id}
                  onClick={() => setSelectedId(service.id)}
                  style={{
                    color: selectedId === service.id ? "white" : "rgba(65, 65, 65, 1)",
                  }}
                >
                  {service.title}
                </h2>
              ))}
            </div>

            <div className="services-details">
              {selectedService && (
                <div className="services-list">
                  {selectedService.details.map((detail) => (
                    <div key={detail.id} className="service">
                      <p className="service-numb">0{detail.id}</p>
                      <h3 className="service-title">[{detail.title}]</h3>
                      <p className="service-desc">{detail.descr}</p>
                      <span className="service-price">{detail.price} С.</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="btn serv-btn">Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};
