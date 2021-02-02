import { Entry } from './journal.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(".btn").click(function(event) {
  event.preventDefault();
  const title = $("#journalTitle").val();
  const body = $("#journalBody").val();
  let entry = new Entry(title, body);
  if (this.id === "words") {
    let words = entry.numOfWords();
    $(".output").prepend(`<p>Your entry has ${words} word(s) (including title.)</p>`);
  } else if (this.id === "vowels") {
    let num = entry.vowels();
    $(".output").prepend(`<p> ${num}</p>`);
  } else if (this.id === "teaser") {
    let teaser = entry.getTeaser();
    $(".output").prepend(`<p> ${teaser} </p>`);
  } else {
    $("form")[0].reset();
    $(".output").empty();
  }
});