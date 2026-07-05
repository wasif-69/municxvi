const seniorCommittees = Array.from({ length: 9 });
const juniorCommittees = Array.from({ length: 2 });

const Committee = () => {
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

                    <div className="flex items-center gap-5 mb-10">

                        <h3 className="text-3xl font-semibold text-white">
                            Senior Committees
                        </h3>

                        <div className="h-px flex-1 bg-[#C9A227]/20" />

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {seniorCommittees.map((_, index) => (
                            <div
                                key={index}
                                className="
                  group
                  aspect-4/5
                  rounded-2xl
                  border
                  border-[#C9A227]/15
                  bg-white/3
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C9A227]/40
                "
                            >

                                {/* Placeholder */}
                                <div className="flex h-full items-center justify-center">

                                    <div className="text-center">

                                        <div className="mx-auto h-16 w-16 rounded-full border border-[#C9A227]/20" />

                                        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-500">
                                            Committee Poster
                                        </p>

                                        <p className="mt-2 text-xs text-slate-600">
                                            {/* Coming Soon */}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Junior Committees */}
                <div className="mt-28">

                    <div className="flex items-center gap-5 mb-10">

                        <h3 className="text-3xl font-semibold text-white">
                            Junior Committees
                        </h3>

                        <div className="h-px flex-1 bg-[#C9A227]/20" />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {juniorCommittees.map((_, index) => (
                            <div
                                key={index}
                                className="
                  group
                  aspect-4/5
                  rounded-2xl
                  border
                  border-[#C9A227]/15
                  bg-white/3
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C9A227]/40
                "
                            >

                                <div className="flex h-full items-center justify-center">

                                    <div className="text-center">

                                        <div className="mx-auto h-16 w-16 rounded-full border border-[#C9A227]/20" />

                                        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-slate-500">
                                            Committee Poster
                                        </p>

                                        <p className="mt-2 text-xs text-slate-600">
                                            {/* Coming Soon */}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Committee;