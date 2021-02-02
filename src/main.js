import { Entry } from './journal.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$("form").submit(function(event) {
  event.preventDefault();
  const title = $("#journalTitle").val();
  const body = $("#journalBody").val();
  let entry = new Entry(title, body);
  let words = entry.numOfWords();
  let num = entry.vowels();
  let teaser = entry.getTeaser();
  console.log(teaser);
});