import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex-1">
      <Link href="/">
        <Image
          src="/img/logo-desktop2.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="Logo Cyber Cube Desktop"
          className="w-[250px] h-auto hidden sm:block"
        />
        <Image
          src="/img/logo-mobile3.png"
          width={250}
          height={109}
          sizes="100vw"
          alt="Logo Cyber Cube Mobile"
          className="w-[90px] h-[90px] block sm:hidden"
        />
      </Link>
    </div>
  );
};

export default Logo;
