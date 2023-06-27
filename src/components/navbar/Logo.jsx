import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex-1">
            <Link href="/">
                <Image
                    src="/img/logo-desktop.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Picture of the author"
                    className="w-[250px] h-auto hidden sm:block"
                />
                <Image
                    src="/img/logo-mobile.png"
                    width={250}
                    height={109}
                    alt="Picture of the author"
                    className="block sm:hidden"
                />
            </Link>
        </div>
    );
};

export default Logo;
