import Image from "next/image";

const features = [
  {
    heading: "Tamper-proof elections",
    desc: "With instant verifiable results",
    icon: "/politics-vote.png",
  },
  {
    heading: "Simple payments",
    desc: "Powered by Swink ID's, not complex wallet strings",
    icon: "/payment-recieve.png",
  },
  {
    heading: "One digital identity",
    desc: "For voting, finance, and transparency",
    icon: "/id-verified.png",
  },
];

export default function Page() {
  return (
    <main>
      <section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mx-auto text-center pt-20 md:3/4">
            <h1 className="text-[3.2rem] min-[640px]:text-[4.5rem] lg:text-6xl leading-tight font-extrabold text-[#130724]">
              Unifying Voting & Finance
            </h1>

            <p className="text-[#130724] text-xl my-5">
              A frictionless ecosystem designed to make trustless voting{" "}
              <br className="hidden md:block" /> and financial freedom
              accessible to anyone
            </p>

            <button className="flex items-center gap-5 py-1 pl-1 pr-8 bg-[#0E021D] text-white text-xl rounded-2xl">
              <Image src="/icon.png" width={50} height={50} alt="" /> Speak to
              us
            </button>

            <div className="relative w-[250px] h-[250px] mx-auto mt-10 mb-14">
              <Image
                src={"/hero-image.png"}
                alt="Image showing unified voting"
                className="object-contain"
                fill
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-full w-screen h-[200px]">
          <Image
            src={"/features.png"}
            className="object-cover"
            alt="Image showing swink features"
            fill
          />
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 md:px-3 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Swink makes trust visible
            </h2>

            <p className="lg:w-1/2 mx-auto text-lg">
              Built on Base L2, Swink brings secure, auditable, and
              human-readable governance together with simple, borderless
              payments.
            </p>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row gap-10 md:gap-7 xl:gap-0 lg:justify-around my-10">
            {features.map((feature, index) => (
              <article
                key={index}
                className="bg-[#e5dcef] text-center px-4 pt-5 md:pt-9 pb-14 rounded-2xl lg:w-[30%]"
              >
                <div className="w-[120px] h-[155px] bg-[#D9C1F3] mx-auto rounded-full p-2">
                  <div className="flex items-center justify-center w-[90px] h-[90px] bg-gradient-to-b from-[#a247ff73] to-[#c893ffa6] mx-auto rounded-full">
                    <Image src={feature.icon} width={60} height={60} alt="" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl mt-6 font-bold">
                  {feature.heading}
                </h3>

                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
