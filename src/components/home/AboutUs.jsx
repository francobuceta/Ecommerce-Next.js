const AboutUs = () => {
  return (
    <section className="mt-16 sm:mt-32">
      <h2 className="font-main font-bold text-3xl sm:text-5xl mb-10 text-center text-white">
        QUIENES <span className="text-custome-primary">SOMOS</span>
      </h2>

      <div className="px-10 sm:px-32 flex flex-col justify-center gap-6">
        <p className="text-white text-xl">
          En Cyber Cube, somos apasionados por brindarte la{" "}
          <span className="text-custome-primary">
            mejor experiencia en tecnología
          </span>{" "}
          para tu mundo digital. Nos especializamos en ofrecerte una amplia gama
          de componentes para PC, desde teclados y mouses de alta precisión
          hasta audio inmersivo, auriculares de calidad, sillas de escritorio
          ergonómicas y más. <br />
        </p>
        <p className="text-white text-xl">
          Nos enorgullece ofrecer productos de{" "}
          <span className="text-custome-primary">primera calidad</span> que
          combinan un diseño moderno y elegante con un rendimiento excepcional.
          Nuestro objetivo es proporcionarte las herramientas y accesorios
          perfectos para{" "}
          <span className="text-custome-primary">
            mejorar tu experiencia de juego, trabajo y entretenimiento
          </span>{" "}
          en tu PC. <br />
        </p>
        <p className="text-white text-xl">
          Nos esforzamos por brindarte una{" "}
          <span className="text-custome-primary">
            atención al cliente excepcional
          </span>
          . Nuestro equipo está aquí para responder todas tus preguntas,
          asesorarte en tus decisiones de compra y garantizar que encuentres los
          productos adecuados para tus necesidades. <br />
          Ofrecemos productos de{" "}
          <span className="text-custome-primary">
            marcas reconocidas y confiables
          </span>{" "}
          que cumplen con nuestros estándares de calidad. <br />
          Únete a la comunidad de entusiastas de la tecnología y experimenta un
          rendimiento sin igual con los productos de Cyber Cube.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
