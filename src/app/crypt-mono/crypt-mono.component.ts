import { Component, OnInit } from '@angular/core';
import { RANDOMPLAINTEXT } from '../strings';

@Component({
  selector: 'app-crypt-mono',
  templateUrl: './crypt-mono.component.html',
  styleUrls: ['./crypt-mono.component.css']
})

export class CryptMonoComponent implements OnInit {

  // Alphabet + blank arrays
  upperCase: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                    'W', 'X', 'Y', 'Z'];
  lowerCase: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                     'w', 'x', 'y', 'z'];
  blank: string[] = ['', '', '', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', '', '', '', '', '',
                '', ''];
  alphabet;
  // Constant from strings.ts
  randomPlaintext = RANDOMPLAINTEXT;
  // Indices for each array
  randomLetterIdx;
  randomPlaintextIdx;
  // Temporary text
  text;
  // Current text
  currText;
  // Random index for creating scrambled Array
  randomIdx;
  scrambledArr;
  // Booleans for radio button
  isEncrypt;
  isDecrypt;
  // Array for the boxes
  workingArr;
  otherArr;
  tempArr;

  constructor() { }

  /* Initialize anything that needs to be initialized */
  ngOnInit() {
    this.text = '';
    this.currText = '';
    this.isEncrypt = "";
    this.isDecrypt = "checked";
    this.workingArr = this.blank;
    this.otherArr = this.lowerCase;
  }

  /* When random plaintext button is clicked */
  onRandomPlainClick() {
    this.currText = ''; // Change current text to blank slate
    /* Swap encrypt and decrypt radio buttons */
    this.isEncrypt = "checked";
    this.isDecrypt = "";
    /* Swap working arrays */
    this.workingArr = this.blank;
    this.otherArr = this.upperCase;

    /* Generate random plaintext */
    this.randomPlaintextIdx = Math.floor(Math.random() * (this.randomPlaintext.length));
    this.text = this.randomPlaintext[this.randomPlaintextIdx];
    for(var i = 1; i <= this.text.length; i++) {
      this.currText += this.text.charAt(i - 1);
      if(i % 5 == 0) {
        this.currText += ' ';
      }
    }
  }

  onRandomCypherClick() {
    this.alphabet = this.upperCase; // Reset open letters
    this.currText = ''; // Change current text to blank slate
    this.isEncrypt = "";
    this.isDecrypt = "checked";
    this.workingArr = this.blank;
    this.otherArr = this.lowerCase;
    this.randomPlaintextIdx = Math.floor(Math.random() * (this.randomPlaintext.length));
    this.text = this.randomPlaintext[this.randomPlaintextIdx];
    for(var i = 1; i <= this.text.length; i++) {
      this.currText += this.text.charAt(i - 1);
      if(i % 5 == 0) {
        this.currText += ' ';
      }
    }

    this.scrambledArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

    for(var j = 0; j < 26; j++) {
      this.randomIdx = Math.floor(Math.random() * this.scrambledArr.length);
      this.scrambledArr.splice(this.randomIdx, 0, this.alphabet[j].toLowerCase());
    }
    for(var k = 0; k < this.scrambledArr.length; k++) {
      if(this.scrambledArr[k] == '') {
        this.scrambledArr.splice(k, 1);
        k--;
      }
    }

    this.currText = this.currText.replace(/A/g, this.scrambledArr[0]);
    this.currText = this.currText.replace(/B/g, this.scrambledArr[1]);
    this.currText = this.currText.replace(/C/g, this.scrambledArr[2]);
    this.currText = this.currText.replace(/D/g, this.scrambledArr[3]);
    this.currText = this.currText.replace(/E/g, this.scrambledArr[4]);
    this.currText = this.currText.replace(/F/g, this.scrambledArr[5]);
    this.currText = this.currText.replace(/G/g, this.scrambledArr[6]);
    this.currText = this.currText.replace(/H/g, this.scrambledArr[7]);
    this.currText = this.currText.replace(/I/g, this.scrambledArr[8]);
    this.currText = this.currText.replace(/J/g, this.scrambledArr[9]);
    this.currText = this.currText.replace(/K/g, this.scrambledArr[10]);
    this.currText = this.currText.replace(/L/g, this.scrambledArr[11]);
    this.currText = this.currText.replace(/M/g, this.scrambledArr[12]);
    this.currText = this.currText.replace(/N/g, this.scrambledArr[13]);
    this.currText = this.currText.replace(/O/g, this.scrambledArr[14]);
    this.currText = this.currText.replace(/P/g, this.scrambledArr[15]);
    this.currText = this.currText.replace(/Q/g, this.scrambledArr[16]);
    this.currText = this.currText.replace(/R/g, this.scrambledArr[17]);
    this.currText = this.currText.replace(/S/g, this.scrambledArr[18]);
    this.currText = this.currText.replace(/T/g, this.scrambledArr[19]);
    this.currText = this.currText.replace(/U/g, this.scrambledArr[20]);
    this.currText = this.currText.replace(/V/g, this.scrambledArr[21]);
    this.currText = this.currText.replace(/W/g, this.scrambledArr[22]);
    this.currText = this.currText.replace(/X/g, this.scrambledArr[23]);
    this.currText = this.currText.replace(/Y/g, this.scrambledArr[24]);
    this.currText = this.currText.replace(/Z/g, this.scrambledArr[25]);

  }

  onEncryptCheck() {
    this.isEncrypt = "checked";
    this.isDecrypt = "";
    this.workingArr = this.blank;
    this.otherArr = this.upperCase;
  }

  onDecryptCheck() {
    this.isEncrypt = "";
    this.isDecrypt = "checked";
    this.workingArr = this.blank;
    this.otherArr = this.lowerCase;
  }

}
