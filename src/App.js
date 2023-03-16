import "./App.css";

function App() {
  return (
    <main>
      <div className="bgBox"></div>
      <div className="bgFill"></div>

      <header>
        <div className="aboutMeCont">
          <div className="aboutMeText">
            <h1>About Me:</h1>
            <p>
              Hello, I am <span> Mikhail Yuguy</span>, a full stack developer
              based in Auckland, New Zealand. Programming has become a great
              passion of mine as it allows me to solve problems, both complex
              and creative, in a challenging and satisfying way. I have studied
              a variety of different technologies that would help me or are
              essential to the field. On top of that, I am always deteremined
              and looking forward to learning new and updated practices as
              technology rapidly evolves.
            </p>
            <p>
              Additionally I have a career history in digital art and design
              which aids me greatly with website design and front-end
              development overall. I always try and implement techniques that I
              have learnt over the years to spice up the visual design of my
              websites.
            </p>
          </div>
          <div className="aboutMeImage"></div>
        </div>
      </header>

      <section className="projectsSection">
        <h2>List of Projects:</h2>
        <div className="projectListCont">
          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/honeygram.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Honeygram</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/honeygram"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/honeygram/#/login"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              Honeygram is an Instagram clone but with bears. I utilized
              Javascript, React and Firebase during its development. A lot of
              work went into making sure that data would smoothly transfer
              between users and I learnt a lot during it, especially how to
              properly manage data when having a user base. Also I created a
              variety of hand drawn assets in order to differentiate from making
              it too close to Instagram.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/weatherApp.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Weather App</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/weatherApp"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/weatherApp/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              This weather app uses the OpenWeatherMap API to get the current
              weather of any city or area that the user searches. Once the data
              is fetched, the graphics change based on the weather of the
              result. Also there is a function to switch between celsius and
              fahrenheit.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/runes4U.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Runes4U</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/shopping-cart"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/shopping-cart/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              A shopping site run by a fictional shopkeeper. Browse through his
              wares and add anything that you find interesting to your cart.
              Afterwards, go to the checkout and pay to complete your order. On
              the checkout page, it is possible to make some final adjustments
              to your cart such as setting the amount of items purchased as well
              as removing items completely. Based on the fantasy world of Elden
              Ring.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/eastCafe.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>East Cafe</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/restaurant-page"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/restaurant-page/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              A website for a small business. The site used factory components
              in order to efficiently create each menu item on the go. The site
              is designed to be clean and easy to navigate as it is highly
              likely that the user quickly wants to check the address and the
              menu plus read a little bit of information.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/quickCV.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Quick CV</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/CV_Application"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/CV_Application/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              A CV generator which has the user fill out a few short inputs that
              gets rendered and organized into a clean page to act as a CV, if
              they were to apply for a job. Just as the name suggests, it is
              ideal for people who want to apply for a job quickly or are short
              on time.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/battleship.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Battleship </h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/Battleship"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/Battleship/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              A classic game of Battleship, recreated in Javascript. Sink all of
              your opponent's ships before they sink yours. The AI remembers
              where each part is hit so it can continue targeting your ships
              instead of randomly shooting other spots.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/library.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Personal Library</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/Library"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/Library/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              An app which the user can add books to, along with the author and
              page count. The user can set each book as either "read" or
              "unread" which is useful for keeping track of what you have read.
              It is all displayed as cards which are organized in a clean and
              easy to read manner.
            </p>
          </div>

          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/memoryCard.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Memory Cards</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/memory-card"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/memory-card/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              A game of Memory Cards, using characters from the Pokemon
              franchise. Click on each card once to move on to the next level.
              Watch out though, they switch order with each click and getting it
              wrong costs you one health point. Lose all you health and its game
              over. Beat the first wave of levels to unlock a gaunlet of harder
              levels. Go for the high score.
            </p>
          </div>
          <div className="projectCont">
            <div className="projectPicWrapper">
              <img
                className="projectPic"
                src={require("../src/images/screenshots/dunzo.png")}
              ></img>
            </div>
            <div className="projectMiddlecont">
              <h3>Dunzo</h3>
              <div className="projectIcons">
                <a
                  href="https://github.com/mikhailYu/todo-List"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
                <a
                  href="https://mikhailyu.github.io/todo-List/"
                  className="interactive"
                  target={"_blank"}
                >
                  <img src={require("../src/images/icons/linkto.png")}></img>
                </a>
              </div>
            </div>
            <p className="projectDesc">
              An app that keeps track of tasks that the user needs to do. The
              information is saved locally so the tasks aren't reset whenever
              the page is closed. Each larger task also has room to add in
              smaller tasks to break the workload down. There are also functions
              to organize tasks by date.
            </p>
          </div>
        </div>
      </section>

      <section className="toolsSection">
        <div className="toolsCont">
          <h4>Main Tools:</h4>
          <div className="toolIconsCont">
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <p>Html</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <p>Css</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <p>Javascript</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              <p>Express</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <p>React</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
              <p>Firebase</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <p>Git</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <p>Mongodb</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <p>Nodejs</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
              <p>Npm</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
              <p>Jest</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
              <p>Webpack</p>
            </div>
          </div>
        </div>
        <div className="toolsCont">
          <h4>Other Tools:</h4>
          <div className="toolIconsCont">
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
              <p>Photoshop</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" />
              <p>After Effects</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" />
              <p>Illustrator</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" />
              <p>Premier Pro</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              <p>Github</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg" />
              <p>Maya</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
              <p>Unity</p>
            </div>
            <div className="tool">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
              <p>Linux</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection">
        <div className="contactPicWrapper">
          <img src={require("../src/images/icons/email.png")}></img>
        </div>
        <div className="contactText">
          <h5>Get in Contact:</h5>
          <p>
            It would be great to get in contact. My business email is
            <span> mikhailyuguy01@gmail.com</span>. Don't hesitate to reach out!
          </p>
          <p>
            Check out my Github profile to stay up to date with my projects.
          </p>
          <div className="contactLogos">
            <a
              href="https://github.com/mikhailYu"
              className="interactive gitHubInvert"
              target={"_blank"}
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
            <a
              href="https://www.linkedin.com/in/mikhail-yuguy-219a25191/"
              className="interactive"
              target={"_blank"}
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
