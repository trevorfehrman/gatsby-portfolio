import React, { Fragment, useState } from "react"
import quizBakerSplash from "../../assets/quizBaker.png"

const QuizBaker = () => {
  const [quizBakerContent, setQuizBakerContent] = useState("Picture")
  return (
    <div className="details2">
      <div className="nav">
        <ul>
          <li
            className={quizBakerContent == "Picture" ? "selected--text" : null}
            onClick={() => setQuizBakerContent("Picture")}
          >
            <span>&#9834;</span> Quiz-Baker
            <div
              className={
                quizBakerContent == "Picture" ? "selected" : "highlight"
              }
            />
          </li>
          <li
            className={quizBakerContent == "What" ? "selected--text" : null}
            onClick={() => setQuizBakerContent("What")}
          >
            <span>&#9836;</span> What is it?
            <div
              className={quizBakerContent == "What" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={quizBakerContent == "Stack" ? "selected--text" : null}
            onClick={() => setQuizBakerContent("Stack")}
          >
            <span>&#9837;</span> Stack
            <div
              className={quizBakerContent == "Stack" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={
              quizBakerContent == "Challenges" ? "selected--text" : null
            }
            onClick={() => setQuizBakerContent("Challenges")}
          >
            <span>&#9838;</span> Challenges
            <div
              className={
                quizBakerContent == "Challenges" ? "selected" : "highlight"
              }
            />
          </li>
          <li
            className={
              quizBakerContent == "Contribution" ? "selected--text" : null
            }
            onClick={() => setQuizBakerContent("Contribution")}
          >
            <span>&#9839;</span> Contribution
            <div
              className={
                quizBakerContent == "Contribution" ? "selected" : "highlight"
              }
            />
          </li>
        </ul>
      </div>
      <div className="content">
        <Fragment>
          {(() => {
            switch (quizBakerContent) {
              case "Picture":
                return (
                  <Fragment>
                    <img src={quizBakerSplash} />
                  </Fragment>
                )
              case "What":
                return (
                  <Fragment>
                    <h2>The Project</h2>
                    <p>
                      I built Quiz-Baker with with a partner while we were
                      teacher's assistants in Lambda School. We wanted to
                      provide an API on top of which the more ambitious students
                      we were overseeing could build a project during an
                      extended winter break.
                    </p>
                    <p>
                      Our goal was to make a CRUD application that was a bit
                      more complex than the ones we had been working with up and
                      to that point.
                    </p>
                    <p>
                      Quiz-Baker lets users create custom quizes over which they
                      can compete. It features leaderboards, a forum and robust
                      filtering options among several other bells and whistles.
                    </p>
                  </Fragment>
                )
              case "Stack":
                return (
                  <Fragment>
                    <h2>Technologies</h2>
                    <p>Prime React</p>
                    <p>AnimeJS</p>
                    <p>Styled Components</p>
                    <p>React 16.8</p>
                    <p>Express</p>
                    <p>Node</p>
                    <p>PostgreSQL</p>
                  </Fragment>
                )
              case "Challenges":
                return (
                  <Fragment>
                    <h2>What we Struggled with</h2>
                    <p>
                      This was the first time either my partner or I had worked
                      extensively with another programmer. Getting past the
                      growing pains of reading and interacting with someone
                      else's code was a crucial step in our development.
                    </p>
                    <p>
                      This was also the largest project either of us had worked
                      on up to that point. We would hit massive bottlenecks in
                      which simple changes proved difficult to implement.
                    </p>

                    <p>
                      The code was overhauled three times. Each time was an
                      improvement. I look back on this project as the most
                      valuable educational experience I had this year. We
                      learned how to avoid a lot of problems before they began.
                      We perservered and ended up with a project we're proud of.
                    </p>
                  </Fragment>
                )
              case "Contribution":
                return (
                  <Fragment>
                    <h2>My Role</h2>
                    <p>
                      I helped architect the back end but wrote very little of
                      it. I came on the project in earnest after the API was
                      largely finished.
                    </p>
                    <p>
                      As in Up4 I gave Quiz-Baker its look at feel. I came up
                      with the name, the color scheme, the design motifs and
                      built most of the custom components.
                    </p>
                    <p>
                      It's named in honor of our lovely friend and colleague,
                      Liz Baker.
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
