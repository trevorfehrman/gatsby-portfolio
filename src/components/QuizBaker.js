import React, { Fragment } from "react"
import up4Splash from "../../assets/up4Splash.png"

const QuizBaker = ({ up4Content, setUp4Content }) => {
  return (
    <div className="details2">
      <div className="nav">
        <ul>
          <li
            className={up4Content == "Picture" ? "selected--text" : null}
            onClick={() => setUp4Content("Picture")}
          >
            <span>&#9776;</span> Up4
            <div
              className={up4Content == "Picture" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={up4Content == "What" ? "selected--text" : null}
            onClick={() => setUp4Content("What")}
          >
            <span>&#9777;</span> What is it?
            <div className={up4Content == "What" ? "selected" : "highlight"} />
          </li>
          <li
            className={up4Content == "Stack" ? "selected--text" : null}
            onClick={() => setUp4Content("Stack")}
          >
            <span>&#9778;</span> Stack
            <div className={up4Content == "Stack" ? "selected" : "highlight"} />
          </li>
          <li
            className={up4Content == "Challenges" ? "selected--text" : null}
            onClick={() => setUp4Content("Challenges")}
          >
            <span>&#9779;</span> Challenges
            <div
              className={up4Content == "Challenges" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={up4Content == "Contribution" ? "selected--text" : null}
            onClick={() => setUp4Content("Contribution")}
          >
            <span>&#9780;</span> Contribution
            <div
              className={
                up4Content == "Contribution" ? "selected" : "highlight"
              }
            />
          </li>
        </ul>
      </div>
      <div className="content">
        <Fragment>
          {(() => {
            console.log(up4Content)
            switch (up4Content) {
              case "Picture":
                return (
                  <Fragment>
                    <img src={up4Splash} />
                  </Fragment>
                )
              case "What":
                return (
                  <Fragment>
                    <h2>The Project</h2>
                    <p>
                      Up4 is a social media app that connects you with users who
                      are interested in going to the same events as you so long
                      as you match each other's criteria.
                    </p>
                    <p>
                      I and four other developers spent 5 weeks building Up4 to
                      demonstrate the knowledge we'd accrued at Lambda School.
                      Features include a compatibility algorithm a user
                      dashboard, and a chat system built from scratch.
                    </p>
                    <p>
                      Despite the rigid timeframe we opted into a stack we
                      weren't trained in and managed to hit a 35 day MVP in 10.
                    </p>
                  </Fragment>
                )
              case "Stack":
                return (
                  <Fragment>
                    <h2>Technologies</h2>
                    <p>Material UI</p>
                    <p>NextJS / React 16.8</p>
                    <p>Apollo Client</p>
                    <p>Prisma / GraphQL</p>
                    <p>PostgreSQL</p>
                    <p>Docker</p>
                  </Fragment>
                )
              case "Challenges":
                return (
                  <Fragment>
                    <h2>What we Struggled with</h2>
                    <p>
                      Every Layer of our stack was new to us in one way or
                      another. We had to teach ourselves server-side rendering,
                      GraphQL and Material UI while we were implementing them
                      for the first time.
                    </p>
                    <p>
                      Because our project was so ambitious we ran into several
                      performace issues. We migrated our backend twice to more
                      powerful options. We also isolated some extremely hot code
                      and brought our time-to-interactive down to a fraction of
                      what it was prior.
                    </p>

                    <p>
                      The biggest challenge was fixing an arcane header issue
                      during deployment. It was forcing the client to handle the
                      initial render which meant we weren't reaping the
                      performance benefits of server-side rendering. It took us
                      weeks to find the problem but we did it.
                    </p>
                  </Fragment>
                )
              case "Contribution":
                return (
                  <Fragment>
                    <h2>My Role</h2>
                    <p>
                      The fundamental concept and scope of the app was mine. We
                      were tasked to build an app that pulled event data down
                      from an API but I pitched a more ambitious target to my
                      team.
                    </p>
                    <p>
                      Up4 was a collabrative effort but we each had our niches.
                      The lion's share of the look and feel of the site is the
                      result of my work. I also named it.
                    </p>
                    <p>
                      In practice what this means is my team would figure out
                      how to feed the data up to the front end at which point I
                      would figure out what to do with it.
                    </p>
                  </Fragment>
                )
            }
          })()}
        </Fragment>
      </div>
    </div>
  )
}

export default QuizBaker
