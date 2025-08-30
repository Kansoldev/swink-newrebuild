import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-52">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Image src="/footer-logo.png" width={700} height={700} alt="" />

          <div className="copyright-area">
            <div className="mt-32">
              <div className="mt-32 flex items-center justify-center gap-2 font-semibold">
                <span className="uppercase" style={{ letterSpacing: "2px" }}>
                  Trusted by
                </span>
                <img src="/Web3Nigeria.png" alt="" />
              </div>

              <span className="block mt-4">
                Copyright &copy; Swink {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
