import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto mb-12 mt-5 p-4">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              width={120}
              height={120}
              className="object-contain"
              alt="Swink logo"
            />
          </Link>
        </div>

        <nav className="flex items-center md:gap-5">
          <Link href="#" className="md:mr-7 font-medium">
            Swink's Products
          </Link>

          <a href="#">
            <Image
              src="/mail.png"
              width={30}
              height={30}
              className="hidden md:block object-cover"
              alt=""
            />
          </a>

          <a href="#">
            <Image
              src="/twitter.png"
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
