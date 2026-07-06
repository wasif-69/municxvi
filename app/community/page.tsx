import fs from "fs";
import path from "path";
import Image from "next/image";

const seniorPath = path.join(process.cwd(), "public", "Senior");
const juniorPath = path.join(process.cwd(), "public", "Junior");

const seniorCommittees = fs
    .readdirSync(seniorPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]));

const juniorCommittees = fs
    .readdirSync(juniorPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => Number(a.split(".")[0]) - Number(b.split(".")[0]));

  
const Committee = () => {

    
    console.log(seniorCommittees)  
    console.log(juniorCommittees)
    return (
        <section
            id="committees"
            className="bg-[#061222] py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.45em] text-[#C9A227]">
                        Committees
                    </p>

                    <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
                        Explore Our Committees
                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />


                </div>

                {/* Senior Committees */}
                <div className="mt-24">

                    <div className="mb-10 flex items-center gap-5">
                        <h3 className="text-3xl font-semibold text-white">
                            Senior Committees
                        </h3>

                        <div className="h-px flex-1 bg-[#C9A227]/20" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {seniorCommittees.map((file) => (
                            <div
                                key={file}
                                className="
          group
          overflow-hidden
          rounded-2xl
          border border-[#C9A227]/15
          bg-white/5
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#C9A227]/40
        "
                            >
                                <Image
                                    src={`/Senior/${file}`}
                                    alt="Senior Committee"
                                    width={700}
                                    height={900}
                                    className="
            w-full
            h-auto
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
                                />
                                <div>Name:{file}</div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Junior Committees */}
                <div className="mt-28">

                    <div className="mb-10 flex items-center gap-5">
                        <h3 className="text-3xl font-semibold text-white">
                            Junior Committees
                        </h3>

                        <div className="h-px flex-1 bg-[#C9A227]/20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {juniorCommittees.map((file) => (
                            <div
                                key={file}
                                className="
          group
          overflow-hidden
          rounded-2xl
          border border-[#C9A227]/15
          bg-white/5
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#C9A227]/40
        "
                            >
                                <Image
                                    src={`/Junior/${file}`}
                                    alt="Junior Committee"
                                    width={700}
                                    height={900}
                                    className="
            w-full
            h-auto
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
                                />
                                <div>Name:{file}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Committee;