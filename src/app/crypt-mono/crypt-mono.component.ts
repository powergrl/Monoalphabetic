import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypt-mono',
  templateUrl: './crypt-mono.component.html',
  styleUrls: ['./crypt-mono.component.css']
})
export class CryptMonoComponent implements OnInit {

  alphabet;

  constructor() { }

  ngOnInit() {
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  }

}
