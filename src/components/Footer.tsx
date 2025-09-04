import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between lg:gap-10">
          <div className="w-[1000px] max-w-full h-[300px] relative">
            <Image
              src="/footer-logo.svg"
              className="object-contain"
              alt=""
              fill
            />
          </div>

          <div className="copyright-area text-center lg:text-left mb-10 xl:mb-3">
            <div className="flex flex-col justify-center gap-6 font-semibold">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>

            <div className="social-profiles flex mt-8 gap-3">
              <a
                href="https://x.com/swinkprotocol"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-white p-3 rounded-xl flex items-center justify-center">
                  <Image src="/x.svg" width={25} height={25} alt="" />
                </div>
              </a>

              <a
                href="https://t.me/swinkprotocol"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-white p-3 rounded-xl flex items-center justify-center">
                  <Image src="/telegram.svg" width={25} height={25} alt="" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/swinkprotocol"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-white p-3 rounded-xl flex items-center justify-center">
                  <Image src="/linkedin.svg" width={25} height={25} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-medium">
          Copyright &copy; Swink {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
