import { questions } from "@/utils/Faqs";

const Faqs = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <h2 className="font-main font-bold text-3xl sm:text-5xl mb-10 text-center text-white">
        PREGUNTAS <span className="text-custome-primary">FRECUENTES</span>
      </h2>

      <div className="px-10 sm:px-20 join join-vertical w-full text-white">
        {questions.map((elem) => (
          <div
            className="collapse collapse-arrow join-item border border-custome-primary"
            key={elem.id}
          >
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
