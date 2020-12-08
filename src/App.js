import React from "react";
import "./styles.css";
import { Avatar } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      {/* Cards */}
      <p className="heading__p">Testimonial</p>
      <h2 className="heading__h">What Clients Says?</h2>
      <hr className="line" />
      <p className="head__info">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium
      </p>
      <p className="head__info">doloremque laudantium, totam rem aperiam</p>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              alt="comma"
              src="https://lh3.googleusercontent.com/proxy/BNP_K2joUbhPIzLljP8L6NOalwR0GFpjuq7bxyOsvWWqDYQBf7jW2UDlAGl5mtgPN1BFj_nifF1jS9PThCYUYdx_rufCAlku0d1Kp2U5X-ShX6THZg"
              className="card__comma"
            />
            <p>
              "Kohli is regarded as one of the best contemporary batsmen in the
              world."
            </p>
            <Avatar
              src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
              variant="circle"
            />
            <h3>"-Virat Kohli"</h3>
            <p className="desc__color">"King Kohli"</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              alt="comma"
              src="https://lh3.googleusercontent.com/proxy/BNP_K2joUbhPIzLljP8L6NOalwR0GFpjuq7bxyOsvWWqDYQBf7jW2UDlAGl5mtgPN1BFj_nifF1jS9PThCYUYdx_rufCAlku0d1Kp2U5X-ShX6THZg"
              className="card__comma"
            />
            <p>
              "Kohli is regarded as one of the best contemporary batsmen in the
              world."
            </p>
            <Avatar
              src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
              variant="circle"
            />
            <h3>"-Virat Kohli"</h3>
            <p className="desc__color">"King Kohli"</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              alt="comma"
              src="https://lh3.googleusercontent.com/proxy/BNP_K2joUbhPIzLljP8L6NOalwR0GFpjuq7bxyOsvWWqDYQBf7jW2UDlAGl5mtgPN1BFj_nifF1jS9PThCYUYdx_rufCAlku0d1Kp2U5X-ShX6THZg"
              className="card__comma"
            />
            <p>
              "Kohli is regarded as one of the best contemporary batsmen in the
              world."
            </p>
            <Avatar
              src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
              variant="circle"
            />
            <h3>"-Virat Kohli"</h3>
            <p className="desc__color">"King Kohli"</p>
          </div>
        </div>
      </div>
      <hr className="footer__line" />
    </div>
  );
}
