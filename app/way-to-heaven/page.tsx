import type { Metadata } from "next";
import { DecisionForm } from "@/components/DecisionForm";

export const metadata: Metadata = {
  title: "Way to Heaven",
  description:
    "How to get to Heaven. The gospel in four steps: realize you are a sinner, the penalty for sin, Jesus paid the penalty, repent and receive Christ. Liberty Baptist Church, Pine Bluff AR.",
};

export default function WayToHeavenPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Page title */}
        <h1 className="font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          Heaven?
        </h1>

        <h2 className="mt-8 font-heading text-xl font-bold text-navy-900 sm:text-2xl">
          How to get to Heaven from Arkansas (or from wherever you are)
        </h2>

        <p className="mt-4 text-navy-800 leading-relaxed">
          More important than living in Arkansas is where you will live forever. Have you ever taken a trip and not known how to get to your destination? Just as you would look at a map of Arkansas to find your way, so you must look at the Bible to find your way to Heaven. The Bible says, &ldquo;Narrow is the way, which leadeth unto life, and few there be that find it&rdquo; (Matt. 7:14). Jesus said, &ldquo;I am the way, the truth, and the life: no man cometh unto the Father, but by me&rdquo; (John 14:6). Jesus is the only way to Heaven and He gave these directions on how to get there.
        </p>

        {/* Step 1 */}
        <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
          1. Realize you are a sinner.
        </h3>
        <p className="mt-2 text-navy-800 leading-relaxed">
          No matter where you are physically, everyone starts at the same place spiritually. All are sinners. &ldquo;For all have sinned and come short of the glory of God.&rdquo; (Romans 3:23). Man comes short of heaven (the glory of God) because of sin!
        </p>

        {/* Step 2 */}
        <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
          2. Realize there is a penalty for your sin.
        </h3>
        <p className="mt-2 text-navy-800 leading-relaxed">
          Not only does sin keep you out of Heaven, but it also condemns you to Hell. Romans 6:23 says, &ldquo;For the wages of sin is death…&rdquo; Sin brings both physical and spiritual death. &ldquo;And death and hell were cast into the lake of fire. This is the second death.&rdquo; (Rev. 20:14)
        </p>

        {/* Step 3 */}
        <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
          3. Realize Jesus paid the penalty.
        </h3>
        <p className="mt-2 text-navy-800 leading-relaxed">
          Jesus Christ&apos;s death, burial, and resurrection provided a way for you to go to heaven. &ldquo;But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.&rdquo; (Romans 5:8). Since Jesus was the only One who could pay for our sin, He is the only Way to Heaven.
        </p>

        {/* Step 4 */}
        <h3 className="mt-8 font-heading text-lg font-bold text-navy-900">
          4. Repent of your sin and receive Jesus as your Savior.
        </h3>
        <p className="mt-2 text-navy-800 leading-relaxed">
          The final part of Jesus&apos; directions is to repent and receive Him. Acts 20:21 says we should have &ldquo;repentance toward God, and faith toward our Lord Jesus Christ.&rdquo; In order to go to Heaven from Arkansas you must accept Christ by calling on Him in prayer. He tells us in Romans 10:13, &ldquo;For whosoever shall call upon the name of the Lord shall be saved.&rdquo; Follow Christ&apos;s directions by praying in faith the following prayer, or one similar to it, to receive Him now:
        </p>

        {/* Sample prayer */}
        <blockquote className="mt-6 border-l-4 border-navy-600 bg-navy-50/50 pl-5 pr-4 py-4 italic text-navy-900">
          Dear Lord Jesus, I know that I am a sinner, please forgive me of my sin, and take me to Heaven when I die. I believe that you died and rose again for me. I am trusting you completely and nothing I can do. Thank you Jesus! Amen.
        </blockquote>

        <p className="mt-6 text-navy-800 leading-relaxed">
          You&apos;ll never regret that decision! If you have just trusted Christ, we would love to know about your decision and give you a Bible and some other materials to help you learn more about that new relationship! Give us a call at <a href="tel:8708795415" className="text-navy-600 underline hover:text-navy-800">870.879.5415</a> and let us know today!
        </p>

        {/* Decision form */}
        <section className="mt-14 rounded-xl border-2 border-navy-200 bg-navy-50/50 p-6 sm:p-8" aria-label="Let us know about your decision">
          <h2 className="font-heading text-2xl font-bold text-navy-900">
            Made a decision? Let us know
          </h2>
          <p className="mt-2 text-navy-800 text-sm sm:text-base">
            If you trusted Christ as your Savior, we&apos;d love to hear from you and send you a Bible and materials to help you grow.
          </p>
          <DecisionForm />
        </section>
      </article>
    </div>
  );
}
