import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypt-mono',
  templateUrl: './crypt-mono.component.html',
  styleUrls: ['./crypt-mono.component.css']
})
export class CryptMonoComponent implements OnInit {

  plainText;
  cypherText;

  constructor() { }

  ngOnInit() {
    this.plainText = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
                      "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
                      "W", "X", "Y", "Z"];
    this.cypherText = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                       "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                       "w", "x", "y", "z"];
  }

}
