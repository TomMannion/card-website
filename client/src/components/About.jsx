import "./About.scss";
import learning from "../assets/learning.gif";

function About() {
  const TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML =
      '<span class="wrap" style="color:red">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  return (
    <>
      <div className="about front"></div>
      <div className="back">
        <h1 className="typing">
          <a
            href=""
            className="typewrite"
            data-period="2000"
            data-type='[ "Hi, Im Tom.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
          >
            <span className="wrap"></span>
          </a>
        </h1>
        <div className="block-1 trans-back">
          A full-stack developer passionate about user experience and keeping
          the web exciting.
        </div>
        <div className="block-2 trans-back">
          <img className="learning" src={learning} alt="learning" />I am a
          recent graduate of the Makers Academy coding bootcamp, now looking for
          a job where i can continue to learn and grow.
        </div>
        <div className="back-content"></div>
      </div>
    </>
  );
}

export default About;
