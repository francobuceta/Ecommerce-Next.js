const questions = [
  {
    title: "¿Cómo puedo contactar al servicio de atención al cliente?",
    text: "Estamos disponibles las 24hs del día por cualquier consulta, a través de nuestras redes sociales.",
  },
  {
    title: "¿Cuáles son los métodos de pago aceptados?",
    text: "Todas las tarjetas.",
  },
  {
    title: "¿Se realizan envíos a domicilio?",
    text: "Una vez realizada la compra te llegará un mail a tu correo con los pasos a seguir para retirar la compra o enviarla a tu domicilio.",
  },
  {
    title:
      "¿Cuánto tiempo tarda en llegar mi pedido y cuál es el costo de envío?",
    text: "Dentro de CABA, 3 días y el envío es gratis.",
    text2: "Para provincia de Bs. As., 6 días y el costo es de $1.100.",
    text3: "Para otras provincias,  10 días y el costo es de $2.500.",
  },
];

const Faqs = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <h2 className="font-main font-bold text-3xl sm:text-5xl mb-10 text-center text-white">
        PREGUNTAS <span className="text-custome-primary">FRECUENTES</span>
      </h2>

      <div className="px-10 sm:px-20 join join-vertical w-full text-white">
        {questions.map((elem) => (
          <div className="collapse collapse-arrow join-item border border-custome-primary">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              {elem.title}
            </div>
            <div className="collapse-content">
              <p>{elem.text}</p>
              {elem.text2 && (
                <>
                  <p>{elem.text2}</p>
                  <p>{elem.text2}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
