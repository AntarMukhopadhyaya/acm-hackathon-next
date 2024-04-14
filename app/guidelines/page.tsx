import { Box, Container } from "@mui/material";

const Guidelines = () => {
  return (
    <section className="bg-inherit ">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20 ">
        <div
          className="mx-auto max-w-5xl text-center mt-20"
          style={{ fontFamily: "blanka" }}
        >
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
            GUIDELINES
          </h1>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              PARTICIPATION ELIGIBILITY:
            </h2>

            <p className="mt-2 text-md/relaxed text-gray-400">
              Following candidates are eligible to participate in the HackSpire
              Hackathon: A student of College or University, pursuing any of the
              following programme
            </p>
            <ul className="mt-2 ml-4 text-md/relaxed text-gray-400 list-disc">
              <li>BE/ B. Tech/Diploma</li>
              <li>MCA/BCA</li>
              <li>ME/ M. Tech.</li>
              <li>B.Sc./ M.Sc.</li>
            </ul>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              SELECTION OF MENTOR:
            </h2>

            <p className="mt-2 text-md/relaxed text-gray-400">
              A mentor can be selected from either the Industry or Academia,
              possessing relevant experience and qualifications to effectively
              guide a team. Ideally, mentors should be chosen from within the
              same institute as the students for better alignment and
              understanding of institutional dynamics.
            </p>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              FORMING A TEAM:
            </h2>

            <p className="mt-2 text-md/relaxed text-gray-400">
              A team must be formed, consisting of 6 members, with one Team
              Leader
              <span className="font-bold text-white">
                {" "}
                ( 1 female member per team is mandatory )
              </span>
              . Each team must have a unique Team Name.{" "}
            </p>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              PRIMARY REGISTRATION:
            </h2>
            <ul className="mt-2 ml-4 text-md/relaxed text-gray-400 list-disc">
              <li>
                Mentor / Team Leader should register the team at{" "}
                <span className="font-bold text-white">DEVFOLIO</span>.
              </li>
              <li>
                Registration for HackSpire 2024 will be open from{" "}
                <span className="font-bold text-white">
                  1st June 2024 to 20th June 2024.
                </span>
                .
              </li>
              <li>
                <span className="font-bold text-white">
                  No fees is required
                </span>{" "}
                for the Primary Registration and Idea Submission round.
              </li>
              <li>
                After Team formation pertaining to the eligibility criteria
                mentioned above, teams should choose a theme and a matching
                problem statement from the predefined Problem Statement List.
                Students may also choose to innovate on their own under any of
                the given themes through “OPEN INNOVATION” category. In that
                case, the problem statement should be relevant to the theme and
                clearly defined.
              </li>
              <li>
                After Problem Statement selection, participants should create a
                PPT based on the Idea Template available on the HackSpire
                portal. A PDF of the same should be submitted during the Idea
                Submission Round.
              </li>
              <li>
                <span className="font-bold text-white">
                  A signed consent letter, endorsed by the Head of the
                  Institution, is mandatory.
                </span>
              </li>
            </ul>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              PRIMARY REGISTRATION:
            </h2>

            <p className="mt-2 text-md/relaxed text-gray-400">
              A team must be formed, consisting of 6 members, with one Team
              Leader
              <span className="font-bold text-white">
                {" "}
                ( 1 female member per team is mandatory )
              </span>
              . Each team must have a unique Team Name.{" "}
            </p>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
              IDEA APPROVAL & GRAND FINALE REGISTRATION:
            </h2>
            <ul className="mt-2 ml-4 text-md/relaxed text-gray-400 list-disc">
              <li>
                After Idea Submission, the HackSpire Executive team will review
                all details and all ideas will be evaluated. Once complete,
                final approval will be sent to the Mentor via email. Any
                discrepancies will prompt contact with the Mentor via email or
                mobile.
              </li>
              <li>
                Once an Idea is selected, the corresponding Team Mentor will
                receive a confirmation email for the Grand Finale of HackSpire.
                The Team should complete the Grand Finale Registration within
                the stipulated deadline. Failure to do so will result in
                disqualification.
              </li>
              <li>
                Teams registering for the Grand Finale shall pay a nominal fee
                for food and accommodation on the day of the Grand Finale.
              </li>
            </ul>
          </article>

          <article
            className="rounded-lg border text-left bg-white mt-10 shadow-sm transition hover:shadow-lg hover:bg-white/10 hover:border-white/10 sm:p-6 border-gray-800 bg-gray-900 shadow-gray-700/25"
            style={{ fontFamily: "Varela" }}
          >
            <h2 className="mt-0.5 text-2xl font-medium text-gray-900 dark:text-white">
            GRAND FINALE:
            </h2>
            <ul className="mt-2 ml-4 text-md/relaxed text-gray-400 list-disc">
              <li>
              The Grand Finale of HackSpire 2024 will be in <span className="font-bold text-white">OFFLINE MODE</span>, held at Future Institute of Engineering and Management, Sonarpur, Kolkata, West Bengal.
              </li>
              <li>
              Full team, along with Mentor, should be physically present throughout the duration of the hackathon, ie. from 8 am to 7 pm.
              </li>
              <li>
              Solutions of problem statement in the Grand Finale should be original and non-plagiarized.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
