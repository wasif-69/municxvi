const About = () => {
    return (
        <section
            id="about"
            className="relative bg-[#061222] py-28 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[180px]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6">

                {/* Heading */}
                <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.45em] text-[#C9A227]">
                        About MUNIC XVI
                    </p>

                    <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
                        Where Future Diplomats Meet
                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />

                </div>

                {/* Introduction */}
                <div className="mt-24">

                    <div className="max-w-5xl">

                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Introduction
                        </h3>

                        <div className="mt-4 h-px w-16 bg-[#C9A227]" />

                        <div className="mt-10 space-y-8 text-base md:text-lg leading-8 md:leading-9 text-slate-400">

                            <p>
                                For eighteen years, MUNIC has empowered students to become leaders in public discourse.
                                As a premier Model United Nations conference at The City School Capital Campus Islamabad,
                                MUNIC 2026 continues to serve as an elite platform for innovation, debate, and collaboration.
                                From July 31st to August 2nd, 2026, the country&apos;s brightest minds will gather in H-8 to engage
                                in high-level diplomacy, master negotiation, and formulate sophisticated solutions to complex
                                global challenges.
                            </p>

                            <p>
                                We are committed to fostering a dynamic environment that inspires critical thinking,
                                leadership, and diverse perspectives. Through rigorous committee debate, we aim to equip
                                students from across Pakistan with essential communication and problem-solving skills,
                                cultivating a generation of changemakers ready to shape tomorrow&apos;s solutions.
                            </p>

                            <div className="pt-4">
                                <h4 className="text-xl font-semibold text-white">
                                    Why MUNIC?
                                </h4>

                                <div className="mt-3 h-px w-10 bg-[#C9A227]" />

                                <p className="mt-6">
                                    MUNIC is driven by a host team with an exceptional background and a highly skilled
                                    competitive edge on the circuit. Our academic panel features some of the most renowned
                                    judges and coaches in Pakistan. Backed by a deeply dedicated Executive Council, our
                                    directors ensure rigorous, high-level debate that challenges delegates to their
                                    intellectual limits.
                                </p>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-xl font-semibold text-white">
                                    Innovation & National Scale
                                </h4>

                                <div className="mt-3 h-px w-10 bg-[#C9A227]" />

                                <p className="mt-6">
                                    Every year, MUNIC welcomes a massive wave of delegate attendees, bringing together the
                                    most competitive teams from all across Pakistan. Backed by sponsorships from major
                                    corporate brands, we elevate the conference experience to world-class standards. Our
                                    high-stakes academic sessions are matched by an unforgettable social experience,
                                    featuring a massive concert at the end of Day 2, and a grand Closing Ceremony on
                                    August 2nd.
                                </p>
                            </div>

                            <div className="pt-4">
                                <h4 className="text-xl font-semibold text-white">
                                    A Legacy of Excellence
                                </h4>

                                <div className="mt-3 h-px w-10 bg-[#C9A227]" />

                                <p className="mt-6">
                                    Established in 2008, MUNIC carries forward a multi-disciplinary legacy of excellence
                                    rooted at Capital Campus Islamabad spanning from national debate circuits to premier
                                    STEM Olympiads as well as SPORTS Olympiads. We ensure that our delegates walk away
                                    with sharp leadership skills, diverse perspectives from across the national circuit,
                                    and a lifelong network of peers.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Divider */}
                <div className="my-24 h-px bg-linear-to-r from-transparent via-[#C9A227]/40 to-transparent" />

                {/* Letter */}
                <div>

                    {/* Centered Heading */}
                    <div className="text-center">

                        <p className="uppercase tracking-[0.4em] text-sm text-white/70">
                            Message
                        </p>

                        <h3 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                            Letter from the
                            <span className="block mt-2">
                                Secretary-General
                            </span>
                        </h3>

                        <div className="mx-auto mt-6 h-px w-24 bg-[#C9A227]" />

                    </div>

                    {/* Letter */}
                    <div className="mx-auto mt-16 max-w-4xl space-y-8 text-lg leading-9 text-slate-400">

                        <p>
                            In the name of Allah, the Most Gracious and Merciful,

                        </p>

                        <p>
                            As President of the Debating Society (MUNs), I warmly welcome you
                            all to MUNIC XVI. Ever since I started my debating journey,
                            The City School Capital Campus and it&apos;s Legacy have been
                            admirable in the Model United Nations Circuit of Pakistan.
                            From Participating as a delegate at MUNIC 14 to win an
                            Outstanding Diplomat award to now having the honor to serve
                            as Sec Gen it has been an incredible journey. On the 16th
                            edition we have exciting plans in store and aim to make this
                            year&apos;s conference unmatched by all standards! This event is
                            the culmination of months of hardwork by our directorate
                            and executive body.
                        </p>

                        <p>
                            I always say  &apos;debate is a martial art but with words &apos; and in today&apos;s world we need fighters for peace and hope across the world.
                            I wholeheartedly hope that this occasion becomes a
                            lasting memory of debate, competition and fun for all of you.

                            Godspeed, and see you all there!
                        </p>

                    </div>

                    {/* Signature */}
                    <div className="mx-auto mt-16 max-w-4xl">

                        <div className="h-px w-24 bg-[#C9A227]" />

                        <h4 className="mt-6 text-xl font-semibold text-white">
                            Anas Khursheed
                        </h4>

                        <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#C9A227]">
                            Secretary-General
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;