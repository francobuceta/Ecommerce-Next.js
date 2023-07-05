import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full h-[600px] bg-custome-secondary pt-10">
            <div className="flex justify-center items-center gap-5 p-12 bg-[#BAFF29] rounded-l-3xl ml-20 h-[500px]">
                
                <div className="flex flex-col w-[40%] gap-20">
                    <p className="text-xl text-custome-secondary">THE <br /> NEXT GEN <br /> TECH</p>
                    <button className="btn btn-active bg-custome-secondary text-xl text-white w-40 h-10">
                        Ingresar aquí
                    </button>
                </div>

                <div>
                    <Image
                        src="/img/headphones3.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="Headphone"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;