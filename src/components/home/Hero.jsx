import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full h-[600px]" style={{ backgroundImage: "url('/img/bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "#000000"}}>
            <div className="flex justify-center items-center gap-5">
                <div>
                    <Image
                        src="/img/headphone.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Logo Cyber Cube Desktop"
                        className="w-[564px] h-[auto]"
                    />
                </div>
                <div className="flex flex-col items-center w-[50%]">
                    <p className="text-xl text-white">Somos Cyber Cube</p>
                    <p className="text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui ullam ad velit?<br />
                        Suscipit laboriosam beatae possimus perspiciatis! Maxime, nulla assumenda?<br />
                        D fugit quod autem tempora. Nesciunt, nam consequuntur vero magnam, ratione rerum hic iusto quibusdam, err
                    </p>
                    <button className="btn btn-active bg-white text-xl text-black">
                        Ingresar aquí
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;