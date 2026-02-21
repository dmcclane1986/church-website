import type { Metadata } from "next";
import Link from "next/link";
import { PlanYourVisitAccordion } from "@/components/PlanYourVisitAccordion";

export const metadata: Metadata = {
  title: "Statement of Faith",
  description:
    "What Liberty Baptist Church believes: the Bible, the Godhead, salvation, the church, and more. Independent Baptist, KJV, Pine Bluff AR.",
};

const accordionItems = [
  {
    question: "Bible",
    content: (
      <p>
        We believe the Holy Scriptures of the Old and New Testament to be the verbally and plenary inspired Word of God. We further believe that the Holy Scriptures have been completely and perfectly preserved in the King James Version of the Bible translated from the Masoretic text of the Old Testament and Received text of the New Testament. We believe that the sixty-six (66) books of the Old and New Testament are the complete and divine revelation of God to man (2 Tim. 3:16–17; 2 Pet. 1:20–21).
      </p>
    ),
  },
  {
    question: "The Godhead",
    content: (
      <p>
        We believe in one Triune God, eternally existing in three persons—Father, Son and Holy Ghost—each co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections (Deut. 6:4; Matt. 28:19; 2 Cor. 13:14; John 14:10, 26).
      </p>
    ),
  },
  {
    question: "The Person and Work of Jesus Christ",
    content: (
      <p>
        We believe that Jesus Christ, the eternal Son of God, became man without ceasing to be God, having been conceived by the Holy Spirit and born of the virgin Mary, in order that He might reveal God and redeem sinful men (Isa. 7:14; 9:16; Luke 1:35; John 1:1–2, 14; 2 Cor. 5:19–21; Gal. 4:4–5; Phil. 2:5–8).
      </p>
    ),
  },
  {
    question: "The Person and Work of the Holy Spirit",
    content: (
      <p>
        We believe that the Holy Spirit is a person who convicts the world of sin, of righteousness, and of judgment; and, that He is the supernatural agent in regeneration, baptizing all believers into the Body of Christ, indwelling them and sealing them unto the day of redemption (John 16:8–11; Rom. 8:9; 1 Cor. 12:12–14; 2 Cor. 3:6; Eph. 1:13–14). We believe that the sign gifts of the Holy Spirit, such as speaking in tongues and the gift of healing, were temporary. Speaking in tongues was never the common or necessary sign of the baptism or filling of the Holy Spirit.
      </p>
    ),
  },
  {
    question: "Man",
    content: (
      <p>
        We believe that man was created in the image and likeness of God, but, that in Adam’s sin, the human race fell, inherited a sinful nature, and became alienated from God; and, that man is totally depraved, and, of himself, utterly unable to remedy his lost condition (Gen. 1:26–27; Rom. 3:22–23; 5:12; 6:23; Eph. 2:1–3; 4:17–19).
      </p>
    ),
  },
  {
    question: "Salvation",
    content: (
      <p>
        We believe that the salvation of sinners is wholly of grace, and that Jesus Christ is the only way of salvation. The condition of salvation is repentance toward God and faith in Jesus Christ in His finished work on the cross of Calvary. We believe that Jesus Christ paid the sin debt of all mankind and is offered to all mankind who will repent and believe, therefore rejecting the doctrine of Calvinism. We believe that salvation is the eternal gift of God and thereby guarantees all born-again believers the promise of eternal salvation (Romans 3:24; Ephesians 2:8, 9; Acts 20:21; Titus 3:5).
      </p>
    ),
  },
  {
    question: "Baptism",
    content: (
      <p>
        We believe that water baptism by immersion is not needed for salvation in any way and is a public expression of the inward change of salvation. We believe that baptism symbolically represents our identification with the death, burial and resurrection of Jesus Christ (Matthew 3:16; 28:19, 20; Acts 8:12).
      </p>
    ),
  },
  {
    question: "The Church",
    content: (
      <p>
        We believe in the local, visible church of which Jesus Christ is the head—a congregation of baptized believers, practicing New Testament principles, believing its doctrine, observing its ordinances of baptism and the Lord’s Supper, and exercising its autonomy.
      </p>
    ),
  },
  {
    question: "Separation",
    content: (
      <p>
        We believe that all the saved should live in such a manner as not to bring reproach upon their Savior; and, that separation from all religious apostasy, all worldly and sinful pleasures, practices and associations is commanded of God (Rom. 12:1–2; 2 Cor. 6:14–7:1; 2 Tim. 3:1–5; 1 John 2:15–17; 2 John 9–11).
      </p>
    ),
  },
  {
    question: "Christ’s Return",
    content: (
      <p>
        We believe in the imminent, pretribulation, premillennial bodily return of Jesus Christ in the air, at which time He will rapture His church out of the earth. We believe that immediately following the rapture will be the seven-year Tribulation period, after which, the Lord will personally and visibly return with His saints, to establish His earthly Messianic Kingdom, which was promised to the nation of Israel (Psa. 89:3–4; Dan. 2:31–45; Zech. 14:4–11; 1 Thess. 1:10; 1 Thess. 4:13–18; Titus 2:13; Rev. 3:10; 19:11–26; 20:1–6).
      </p>
    ),
  },
  {
    question: "The Eternal State of Man",
    content: (
      <>
        <p>
          We believe in the bodily resurrection of all men; the saved to eternal life, and the unsaved to judgment and everlasting punishment (Matt. 25:46; John 5:28, 29; 11:25–26; Rev. 20:5–6, 12–13).
        </p>
        <p>
          We believe that the souls of the redeemed are, at death, absent from the body and present with the Lord, where in conscious bliss they await the first resurrection, when spirit, soul and body are reunited to be glorified forever with the Lord (Luke 23:43; 2 Cor. 5:8; Phil. 1:23; 3:21; 1 Thess. 4:16–17; Rev. 20:4–6).
        </p>
        <p>
          We believe that the souls of unbelievers remain, after death, in conscious punishment until the second resurrection, when with soul and body reunited they shall appear at the Great White Throne Judgment, and shall be cast into the Lake of Fire, not to be annihilated, but to suffer everlasting, conscious punishment and torment (Matt. 25:41–46; Mark 9:43–48; Luke 16:19–26; 2 Thess. 1:7–9; Jude 6–7; Rev. 20:11–15).
        </p>
      </>
    ),
  },
];

export default function StatementOfFaithPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          Statement of Faith
        </h1>
        <p className="mt-2 text-navy-800">
          What we believe at Liberty Baptist Church.
        </p>

        <h2 className="mt-10 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
          We believe:
        </h2>
        <div className="mt-6">
          <PlanYourVisitAccordion items={accordionItems} />
        </div>

        <p className="mt-10">
          <Link
            href="/plan-your-visit"
            className="inline-block rounded-full bg-navy-600 px-5 py-2 font-semibold text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
          >
            Plan a visit
          </Link>
        </p>

        
      </div>
    </div>
  );
}
