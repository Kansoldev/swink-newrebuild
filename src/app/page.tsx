import Image from "next/image";

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
    </main>
  );
}
