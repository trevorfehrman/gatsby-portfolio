import React, { Fragment, useState } from "react"
import bombNomSplash from "../../assets/bombNomSplash.png"


const BombNom = () => {
  const [bombNomContent, setBombNomContent] = useState("Picture")
  return (
    <div className="details3">
      <div className="nav">
        <ul>
          <li
            className={bombNomContent == "Picture" ? "selected--text" : null}
            onClick={() => setBombNomContent("Picture")}
          >
            <span>&#9818;</span> Bomb-Nom
            <div
              className={bombNomContent == "Picture" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={bombNomContent == "What" ? "selected--text" : null}
            onClick={() => setBombNomContent("What")}
          >
            <span>&#9819;</span> What is it?
            <div
              className={bombNomContent == "What" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={bombNomContent == "Stack" ? "selected--text" : null}
            onClick={() => setBombNomContent("Stack")}
          >
            <span>&#9820;</span> Stack
            <div
              className={bombNomContent == "Stack" ? "selected" : "highlight"}
            />
          </li>
          <li
            className={bombNomContent == "Challenges" ? "selected--text" : null}
            onClick={() => setBombNomContent("Challenges")}
          >
            <span>&#9821;</span> Challenges
            <div
              className={
                bombNomContent == "Challenges" ? "selected" : "highlight"
              }
            />
          </li>
          <li
            className={
              bombNomContent == "Contribution" ? "selected--text" : null
            }
            onClick={() => setBombNomContent("Contribution")}
          >
            <span>&#9822;</span> Contribution
            <div
              className={
                bombNomContent == "Contribution" ? "selected" : "highlight"
              }
            />
          </li>
        </ul>
      </div>
      <div className="content">
        <Fragment>
          {(() => {
            switch (bombNomContent) {
              case "Picture":
                return (
                  <Fragment>
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src={bombNomSplash}
                    />
                  </Fragment>
                )
              case "What":
                return (
                  <Fragment>
                    <h2>The Project</h2>
                    <p>
                      Bomb-Nom is a party planning app. Users can create
                      parties, send invites, and create a registry for what the
                      host needs their guests to bring.
                    </p>
                    <p>
                      Have spent a lot of the last year collaborating I felt I
                      needed to demonstrate I could build a full stack
                      application by myself. I also wanted the app to useful so
                      I came up with something my friends could use.
                    </p>
                  </Fragment>
                )
              case "Stack":
                return (
                  <Fragment>
                    <h2>Technologies</h2>
                    <p>Material UI 4.0</p>
                    <p>CSS Grid</p>
                    <p>React 16.8</p>
                    <p>Express</p>
                    <p>Node</p>
                    <p>PostgreSQL</p>
                  </Fragment>
                )
              case "Challenges":
                return (
                  <Fragment>
                    <h2>What I Struggled with</h2>
                    <p>
                      I've had a fair ammount of practice with Flexbox layouts
                      but this has been my first real attempt to use the CSS
                      Grid module.
                    </p>
                    <p>
                      Grid is very powerful but the skill floor is higher than
                      alternatives. You can get very responsive layouts with a
                      single line of CSS, but that line has a lot to unpack.
                      Masking the party attendee grid also took considerable
                      effort.
                    </p>

                    <p>
                      This was also my first implementation of Auth0. The setup
                      was a delicate operation but it enabled an elegant way to
                      pull relevant party data down for a given user.
                    </p>
                  </Fragment>
                )
              case "Contribution":
                return (
                  <Fragment>
                    <h2>My Role</h2>
                    <p>This one's all me. 🙃</p>
                  </Fragment>
                )
            }
          })()}
        </Fragment>
      </div>
    </div>
  )
}

export default BombNom
