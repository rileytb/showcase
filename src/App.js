import './App.css';
import avatar from './avatar.jpg';

const showcaseUrl = 'https://github.com/rileytb/showcase';
const linkedInUrl = 'https://www.linkedin.com/in/riley-t-brown/';
const cyaHelperApp = 'https://bandoleer-7ad60.web.app/';
const cyaHelperPlayStore =
  'https://play.google.com/store/apps/details?id=com.cyahelper&pcampaignid=web_share';
const droidDepotUrl = 'https://github.com/rileytb/droid-depot-bt';

function App() {
  return (
    <>
      <div className="App p-4 mb-60">
        <div className="hero bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold pb-4">Riley Brown</h1>

              <div className="avatar">
                <div className="w-24 rounded-3xl">
                  <img alt="Riley" src={avatar} />
                </div>
              </div>
              <p className="py-6">
                Software Development Professional with experience creating new,
                global enterprise technologies, working with a large code base,
                micro-frontends, and maintaining high development standards.
              </p>
              <a
                role="button"
                className="btn btn-primary"
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Cover Your Assets - card game score tracker
              </h2>
              <p>
                A helper app to keep track of points as stacks of cards grow
                larger and larger between each round.
              </p>
              <p>
                A React PWA app that implements a persistent redux store. Uses
                React Material UI components. Deployed to Firebase from Github
                actions.
              </p>
              <div className="card-actions justify-end">
                <a
                  className="link link-primary"
                  href={cyaHelperApp}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed app
                </a>
                <a
                  className="link link-primary"
                  href={cyaHelperPlayStore}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play store link
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Star Wars Galaxy's Edge Droid Depot - auto actions
              </h2>
              <p>
                A simple webpage that allows for automated noise/lights without
                manual use of the remote.
              </p>
              <p>
                Vanilla JS and HTML, handles low-level browser Bluetooth API
                interaction.
              </p>
              <div className="card-actions justify-end">
                <a
                  className="link link-primary"
                  href={droidDepotUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer fixed bottom-0 p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">About this website</span>
          <p>
            View the{' '}
            <a
              href={showcaseUrl}
              className="link link-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </p>
          <p>React (CRA), deployed through github actions.</p>
          <p>
            Using{' '}
            <a
              target="_blank"
              href="https://daisyui.com/"
              rel="noreferrer"
              className="link link-secondary"
            >
              daisyUI
            </a>{' '}
            styles and themes
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
