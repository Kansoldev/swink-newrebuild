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

const products = [
  {
    title: "Swink ID",
    description: "Your digital passport across the entire Swink ecosystem",
    image: "/product-2.png",
    tags: ["Multiple voting models", "Verifiable receipts", "Instant results"],
  },
  {
    title: "Swink Vote",
    description: "Run elections that are transparent and verifiable",
    image: "/product-1.png",
    tags: ["Multiple voting models", "Verifiable receipts", "Instant results"],
  },
  {
    title: "Swink Pay",
    description: "Send and receive money with ease using simple Swink IDs",
    image: "/product-1.png",
    tags: ["Instant transfers", "Low fees", "Global reach"],
  },
  {
    title: "Swink Scan",
    description:
      "Transparency at your fingertips - explore the Swink Ecosystem",
    image: "/product-1.png",
    tags: ["Audit elections", "Track payments", "Public records"],
  },
];

const groups = [
  {
    title: "Communities",
    description: "Student unions, local groups",
    image: "/community.png",
  },
  {
    title: "Organizations",
    description: "DAOs, NGOs, Companies",
    image: "/organizations.png",
  },
  {
    title: "Nations",
    description: "Civic Institutions, Governments",
    image: "/nations.png",
  },
  {
    title: "Individuals",
    description: "Everyday people",
    image: "/people.png",
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
        <div className="container mx-auto px-6 md:px-0">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
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

      <section>
        <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4">
          Core Products
        </h2>

        <div className="container mx-auto px-6">
          {products.map((product, index) => (
            <article
              key={index}
              className={`flex flex-col lg:flex-row justify-between bg-white mt-10 rounded-3xl p-6 ${
                index % 2 !== 0 ? "lg:gap-12" : ""
              } `}
            >
              <div
                className={`${
                  index % 2 !== 0 ? "order-1 lg:order-2" : "order-2 lg:order-1"
                } mt-7 lg:mt-0 flex-1`}
              >
                <h3 className="text-4xl font-bold mt-8">{product.title}</h3>
                <p className="mt-5 text-lg">{product.description}</p>
                <div className="tags flex flex-wrap gap-4 mt-5">
                  {product.tags.map((tag, id) => (
                    <span
                      key={id}
                      className="bg-gray-200 p-3 rounded-2xl text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className={`${
                    index === 1 || index === 2 ? "bg-[#bbb3c7]" : "bg-blue-600"
                  } text-white text-lg font-light rounded-full mt-14 px-10 py-3`}
                >
                  {index === 1 || index === 2 ? "Coming Soon" : "Chat with us"}
                </button>
              </div>

              <div
                className={`relative min-h-[250px] min-[500px]:min-h-[440px] lg:w-[300px] lg:min-h-[300px] ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={product.image}
                  className="lg:mx-auto object-cover"
                  fill
                  alt=""
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4">
            Swink is for everyone who needs trust
          </h2>

          <div className="flex flex-col md:flex-row justify-around gap-4 lg:gap-7 my-10">
            {groups.map((group, index) => (
              <div key={index} className="flex-1">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src={group.image}
                    alt=""
                    className="object-cover w-full h-full"
                    width={400}
                    height={400}
                  />
                </div>

                <div>
                  <h3 className="text-2xl mt-5 font-bold">{group.title}</h3>
                  <p className="mt-2">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
