import React from "react"
import { Link } from "react-router-dom"
import SvgIcon from "../cmps/SvgIcon"

export function Home() {
  const previews = [
    {
      id: "preview-1",
      imgUrl:
        "https://images.ctfassets.net/rz1oowkt5gyp/3N2U3C71rApm61cGFxnc2E/970b010002488a09a420282df5e7b43a/Carousel_Image_Boards_2x.png?w=1140&fm=webp",
    },
  ]
  return (
    <div className="home">
      <header className="home-header">
        <nav className="home-nav">
          <ul className="clean-list flex justify-between">
            <li className="logo">
              <Link to={"/"}>
                <SvgIcon iconName={"logoAtlassian"} />
              </Link>
            </li>
            <li className="flex ">
              <Link className="cta" to={"/login"}>
                Log in
              </Link>
              <Link className="cta cta-link" to={"/board"}>
                Get Trello for free
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home-section hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                Trello brings all your tasks, teammates, and tools together
              </h1>
              <p>Keep everything in the same place—even if your team isn’t.</p>
              <Link className="cta cta-link" to={"/board"}>
                Sign up - it’s free!
              </Link>
            </div>
            <div className="col">
              <img
                src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1080"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-section preview">
        <div className="container">
          <header>
            <span>Trello 101</span>
            <h2>A productivity powerhouse</h2>
            <p>
              Simple, flexible, and powerful. All it takes are boards, lists,
              and cards to get a clear view of who’s doing what and what needs
              to get done. Learn more in our <a>guide for getting started</a>.
            </p>
          </header>
          <div className="board-preview-container">
            <ul className="clean-list preview-list">
              <button className="active">
                <h3>Boards</h3>
                <p>
                  Trello boards keep tasks organized and work moving forward. In
                  a glance, see everything from “things to do” to “aww yeah, we
                  did it!”
                </p>
              </button>

              <button>
                <h3>Lists</h3>
                <p>
                  The different stages of a task. Start as simple as To Do,
                  Doing or Done—or build a workflow custom fit to your team’s
                  needs. There’s no wrong way to Trello.
                </p>
              </button>
              <button>
                <h3>Cards</h3>
                <p>
                  Cards represent tasks and ideas and hold all the information
                  to get the job done. As you make progress, move cards across
                  lists to show their status.
                </p>
              </button>
            </ul>
            <section className="carousel-preview">
              <img src={previews[0].imgUrl} alt="" />
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
