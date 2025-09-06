import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto mb-12 mt-5 p-4">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.svg" width={120} height={120} alt="swink logo" />
          </Link>
        </div>

        <nav className="flex items-center md:gap-5">
          <a href="#core" className="md:mr-7 font-medium">
            Swink's Products
          </a>

          <a href="https://x.com/swinkprotocol" target="_blank" rel="noopener">
            <Image
              src="/twitter.svg"
              width={30}
              height={30}
              className="hidden md:block object-cover"
              alt=""
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
