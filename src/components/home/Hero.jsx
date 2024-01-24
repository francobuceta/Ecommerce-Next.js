import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../buttons/PrimaryButtons";

const Hero = () => {
  return (
    <section className="w-full bg-custome-secondary sm:pt-10">
      <div className="sm:relative flex justify-center items-center gap-5 p-0 sm:p-12 bg-[#BAFF29] sm:rounded-l-3xl sm:ml-20 h-[350px] sm:h-[400px] lg:h-[500px]">
        <div className="relative sm:static flex flex-col items-center sm:items-start w-full sm:w-[40%]">
          <h1 className="absolute text-center sm:text-left text-5xl md:text-6xl lg:text-[6.5rem] leading-[4rem] lg:leading-[6rem] font-bold text-custome-secondary sm:left-20 2xl:left-36 sm:top-12">
            YOUR <br className="hidden sm:block" /> GATEWAY TO <br /> PROGRESS
          </h1>
          <Link href="/products/all">
            <PrimaryButton 
              content={"VER CATÁLOGO"}
              styles={"text-xl text-white bg-custome-secondary w-40 h-10 mt-40 sm:mt-60 md:mt-72 sm:ml-10"}
              fn={undefined}
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <Image
            src="/img/headphones3.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="Headphone"
            priority={true}
            className="w-full h-full xl:w-[900px] xl:h-[auto]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
