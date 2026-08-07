import { doto } from "../../fonts";

export default function Books() {
  const favouriteBooks = [
    [
      "Feel Good Productivity",
      "Ali Abdaal",
      "https://www.amazon.ca/Feel-Good-Productivity-More-What-Matters/dp/1250865034?crid=2BFLP6P8M1OUP&dib=eyJ2IjoiMSJ9.3zJv5Pn8Vi2RfyaIJCZtCP24h5E19xZJIeKpGP14Citb07vdqoiQxF2SEmtNBuQcpN6FlznIJWa7gBUMpAhRTpi9vnyAv0GUXB4-MFkF716VNRZa_5nlc80Br1tG5wIVbZ_Vw3beE8PsU3ifGlF51q6Tp1-XKxgnn_I4a2QtjFUl50TMV6y0ly4YvepiiapIGPZOIwhCQFQuQsxi0LAZxYCtlnXe407Wu1t6R_2kKu-ecBjoYxx2CHNTN-NY-y7AxZf0aG0rctp1NIbHGF2XXedJQf6cISljcOGHrA-biOw.jUaY-UFlieN5EX9Hz9UTi9UUYdTbORgSKttdY7jpm2Q&dib_tag=se&keywords=Feel+Good+Productivity&qid=1786057375&sprefix=feel+good+productivity%2Caps%2C99&sr=8-1",
    ],
    [
      "The Slight Edge",
      "Jeff Olson",
      "https://www.amazon.ca/Slight-Edge-Turning-Disciplines-Happiness/dp/1626340463?crid=3CY188LO6N2UB&dib=eyJ2IjoiMSJ9.3h4lyy_c54cWU-bKROd1J75iU3KL8x6Ci9ilul6IZQmOv7x4vWNJSy4fZkw4EBbAh1iL11nOl0C-mBwEnew5eBmugEmB0eQ3KRNqGXZpy_TU1KOTaekMNW1mQMWOgkWlmQZc5NWG1cqrHNwgWTAJ_wx5Cr8I1c2RTlqE6xR6ijQ4o2_qL1wn38KewWIfC6uSXby6LliYBTF22EQOB1zkMAgGYBZZ0s_GsT7RdAKFeJUMWQSiiWO6OaNbysVx-gysz1uUvjEGUIKtDlNA7ahFpuD36Vm_WU3Rzvx16nbeyZs.hdBGQdlirEi_FzUW0fxU7WEqBkd1Vh2kGZ3fAwzA64E&dib_tag=se&keywords=The+Slight+Edge&qid=1786057439&sprefix=the+slight+edge%2Caps%2C120&sr=8-1",
    ],
    [
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      "James Clear",
      "https://www.amazon.ca/Atomic-Habits-Proven-Build-Break/dp/0735211299?crid=2B1QS8T9PDBX1&dib=eyJ2IjoiMSJ9.SN-noe4EpN9PPXpEWtjSQIo1IKSFF5uVTgZXsHcqvkwa6AEWwP0ySA2mbMKr7XuUJL-6Jf8dFesV5ThYL4n_9zuIjKdkgm5EjPK0AR0JXRToVqVaU1c3qLsOI9OzcI_3mWUpNLUjMoKmnocbiUmhSb-GGOVDAhF4NW9Ag2T2kT-gq-xQdIELYu9V1AQr-cd9U3Q8btXfDHv6dLbPkjfQ5KRKNbndjXWI5QSPCgH_LLrChViF4x6aAuOeW3Lio3TizKyIBjaG7LKIdVSbPS_23rKdhumziLQ0VIiN7eIbR6I.lrsgo_mB43BE3uAQDZTfFUL7-YvtTFlEpqMlWLlzYL4&dib_tag=se&keywords=Atomic+Habits%3A+An+Easy+%26+Proven+Way+to+Build+Good+Habits+%26+Break+Bad+Ones&qid=1786057467&sprefix=atomic+habits+an+easy+%26+proven+way+to+build+good+habits+%26+break+bad+ones%2Caps%2C115&sr=8-1",
    ],
    [
      "Unfuck Yourself",
      "Gary John Bishop",
      "https://www.amazon.ca/Unfu-Yourself-Your-Head-into/dp/0062803832?crid=2U08443LEPGPM&dib=eyJ2IjoiMSJ9.6jRBHb4WKFDNPaJqqpzdnvVLkVDQgdDA8rtpZ5maGQVbq0UJVxHuc0pmB_s_4OqUjh1v4FKnUNjFKVmn4OmvOPfyYk-bHLOOxSnx24iozx_GIT2oiyl1suow2n-jqPy_Uw3miCsuLM3l89igqqe4yzb773KFzJZprtYrINKuO5hAlsIOZ5RejXP74mGmhMRV5baIdC5D4tAIDibtwPsW1VsdYNStpZ6mZoWsYH4JnXDSIsBm9QF3dS_418ea1ofMCMLq-NZSSsJ7YpqFh_GQHjhqeCrCwfH5TkJEeqcSipA.hK6_0272AK1Lxbx7x4yO1lMCoyBUXJwMi2BEIklT8U4&dib_tag=se&keywords=Unfuck+Yourself&qid=1786057505&sprefix=unfuck+yourself%2Caps%2C128&sr=8-1",
    ],
    [
      "The 4-Hour Workweek",
      "Tim Ferriss",
      "https://www.amazon.ca/4-Hour-Workweek-Expanded-Updated-Cutting-Edge/dp/0307465357?crid=LL2XMVTT2QME&dib=eyJ2IjoiMSJ9.sYIrsTwCP4oEWPGIq3QRDwIDUWnYQ-FjLur4dz1OLIwWoC9iCzyhonauC6SmGyjENogG7Cb0jXltzshwAXvll5-pmi5CcS5mDoQo60Ffr2nx8GKdxnnI9MmXEeaH9bUGrfkqEHrVdVn44z1jQKLsW5hSGVKLB7O30xbwAmp6AnBmiXV4OOVoB0WGZFojoeclWxEkPgzKULYxZycB8ZMSNjBSb_XcC5PCebQidK5uQTV66hICIyPD-9B-fU60BQzdOuu5e2-p_kZ512xMqxp7LRlrofoNtur58EJSOx7QKh8.dx3EHjYNELSxqrfP_AX083yZ7ahwHj4dzPadIRymhjM&dib_tag=se&keywords=The+4-Hour+Workweek&qid=1786057536&sprefix=the+4-hour+workweek%2Caps%2C112&sr=8-1",
    ],
    [
      "Million Dollar Weekend",
      "Noah Kagan",
      "https://www.amazon.ca/Million-Dollar-Weekend-Surprisingly-7-Figure/dp/1529146186?crid=34KNP0CDVJNXE&dib=eyJ2IjoiMSJ9.4XUc1R_0dSv1suIlPNrFxJOfJEkbOsUpBZCk-la0Q8hZX8sK2gtzFJi9ym-FOqN8N7tfaShSJpOvEAH-ilzKxI6LVUmE8HnWWL9dHzySKDItUIWLcIRTbdskVzL2b9jeIvU5Dn5Ladu5R7b1zWMl5k96w74Zy7pIsjKxZjb6G17p-ucw6h9TzHWnvLSTojvtNZFexKHzGprX-T0yENg0Yn1GrpnFYBBxqC2SBAeLtV4YyVRr-vs1DKcCdc1KplBxHtA_jTuuOyxBUqRhf5RmRnmUnE0VTO71ujhXWYX0IEU.75R6BW9dcTPZiiw8NdROQzqEaiXTdlJ9cc9VV7bt-eI&dib_tag=se&keywords=Million+Dollar+Weekend&qid=1786057575&sprefix=million+dollar+weekend%2Caps%2C100&sr=8-1",
    ],
    [
      "The Millionaire Fastlane",
      "M. J. DeMarco",
      "https://www.amazon.ca/Millionaire-Fastlane-Crack-Wealth-Lifetime/dp/0984358102?crid=149BM2M6Z7ZI&dib=eyJ2IjoiMSJ9.jvYMsb-XHwGNX0fbQARA2L630uixfhaXgShsMmb74WVzHgRbjK5ZyerQY65nF_mwxNxqiIBvuCGE_Fao1R4w1JbYbGaf7kpFmjL_7R4LIjQAFJ5DtbUDavTOIFG-rQfp3rkYe5gV5DBDIUQPCL_C25k686Jtw5_WpmT6qlRl-TOZkBUVeJlLAxgDb2sJNyt7DzzZXdO7X5I36KOQC4ewKLvqrHcvyk9Fbd--4OSJltyG0WbJq2rDwB2p0GqpBCYrvK1aR3AA43SfjrSEqQaSgvJ1wwzYf9MT0ZH7tqmkI_0.OEIC290ZMHRY-RInwXfFgioFaFnA60ynTymc4cvzp7A&dib_tag=se&keywords=The+Millionaire+Fastlane&qid=1786057602&sprefix=the+millionaire+fastlane%2Caps%2C105&sr=8-1",
    ],
    [
      "Show Your Work!",
      "Austin Kleon",
      "https://www.amazon.ca/Show-Your-Work-Creativity-Discovered/dp/076117897X?crid=366MO5BKSUEWT&dib=eyJ2IjoiMSJ9.9S5PeU9ld73scJxQb4bCUXiHjCwXv7gjxFgXM6e3TTJZBbEZQw3P9Emj3i0wXp4R5dXJCDKOW_y4Z2tbodtMy7L1mwr_e2MwA1ORPwrlb2CUtgPivEif2Vwz81Z6vsbggryRMkCxAI9kkcLhVnqtAZdd-xAVk-yp-KJNI9XgDwtqKXgQ2S6ifSXGoeRbqz5imiXGn466_HFyUraFUzvMPXTcSxepiwqAX2YIW_efFbQNYe3Q8L0ZiHOdX7OxHeCwTcBiwIuPD5BtSZS3gscXUzPBYwzUKF-h_jSRnAwBvrQ.1YmXv1kmTTLpQ8puZi8FefJG2YKvsTYoSbzZRvufha0&dib_tag=se&keywords=Show+Your+Work!&qid=1786057645&sprefix=show+your+work+%2Caps%2C114&sr=8-1",
    ],
    [
      "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now",
      "Meg Jay",
      "https://www.amazon.ca/Defining-Decade-Your-Twenties-Matter/dp/1538754231?crid=23HW8RBWGRM04&dib=eyJ2IjoiMSJ9.NxU5tfFEIwGcZrnzYNFWHgWLb19s6o0S9omD38iTecoae_Sa-CUA928BFMEtY8QC3bA_nlmaX3JHDtQh1kRYIWgVttlD2cznEvzzEBLd8_UemVk5I4cfmEYlBQd6Ielfjj-QpqfIurfkABkbobgqnUvzoRBpxEjbA8d5wNUFUzN4eZVgc_xmxxyZBo-mBrsS.bE5e0ZE-UwwFqvsajflZJ06pK4ZSwejFDIdgvuVYpq8&dib_tag=se&keywords=The+Defining+Decade%3A+Why+Your+Twenties+Matter--And+How+to+Make+the+Most+of+Them+Now&qid=1786057685&sprefix=the+defining+decade+why+your+twenties+matter--and+how+to+make+the+most+of+them+now%2Caps%2C108&sr=8-1",
    ],
    [
      "How to Not Die Alone: The Surprising Science That Will Help You Find Love",
      "Logan Ury",
      "https://www.amazon.ca/How-Not-Die-Alone-Surprising/dp/1982120630?crid=13JFREXUW9RK6&dib=eyJ2IjoiMSJ9.LObjs67jXEnhQb0MpwLv9HY8xiJpSjM6tYeB_lZ4MG6Oq5xyz64cAFiMAzDslD7U068XATx9nNxNJiDvLuDHydeJeNdC5_HNJMwX95fTggcBgnQaglzujQA8aE7VYRzLxVQ_QGTlhJSWBqlrAINBwHHY7sdbERsh1uh3SLTMMDjwvXbTnApUe2WXInuqUTWGAP01_noHnURDJXYmMxqGewzTsIow9NUlCPpGnSF9M98comZfADzzdgsEnJNlZLvNsXi8eO6jgeoUeUKmQouoJ4QG1Oweh0pW1ICKTaguk5I.RcHfOqkaB5vqj7fknWqH2x4_haLF6GGwL0hN881dDjo&dib_tag=se&keywords=How+to+Not+Die+Alone%3A+The+Surprising+Science+That+Will+Help+You+Find+Love&qid=1786057713&sprefix=how+to+not+die+alone+the+surprising+science+that+will+help+you+find+love%2Caps%2C111&sr=8-1",
    ],
    [
      "The Deep Magic of Daily Consistency (The audio book is nice)",
      "Robin Sharma",
      "https://www.amazon.ca/Deep-Magic-Daily-Consistency-Greatness/dp/B0G6G88XTV?crid=ODM2U5DUX2NM&dib=eyJ2IjoiMSJ9.9i5QeIidWgeSLPA4cTJaPG3WYFt4FgRivAULMmwN_iFR73fcUWOVEt-bI_v4Dk2o.huledsAfHMm3y51f2RUtK1KsUPloptd78IJNzfFdspQ&dib_tag=se&keywords=The+Deep+Magic+of+Daily+Consistency&qid=1786057735&sprefix=the+deep+magic+of+daily+consistency%2Caps%2C115&sr=8-1",
    ],
    ["Rewire the Loop", "Zach Apple", ""],
    [
      "The 5 Second Rule",
      "Mel Robbins",
      "https://www.amazon.ca/Second-Rule-Transform-Confidence-Everyday/dp/1682612384?crid=3P31BSC53CMJ5&dib=eyJ2IjoiMSJ9.VsOgC_vWdeVcezMRcjubMtwfPohSYHlthNOmzW91va704BITBTWwOhLKTuRvSoIZ_QtjvQtnq43hvuEPQi2Yek_fGxttM4UxcetafhyIptSJCughwy37mYcwVTVpyOQweI5-Jc-VLpKe6DQGlN505fwQuCNnQ2TJDNqmEmdliWnnFNbEelNoF3eBFh6wNRbuzaqFk8BGVHIubrH1u6ghslcz1KEnL2nWPZbO0YnXewl2CtGVNwadE7moNg-9mzHURU6fNCeCgp2q61kWU_4_-1oWlSxdlaXi98pgRhn3DUY.cFznfCgLHvWHtznNDqfMAHQo681GHrbDtEvPknRv61I&dib_tag=se&keywords=The+5+Second+Rule&qid=1786057914&sprefix=the+5+second+rule%2Caps%2C125&sr=8-1",
    ],
    [
      "The Fine Art of Small Talk",
      "Debra Fine",
      "https://www.amazon.ca/Fine-Art-Small-Talk-Conversation/dp/0349436177?crid=7TPZUS4HCUAX&dib=eyJ2IjoiMSJ9.YW0bhzkp61QTkAuKuhrSBVVGZErQrZdOakGtCamQm6MMt57PNVHMtewcCt1zTqBqlvN2aJ5H8-ZDgL9iM_7Lq5dNB3JYPAk6aMitbwLDId_-sJit_-WZdfVGRmDHTJb6EGDhhN2TmeYdfSuZ8G4V7f3wHSCb7fCsFVObXWtFUa9WUs6jG4_1tJkEn-u_VTwcSBmw-ULNbRkKHhKiyuMr2PCJdLQ9ILTwue-LOMKv6mD1NFAxnCxcyDRngT9yWo93OTihgks8llj1G8QXGFMndLCSITQbaRFdZY5bv-4Ar-g.JnDVwrYf_cMIiABe-o4zFtnjRHpCZtu53AUXy3Sj510&dib_tag=se&keywords=The+Fine+Art+of+Small+Talk&qid=1786058332&sprefix=the+fine+art+of+small+talk%2Caps%2C147&sr=8-1",
    ],
    [
      "Can't Hurt Me (I almost didn't read this, now I love it)",
      "David Goggins",
      "https://www.amazon.ca/Cant-Hurt-Me-Master-Your/dp/1544512279?crid=S3XZC6X7AY6T&dib=eyJ2IjoiMSJ9.YM-4L_1b9QCG49acOEJ4DFcEYaYuUvHxyEP6Z4RWdB4DFWTheiXwGzKPEX53cV-3CtDo6r2ZRO-COR8CoZ-Qvs9CpB3vG9iQjzicW7heBvCszruhVGqeX98_aeZG7VnP8RfWke7ZXmDWk-S70ASjzJ09i6T0GIhfP4V9kus0IJWJpp1cre0cTxXaJq47ASchL5es6LiU6RN4oy6h5sdWeOMauNWxyNgXQvvKM6xN8snIGp7YoeNOGMac2jVHiIAdKeBjA5P3tYF7-A3-VsyU8SbIEEuHizbMXFGF0Q9cJTY.MA3sxfGfvjsROEGvpYlVdXuCM0AwIRt6T1DQp1xLNoU&dib_tag=se&keywords=Can%27t+Hurt+Me&qid=1786058353&sprefix=can%27t+hurt+me%2Caps%2C215&sr=8-1",
    ],
  ];
  return (
    <div className="border-2 border-purple-400 dark:border-purple-200 rounded-xl p-2 px-3">
      <ul>
        {favouriteBooks.map((book) => (
          <li key={book[0]}>
            <p>
              <span className={`${doto.className}`}>{"->"}</span>{" "}
              <a href={book[2]} target="_blank">
                {book[0]}
              </a>{" "}
              : <span className={`${doto.className}`}>{book[1]}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
