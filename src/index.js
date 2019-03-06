import "./styles.css";
import * as _ from "lodash";

let lastBeat = new Date();

const beats = [];

document.getElementById("beat").addEventListener("click", event => {
  const now = new Date();
  const delta = now - lastBeat;
  const bpm = (1 / delta) * 60 * 1000;

  beats.push(bpm);
  if (beats.length > 5) {
    beats.shift();

    console.log(_.mean(beats));
  }

  lastBeat = now;
});
