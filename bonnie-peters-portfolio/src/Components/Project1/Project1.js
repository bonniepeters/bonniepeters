import React, { Component } from "react";

class Project1 extends Component {
  render() {
    return (
      <div className="project">
        <h3>Holiday Binge Buddy</h3>
        <p>
          Have you ever wanted to snuggle up and watch an episode of your
          favorite show where they celebrate your favorite holiday? Ever
          wondered which shows aired holiday specials or what seasons and
          episode numbers those specials were? Well, you're in luck! This full
          stack application allows you to browse a list of user-submitted shows
          and all their holiday episodes. Don't see your show in the list yet?
          Add it along with the season and episode number for the next holiday
          show binger who peruses the list!
        </p>
        <ul>
          <li>
            <a href="https://github.com/bonniepeters/holiday-binge-buddy">
              Front-End Github Repository
            </a>
          </li>
          <li>
            <a href="https://github.com/bonniepeters/holiday-specials">
              Back-End Github Repository
            </a>
          </li>
          <li>
            <a href="https://bonniepeters.github.io/holiday-binge-buddy/">
              Deployed Application
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project1;
