import { Component, OnInit } from '@angular/core';
import { RANDOMPLAINTEXT, UPPERCASE, LOWERCASE, TMPARR, FREQUENCIES } from '../strings';

@Component({
  selector: 'app-crypt-mono',
  templateUrl: './crypt-mono.component.html',
  styleUrls: ['./crypt-mono.component.css']
})

export class CryptMonoComponent implements OnInit {
  // Alphabet + blank arrays
  upperCase = UPPERCASE;
  lowerCase = LOWERCASE;

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
  // Original text
  originalText;
  // Random index for creating scrambled Array
  randomIdx;
  scrambledArr;
  // Booleans for radio button
  isEncrypt;
  isDecrypt;
  // Array for the boxes
  workingEncrypt;
  workingDecrypt;
  tempEncrypt;
  tempDecrypt;
  cypherArr;
  plaintextArr;
  // Boolean for Panel
  isMain;
  isBreak;
  // Status for break Panel
  status;
  showAllNo;
  showAllYes;
  // Arrays for Frequency
  plaintextFrequency;
  cyphertextFrequency;
  searchTerm;
  possibleTerms;
  uniqueLetters;
  estats;
  etotal;
  freqResults;
  chiResults;
  conflictResults;
  possibleTermIdx;
  listIdx;
  hasNext10;
  hasPrev10;
  tmp;
  // Values for radio buttons
  list0;
  list1;
  list2;
  list3;
  list4;
  list5;
  list6;
  list7;
  list8;
  list9;
  chosenWord;

  sortByChi;
  sortByFreq;

  constructor() { }

  /* Initialize anything that needs to be initialized */
  ngOnInit() {
    this.text = '';
    this.currText = '';
    this.originalText = '';
    this.isEncrypt = "";
    this.isDecrypt = "checked";
    this.isMain = "true";
    this.isBreak = "";
    this.workingEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.workingDecrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.tempEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.tempEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.cypherArr = this.lowerCase;
    this.plaintextArr = this.upperCase;
    this.status = "Ready";
    this.showAllYes = "checked";
    this.showAllNo = "";
    this.listIdx = 0;
    this.hasNext10 = false;
    this.hasPrev10 = false;
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.sortByChi = true;
    this.sortByFreq = false;
    this.plaintextFrequency = FREQUENCIES;
  }

  /* When random plaintext button is clicked */
  onRandomPlainClick() {
    this.currText = ''; // Change current text to blank slate
    /* Swap encrypt and decrypt radio buttons */
    this.isEncrypt = "checked";
    this.isDecrypt = "";
    /* Swap working arrays */
    this.workingEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.workingDecrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.plaintextArr = this.upperCase;

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
    this.workingDecrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.workingEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.tempDecrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.tempEncrypt = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    this.cypherArr = this.lowerCase;
    this.randomPlaintextIdx = Math.floor(Math.random() * (this.randomPlaintext.length));
    this.text = this.randomPlaintext[this.randomPlaintextIdx];
    this.plaintextFrequency = FREQUENCIES;
    this.cyphertextFrequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

    if(this.scrambledArr[0] == 'a') {
      this.scrambledArr.splice(0, 1);
      this.scrambledArr.splice(25, 0, 'a');
    }
    if(this.scrambledArr[1] == 'b') {
      this.scrambledArr.splice(1, 1);
      this.scrambledArr.splice(25, 0, 'b');
    }
    if(this.scrambledArr[2] == 'c') {
      this.scrambledArr.splice(2, 1);
      this.scrambledArr.splice(25, 0, 'c');
    }
    if(this.scrambledArr[3] == 'd') {
      this.scrambledArr.splice(3, 1);
      this.scrambledArr.splice(25, 0, 'd');
    }
    if(this.scrambledArr[4] == 'e') {
      this.scrambledArr.splice(4, 1);
      this.scrambledArr.splice(25, 0, 'e');
    }
    if(this.scrambledArr[5] == 'f') {
      this.scrambledArr.splice(5, 1);
      this.scrambledArr.splice(25, 0, 'f');
    }
    if(this.scrambledArr[6] == 'g') {
      this.scrambledArr.splice(6, 1);
      this.scrambledArr.splice(25, 0, 'g');
    }
    if(this.scrambledArr[7] == 'h') {
      this.scrambledArr.splice(7, 1);
      this.scrambledArr.splice(25, 0, 'h');
    }
    if(this.scrambledArr[8] == 'i') {
      this.scrambledArr.splice(8, 1);
      this.scrambledArr.splice(25, 0, 'i');
    }
    if(this.scrambledArr[9] == 'j') {
      this.scrambledArr.splice(9, 1);
      this.scrambledArr.splice(25, 0, 'j');
    }
    if(this.scrambledArr[10] == 'k') {
      this.scrambledArr.splice(10, 1);
      this.scrambledArr.splice(25, 0, 'k');
    }
    if(this.scrambledArr[11] == 'l') {
      this.scrambledArr.splice(11, 1);
      this.scrambledArr.splice(25, 0, 'l');
    }
    if(this.scrambledArr[12] == 'm') {
      this.scrambledArr.splice(12, 1);
      this.scrambledArr.splice(25, 0, 'm');
    }
    if(this.scrambledArr[13] == 'n') {
      this.scrambledArr.splice(13, 1);
      this.scrambledArr.splice(25, 0, 'n');
    }
    if(this.scrambledArr[14] == 'o') {
      this.scrambledArr.splice(14, 1);
      this.scrambledArr.splice(25, 0, 'o');
    }
    if(this.scrambledArr[15] == 'p') {
      this.scrambledArr.splice(15, 1);
      this.scrambledArr.splice(25, 0, 'p');
    }
    if(this.scrambledArr[16] == 'q') {
      this.scrambledArr.splice(16, 1);
      this.scrambledArr.splice(25, 0, 'q');
    }
    if(this.scrambledArr[17] == 'r') {
      this.scrambledArr.splice(17, 1);
      this.scrambledArr.splice(25, 0, 'r');
    }
    if(this.scrambledArr[18] == 's') {
      this.scrambledArr.splice(18, 1);
      this.scrambledArr.splice(25, 0, 's');
    }
    if(this.scrambledArr[19] == 't') {
      this.scrambledArr.splice(19, 1);
      this.scrambledArr.splice(25, 0, 't');
    }
    if(this.scrambledArr[20] == 'u') {
      this.scrambledArr.splice(20, 1);
      this.scrambledArr.splice(25, 0, 'u');
    }
    if(this.scrambledArr[21] == 'v') {
      this.scrambledArr.splice(21, 1);
      this.scrambledArr.splice(25, 0, 'v');
    }
    if(this.scrambledArr[22] == 'w') {
      this.scrambledArr.splice(22, 1);
      this.scrambledArr.splice(25, 0, 'w');
    }
    if(this.scrambledArr[23] == 'x') {
      this.scrambledArr.splice(23, 1);
      this.scrambledArr.splice(25, 0, 'x');
    }
    if(this.scrambledArr[24] == 'y') {
      this.scrambledArr.splice(24, 1);
      this.scrambledArr.splice(25, 0, 'y');
    }
    if(this.scrambledArr[25] == 'z') {
      this.scrambledArr.splice(25, 1);
      this.scrambledArr.splice(24, 0, 'z');
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

    this.text = this.text.replace(/A/g, this.scrambledArr[0]);
    this.text = this.text.replace(/B/g, this.scrambledArr[1]);
    this.text = this.text.replace(/C/g, this.scrambledArr[2]);
    this.text = this.text.replace(/D/g, this.scrambledArr[3]);
    this.text = this.text.replace(/E/g, this.scrambledArr[4]);
    this.text = this.text.replace(/F/g, this.scrambledArr[5]);
    this.text = this.text.replace(/G/g, this.scrambledArr[6]);
    this.text = this.text.replace(/H/g, this.scrambledArr[7]);
    this.text = this.text.replace(/I/g, this.scrambledArr[8]);
    this.text = this.text.replace(/J/g, this.scrambledArr[9]);
    this.text = this.text.replace(/K/g, this.scrambledArr[10]);
    this.text = this.text.replace(/L/g, this.scrambledArr[11]);
    this.text = this.text.replace(/M/g, this.scrambledArr[12]);
    this.text = this.text.replace(/N/g, this.scrambledArr[13]);
    this.text = this.text.replace(/O/g, this.scrambledArr[14]);
    this.text = this.text.replace(/P/g, this.scrambledArr[15]);
    this.text = this.text.replace(/Q/g, this.scrambledArr[16]);
    this.text = this.text.replace(/R/g, this.scrambledArr[17]);
    this.text = this.text.replace(/S/g, this.scrambledArr[18]);
    this.text = this.text.replace(/T/g, this.scrambledArr[19]);
    this.text = this.text.replace(/U/g, this.scrambledArr[20]);
    this.text = this.text.replace(/V/g, this.scrambledArr[21]);
    this.text = this.text.replace(/W/g, this.scrambledArr[22]);
    this.text = this.text.replace(/X/g, this.scrambledArr[23]);
    this.text = this.text.replace(/Y/g, this.scrambledArr[24]);
    this.text = this.text.replace(/Z/g, this.scrambledArr[25]);

    for(var m = 0; m < this.currText.length; m++) {
      if(this.currText.charAt(m) == 'a') {
        this.cyphertextFrequency[0]++;
      } else if(this.currText.charAt(m) == 'b') {
        this.cyphertextFrequency[1]++;
      } else if(this.currText.charAt(m) == 'c') {
        this.cyphertextFrequency[2]++;
      } else if(this.currText.charAt(m) == 'd') {
        this.cyphertextFrequency[3]++;
      } else if(this.currText.charAt(m) == 'e') {
        this.cyphertextFrequency[4]++;
      } else if(this.currText.charAt(m) == 'f') {
        this.cyphertextFrequency[5]++;
      } else if(this.currText.charAt(m) == 'g') {
        this.cyphertextFrequency[6]++;
      } else if(this.currText.charAt(m) == 'h') {
        this.cyphertextFrequency[7]++;
      } else if(this.currText.charAt(m) == 'i') {
        this.cyphertextFrequency[8]++;
      } else if(this.currText.charAt(m) == 'j') {
        this.cyphertextFrequency[9]++;
      } else if(this.currText.charAt(m) == 'k') {
        this.cyphertextFrequency[10]++;
      } else if(this.currText.charAt(m) == 'l') {
        this.cyphertextFrequency[11]++;
      } else if(this.currText.charAt(m) == 'm') {
        this.cyphertextFrequency[12]++;
      } else if(this.currText.charAt(m) == 'n') {
        this.cyphertextFrequency[13]++;
      } else if(this.currText.charAt(m) == 'o') {
        this.cyphertextFrequency[14]++;
      } else if(this.currText.charAt(m) == 'p') {
        this.cyphertextFrequency[15]++;
      } else if(this.currText.charAt(m) == 'q') {
        this.cyphertextFrequency[16]++;
      } else if(this.currText.charAt(m) == 'r') {
        this.cyphertextFrequency[17]++;
      } else if(this.currText.charAt(m) == 's') {
        this.cyphertextFrequency[18]++;
      } else if(this.currText.charAt(m) == 't') {
        this.cyphertextFrequency[19]++;
      } else if(this.currText.charAt(m) == 'u') {
        this.cyphertextFrequency[20]++;
      } else if(this.currText.charAt(m) == 'v') {
        this.cyphertextFrequency[21]++;
      } else if(this.currText.charAt(m) == 'w') {
        this.cyphertextFrequency[22]++;
      } else if(this.currText.charAt(m) == 'x') {
        this.cyphertextFrequency[23]++;
      } else if(this.currText.charAt(m) == 'y') {
        this.cyphertextFrequency[24]++;
      } else if(this.currText.charAt(m) == 'z') {
        this.cyphertextFrequency[25]++;
      }
    }
    this.originalText = "" + this.text;
  }

  onEncryptCheck() {
    this.isEncrypt = "checked";
    this.isDecrypt = "";
  }

  onDecryptCheck() {
    this.isEncrypt = "";
    this.isDecrypt = "checked";
  }

  onKeyDecrypt(event: any, i) {
    if(event.keyCode == 8 && this.tempDecrypt[i]) {
      if(this.tempDecrypt[i] == 'A') {
        this.currText = this.currText.replace(/A/g, this.cypherArr[i]);
        this.text = this.text.replace(/A/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'B') {
        this.currText = this.currText.replace(/B/g, this.cypherArr[i]);
        this.text = this.text.replace(/B/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'C') {
        this.currText = this.currText.replace(/C/g, this.cypherArr[i]);
        this.text = this.text.replace(/C/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'D') {
        this.currText = this.currText.replace(/D/g, this.cypherArr[i]);
        this.text = this.text.replace(/D/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'E') {
        this.currText = this.currText.replace(/E/g, this.cypherArr[i]);
        this.text = this.text.replace(/E/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'F') {
        this.currText = this.currText.replace(/F/g, this.cypherArr[i]);
        this.text = this.text.replace(/F/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'G') {
        this.currText = this.currText.replace(/G/g, this.cypherArr[i]);
        this.text = this.text.replace(/G/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'H') {
        this.currText = this.currText.replace(/H/g, this.cypherArr[i]);
        this.text = this.text.replace(/H/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'I') {
        this.currText = this.currText.replace(/I/g, this.cypherArr[i]);
        this.text = this.text.replace(/I/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'J') {
        this.currText = this.currText.replace(/J/g, this.cypherArr[i]);
        this.text = this.text.replace(/J/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'K') {
        this.currText = this.currText.replace(/K/g, this.cypherArr[i]);
        this.text = this.text.replace(/K/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'L') {
        this.currText = this.currText.replace(/L/g, this.cypherArr[i]);
        this.text = this.text.replace(/L/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'M') {
        this.currText = this.currText.replace(/M/g, this.cypherArr[i]);
        this.text = this.text.replace(/M/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'N') {
        this.currText = this.currText.replace(/N/g, this.cypherArr[i]);
        this.text = this.text.replace(/N/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'O') {
        this.currText = this.currText.replace(/O/g, this.cypherArr[i]);
        this.text = this.text.replace(/O/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'P') {
        this.currText = this.currText.replace(/P/g, this.cypherArr[i]);
        this.text = this.text.replace(/P/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'Q') {
        this.currText = this.currText.replace(/Q/g, this.cypherArr[i]);
        this.text = this.text.replace(/Q/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'R') {
        this.currText = this.currText.replace(/R/g, this.cypherArr[i]);
        this.text = this.text.replace(/R/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'S') {
        this.currText = this.currText.replace(/S/g, this.cypherArr[i]);
        this.text = this.text.replace(/S/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'T') {
        this.currText = this.currText.replace(/T/g, this.cypherArr[i]);
        this.text = this.text.replace(/T/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'U') {
        this.currText = this.currText.replace(/U/g, this.cypherArr[i]);
        this.text = this.text.replace(/U/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'V') {
        this.currText = this.currText.replace(/V/g, this.cypherArr[i]);
        this.text = this.text.replace(/V/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'W') {
        this.currText = this.currText.replace(/W/g, this.cypherArr[i]);
        this.text = this.text.replace(/W/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'X') {
        this.currText = this.currText.replace(/X/g, this.cypherArr[i]);
        this.text = this.text.replace(/X/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'Y') {
        this.currText = this.currText.replace(/Y/g, this.cypherArr[i]);
        this.text = this.text.replace(/Y/g, this.cypherArr[i]);
      } else if(this.tempDecrypt[i] == 'Z') {
        this.currText = this.currText.replace(/Z/g, this.cypherArr[i]);
        this.text = this.text.replace(/Z/g, this.cypherArr[i]);
      }
      this.tempDecrypt[i] = '';
    }
    if(event.keyCode >= 65 && event.keyCode <= 90) {
      var letter = event.target.value;
      this.workingDecrypt[i] = '';
      /* Check first if the key exists */
      var idx = this.workingDecrypt.indexOf(event.target.value.toUpperCase());
      if(idx >= 0) {
        if(this.workingDecrypt[idx] == 'A') {
          this.currText = this.currText.replace(/A/g, this.cypherArr[idx]);
          this.text = this.text.replace(/A/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'B') {
          this.currText = this.currText.replace(/B/g, this.cypherArr[idx]);
          this.text = this.text.replace(/B/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'C') {
          this.currText = this.currText.replace(/C/g, this.cypherArr[idx]);
          this.text = this.text.replace(/C/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'D') {
          this.currText = this.currText.replace(/D/g, this.cypherArr[idx]);
          this.text = this.text.replace(/D/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'E') {
          this.currText = this.currText.replace(/E/g, this.cypherArr[idx]);
          this.text = this.text.replace(/E/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'F') {
          this.currText = this.currText.replace(/F/g, this.cypherArr[idx]);
          this.text = this.text.replace(/F/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'G') {
          this.currText = this.currText.replace(/G/g, this.cypherArr[idx]);
          this.text = this.text.replace(/G/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'H') {
          this.currText = this.currText.replace(/H/g, this.cypherArr[idx]);
          this.text = this.text.replace(/H/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'I') {
          this.currText = this.currText.replace(/I/g, this.cypherArr[idx]);
          this.text = this.text.replace(/I/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'J') {
          this.currText = this.currText.replace(/J/g, this.cypherArr[idx]);
          this.text = this.text.replace(/J/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'K') {
          this.currText = this.currText.replace(/K/g, this.cypherArr[idx]);
          this.text = this.text.replace(/K/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'L') {
          this.currText = this.currText.replace(/L/g, this.cypherArr[idx]);
          this.text = this.text.replace(/L/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'M') {
          this.currText = this.currText.replace(/M/g, this.cypherArr[idx]);
          this.text = this.text.replace(/M/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'N') {
          this.currText = this.currText.replace(/N/g, this.cypherArr[idx]);
          this.text = this.text.replace(/N/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'O') {
          this.currText = this.currText.replace(/O/g, this.cypherArr[idx]);
          this.text = this.text.replace(/O/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'P') {
          this.currText = this.currText.replace(/P/g, this.cypherArr[idx]);
          this.text = this.text.replace(/P/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'Q') {
          this.currText = this.currText.replace(/Q/g, this.cypherArr[idx]);
          this.text = this.text.replace(/Q/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'R') {
          this.currText = this.currText.replace(/R/g, this.cypherArr[idx]);
          this.text = this.text.replace(/R/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'S') {
          this.currText = this.currText.replace(/S/g, this.cypherArr[idx]);
          this.text = this.text.replace(/S/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'T') {
          this.currText = this.currText.replace(/T/g, this.cypherArr[idx]);
          this.text = this.text.replace(/T/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'U') {
          this.currText = this.currText.replace(/U/g, this.cypherArr[idx]);
          this.text = this.text.replace(/U/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'V') {
          this.currText = this.currText.replace(/V/g, this.cypherArr[idx]);
          this.text = this.text.replace(/V/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'W') {
          this.currText = this.currText.replace(/W/g, this.cypherArr[idx]);
          this.text = this.text.replace(/W/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'X') {
          this.currText = this.currText.replace(/X/g, this.cypherArr[idx]);
          this.text = this.text.replace(/X/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'Y') {
          this.currText = this.currText.replace(/Y/g, this.cypherArr[idx]);
          this.text = this.text.replace(/Y/g, this.cypherArr[idx]);
        } else if(this.workingDecrypt[idx] == 'Z') {
          this.currText = this.currText.replace(/Z/g, this.cypherArr[idx]);
          this.text = this.text.replace(/Z/g, this.cypherArr[idx]);
        }
        this.workingDecrypt[idx] = '';
      }
      this.workingDecrypt[i] = letter;
      /* Set the value on the opposite array */
      this.workingEncrypt[this.cypherArr.indexOf(event.target.value.toLowerCase())] = this.cypherArr[i];
      /* Change the value to a capital letter */
      this.workingDecrypt[i] = event.target.value.toUpperCase();
      event.target.value = event.target.value.toUpperCase();
      /* Manually check which value it is */
      if(this.cypherArr[i] == 'a') {
        this.currText = this.currText.replace(/a/g, event.target.value);
        this.text = this.text.replace(/a/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'b') {
        this.currText = this.currText.replace(/b/g, event.target.value);
        this.text = this.text.replace(/b/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'c') {
        this.currText = this.currText.replace(/c/g, event.target.value);
        this.text = this.text.replace(/c/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'd') {
        this.currText = this.currText.replace(/d/g, event.target.value);
        this.text = this.text.replace(/d/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'e') {
        this.currText = this.currText.replace(/e/g, event.target.value);
        this.text = this.text.replace(/e/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'f') {
        this.currText = this.currText.replace(/f/g, event.target.value);
        this.text = this.text.replace(/f/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'g') {
        this.currText = this.currText.replace(/g/g, event.target.value);
        this.text = this.text.replace(/g/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'h') {
        this.currText = this.currText.replace(/h/g, event.target.value);
        this.text = this.text.replace(/h/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'i') {
        this.currText = this.currText.replace(/i/g, event.target.value);
        this.text = this.text.replace(/i/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'j') {
        this.currText = this.currText.replace(/j/g, event.target.value);
        this.text = this.text.replace(/j/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'k') {
        this.currText = this.currText.replace(/k/g, event.target.value);
        this.text = this.text.replace(/k/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'l') {
        this.currText = this.currText.replace(/l/g, event.target.value);
        this.text = this.text.replace(/l/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'm') {
        this.currText = this.currText.replace(/m/g, event.target.value);
        this.text = this.text.replace(/m/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'n') {
        this.currText = this.currText.replace(/n/g, event.target.value);
        this.text = this.text.replace(/n/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'o') {
        this.currText = this.currText.replace(/o/g, event.target.value);
        this.text = this.text.replace(/o/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'p') {
        this.currText = this.currText.replace(/p/g, event.target.value);
        this.text = this.text.replace(/p/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'q') {
        this.currText = this.currText.replace(/q/g, event.target.value);
        this.text = this.text.replace(/q/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'r') {
        this.currText = this.currText.replace(/r/g, event.target.value);
        this.text = this.text.replace(/r/g, event.target.value);
      }
      else if(this.cypherArr[i] == 's') {
        this.currText = this.currText.replace(/s/g, event.target.value);
        this.text = this.text.replace(/s/g, event.target.value);
      }
      else if(this.cypherArr[i] == 't') {
        this.currText = this.currText.replace(/t/g, event.target.value);
        this.text = this.text.replace(/t/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'u') {
        this.currText = this.currText.replace(/u/g, event.target.value);
        this.text = this.text.replace(/u/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'v') {
        this.currText = this.currText.replace(/v/g, event.target.value);
        this.text = this.text.replace(/v/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'w') {
        this.currText = this.currText.replace(/w/g, event.target.value);
        this.text = this.text.replace(/w/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'x') {
        this.currText = this.currText.replace(/x/g, event.target.value);
        this.text = this.text.replace(/x/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'y') {
        this.currText = this.currText.replace(/y/g, event.target.value);
        this.text = this.text.replace(/y/g, event.target.value);
      }
      else if(this.cypherArr[i] == 'z') {
        this.currText = this.currText.replace(/z/g, event.target.value);
        this.text = this.text.replace(/z/g, event.target.value);
      }
    }
    this.tempDecrypt[i] = "" + this.workingDecrypt[i];
    this.tempEncrypt[i] = "" + this.workingEncrypt[i];
  }

  onKeyEncrypt(event: any, i) {
    if(event.keyCode < 65 || event.keyCode > 90) {
      return;
    }
    var letter = event.target.value;
    this.workingEncrypt[i] = '';
    /* Check first if the key exists */
    var idx = this.workingEncrypt.indexOf(event.target.value.toLowerCase());
    if(idx >= 0) {
      if(this.workingEncrypt[idx] == 'a') {
        this.currText = this.currText.replace(/a/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/a/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'b') {
        this.currText = this.currText.replace(/b/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/b/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'c') {
        this.currText = this.currText.replace(/c/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/c/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'd') {
        this.currText = this.currText.replace(/d/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/d/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'e') {
        this.currText = this.currText.replace(/e/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/e/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'f') {
        this.currText = this.currText.replace(/f/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/f/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'g') {
        this.currText = this.currText.replace(/g/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/g/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'h') {
        this.currText = this.currText.replace(/h/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/h/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'i') {
        this.currText = this.currText.replace(/i/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/i/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'j') {
        this.currText = this.currText.replace(/j/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/j/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'k') {
        this.currText = this.currText.replace(/k/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/k/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'l') {
        this.currText = this.currText.replace(/l/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/l/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'm') {
        this.currText = this.currText.replace(/m/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/m/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'n') {
        this.currText = this.currText.replace(/n/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/n/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'o') {
        this.currText = this.currText.replace(/o/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/o/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'p') {
        this.currText = this.currText.replace(/p/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/p/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'q') {
        this.currText = this.currText.replace(/q/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/q/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'r') {
        this.currText = this.currText.replace(/r/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/r/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 's') {
        this.currText = this.currText.replace(/s/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/s/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 't') {
        this.currText = this.currText.replace(/t/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/t/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'u') {
        this.currText = this.currText.replace(/u/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/u/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'v') {
        this.currText = this.currText.replace(/v/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/v/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'w') {
        this.currText = this.currText.replace(/w/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/w/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'x') {
        this.currText = this.currText.replace(/x/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/x/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'y') {
        this.currText = this.currText.replace(/y/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/y/g, this.plaintextArr[idx]);
      }
      else if(this.workingEncrypt[idx] == 'z') {
        this.currText = this.currText.replace(/z/g, this.plaintextArr[idx]);
        this.text = this.text.replace(/z/g, this.plaintextArr[idx]);
      }
      this.workingEncrypt[idx] = '';
    }
    this.workingEncrypt[i] = letter;
    /* Set the value on the opposite array */
    this.workingDecrypt[this.cypherArr.indexOf(event.target.value.toLowerCase())] = this.plaintextArr[i];
    /* Change the value to a lower case letter */
    this.workingEncrypt[i] = event.target.value.toLowerCase();
    event.target.value = event.target.value.toLowerCase();
    /* Manually check which value it is */
    if(this.plaintextArr[i] == 'A') {
      this.currText = this.currText.replace(/A/g, event.target.value);
      this.text = this.text.replace(/A/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'B') {
      this.currText = this.currText.replace(/B/g, event.target.value);
      this.text = this.text.replace(/B/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'C') {
      this.currText = this.currText.replace(/C/g, event.target.value);
      this.text = this.text.replace(/C/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'D') {
      this.currText = this.currText.replace(/D/g, event.target.value);
      this.text = this.text.replace(/D/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'E') {
      this.currText = this.currText.replace(/E/g, event.target.value);
      this.text = this.text.replace(/E/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'F') {
      this.currText = this.currText.replace(/F/g, event.target.value);
      this.text = this.text.replace(/F/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'G') {
      this.currText = this.currText.replace(/G/g, event.target.value);
      this.text = this.text.replace(/G/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'H') {
      this.currText = this.currText.replace(/H/g, event.target.value);
      this.text = this.text.replace(/H/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'I') {
      this.currText = this.currText.replace(/I/g, event.target.value);
      this.text = this.text.replace(/I/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'J') {
      this.currText = this.currText.replace(/J/g, event.target.value);
      this.text = this.text.replace(/J/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'K') {
      this.currText = this.currText.replace(/K/g, event.target.value);
      this.text = this.text.replace(/K/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'L') {
      this.currText = this.currText.replace(/L/g, event.target.value);
      this.text = this.text.replace(/L/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'M') {
      this.currText = this.currText.replace(/M/g, event.target.value);
      this.text = this.text.replace(/M/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'N') {
      this.currText = this.currText.replace(/N/g, event.target.value);
      this.text = this.text.replace(/N/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'O') {
      this.currText = this.currText.replace(/O/g, event.target.value);
      this.text = this.text.replace(/O/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'P') {
      this.currText = this.currText.replace(/P/g, event.target.value);
      this.text = this.text.replace(/P/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'Q') {
      this.currText = this.currText.replace(/Q/g, event.target.value);
      this.text = this.text.replace(/Q/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'R') {
      this.currText = this.currText.replace(/R/g, event.target.value);
      this.text = this.text.replace(/R/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'S') {
      this.currText = this.currText.replace(/S/g, event.target.value);
      this.text = this.text.replace(/S/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'T') {
      this.currText = this.currText.replace(/T/g, event.target.value);
      this.text = this.text.replace(/T/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'U') {
      this.currText = this.currText.replace(/U/g, event.target.value);
      this.text = this.text.replace(/U/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'V') {
      this.currText = this.currText.replace(/V/g, event.target.value);
      this.text = this.text.replace(/V/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'W') {
      this.currText = this.currText.replace(/W/g, event.target.value);
      this.text = this.text.replace(/W/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'X') {
      this.currText = this.currText.replace(/X/g, event.target.value);
      this.text = this.text.replace(/X/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'Y') {
      this.currText = this.currText.replace(/Y/g, event.target.value);
      this.text = this.text.replace(/Y/g, event.target.value);
    }
    else if(this.plaintextArr[i] == 'Z') {
      this.currText = this.currText.replace(/Z/g, event.target.value);
      this.text = this.text.replace(/Z/g, event.target.value);
    }
  }

  onBreakClick() {
    this.isMain = "";
    this.isBreak = "true";
    this.searchTerm = "";
    this.possibleTerms = "";
    this.hasNext10 = false;
    this.hasPrev10 = false;
    this.status = "Ready"
  }

  onOkayClick() {
    this.isBreak = "";
    this.isMain = "true";
    this.chosenWord = "";
    if(this.list0) {
      this.chosenWord = this.possibleTerms[this.listIdx];
      if(this.conflictResults[this.listIdx]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list1) {
      this.chosenWord = this.possibleTerms[this.listIdx + 1];
      if(this.conflictResults[this.listIdx + 1]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 1].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list2) {
      this.chosenWord = this.possibleTerms[this.listIdx + 2];
      if(this.conflictResults[this.listIdx + 2]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 2].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list3) {
      this.chosenWord = this.possibleTerms[this.listIdx + 3];
      if(this.conflictResults[this.listIdx + 3]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 3].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list4) {
      this.chosenWord = this.possibleTerms[this.listIdx + 4];
      if(this.conflictResults[this.listIdx + 4]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 4].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list5) {
      this.chosenWord = this.possibleTerms[this.listIdx + 5];
      if(this.conflictResults[this.listIdx + 5]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 5].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list6) {
      this.chosenWord = this.possibleTerms[this.listIdx + 6];
      if(this.conflictResults[this.listIdx + 6]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 6].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list7) {
      this.chosenWord = this.possibleTerms[this.listIdx + 7];
      if(this.conflictResults[this.listIdx + 7]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 7].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list8) {
      this.chosenWord = this.possibleTerms[this.listIdx + 8];
      if(this.conflictResults[this.listIdx + 8]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 8].charAt(i))] = this.searchTerm.charAt(i);
      }
    }
    if(this.list9) {
      this.chosenWord = this.possibleTerms[this.listIdx + 9];
      if(this.conflictResults[this.listIdx + 9]) {
        for(var m = 0; m < this.chosenWord.length; m++) {
          if(this.workingDecrypt.indexOf(this.searchTerm.charAt(m)) >= 0) {
            this.replaceForList(this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(m))], m);
          }
        }
      }
      for(var i = 0; i < this.searchTerm.length; i++) {
        this.workingDecrypt[this.cypherArr.indexOf(this.possibleTerms[this.listIdx + 9].charAt(i))] = this.searchTerm.charAt(i);
      }
    }

    for(var j = 0; j < this.chosenWord.length; j++) {
      if(this.chosenWord.charAt(j) == 'a') {
        this.text = this.text.replace(/a/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'b') {
        this.text = this.text.replace(/b/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'c') {
        this.text = this.text.replace(/c/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'd') {
        this.text = this.text.replace(/d/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'e') {
        this.text = this.text.replace(/e/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'f') {
        this.text = this.text.replace(/f/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'g') {
        this.text = this.text.replace(/g/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'h') {
        this.text = this.text.replace(/h/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'i') {
        this.text = this.text.replace(/i/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'j') {
        this.text = this.text.replace(/j/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'k') {
        this.text = this.text.replace(/k/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'l') {
        this.text = this.text.replace(/l/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'm') {
        this.text = this.text.replace(/m/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'n') {
        this.text = this.text.replace(/n/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'o') {
        this.text = this.text.replace(/o/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'p') {
        this.text = this.text.replace(/p/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'q') {
        this.text = this.text.replace(/q/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'r') {
        this.text = this.text.replace(/r/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 's') {
        this.text = this.text.replace(/s/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 't') {
        this.text = this.text.replace(/t/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'u') {
        this.text = this.text.replace(/u/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'v') {
        this.text = this.text.replace(/v/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'w') {
        this.text = this.text.replace(/w/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'x') {
        this.text = this.text.replace(/x/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'y') {
        this.text = this.text.replace(/y/g, this.searchTerm.charAt(j));
      }
      else if(this.chosenWord.charAt(j) == 'z') {
        this.text = this.text.replace(/z/g, this.searchTerm.charAt(j));
      }
    }
    this.currText = '';
    for(var k = 1; k <= this.text.length; k++) {
      this.currText += this.text.charAt(k - 1);
      if(k % 5 == 0) {
        this.currText += ' ';
      }
    }
  }

  replaceForList(letter, i) {
    if(letter == 'A') {
      this.currText = this.currText.replace(/A/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/A/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'B') {
      this.currText = this.currText.replace(/B/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/B/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'C') {
      this.currText = this.currText.replace(/C/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/C/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'D') {
      this.currText = this.currText.replace(/D/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/D/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'E') {
      this.currText = this.currText.replace(/E/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/E/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'F') {
      this.currText = this.currText.replace(/F/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/F/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'G') {
      this.currText = this.currText.replace(/G/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/G/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'H') {
      this.currText = this.currText.replace(/H/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/H/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'I') {
      this.currText = this.currText.replace(/I/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/I/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'J') {
      this.currText = this.currText.replace(/J/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/J/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'K') {
      this.currText = this.currText.replace(/K/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/K/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'L') {
      this.currText = this.currText.replace(/L/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/L/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'M') {
      this.currText = this.currText.replace(/M/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/M/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'N') {
      this.currText = this.currText.replace(/N/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/N/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'O') {
      this.currText = this.currText.replace(/O/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/O/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'P') {
      this.currText = this.currText.replace(/P/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/P/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'Q') {
      this.currText = this.currText.replace(/Q/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/Q/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'R') {
      this.currText = this.currText.replace(/R/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/R/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'S') {
      this.currText = this.currText.replace(/S/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/S/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'T') {
      this.currText = this.currText.replace(/T/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/T/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'U') {
      this.currText = this.currText.replace(/U/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/U/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'V') {
      this.currText = this.currText.replace(/V/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/V/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'W') {
      this.currText = this.currText.replace(/W/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/W/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'X') {
      this.currText = this.currText.replace(/X/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/X/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'Y') {
      this.currText = this.currText.replace(/Y/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/Y/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    } else if(letter == 'Z') {
      this.currText = this.currText.replace(/Z/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.text = this.text.replace(/Z/g, this.cypherArr[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))]);
      this.workingDecrypt[this.workingDecrypt.indexOf(this.searchTerm.charAt(i))] = '';
    }
  }

  onYesClick() {
    this.showAllNo = "";
    this.showAllYes = "true";
  }

  onNoClick() {
    this.showAllYes = "";
    this.showAllNo = "true";
  }

  onSearch() {
    this.status = "Searching..."
    this.possibleTermIdx = 0;
    this.listIdx = 0;
    var wordArray = this.convertToArraySearchTerm();
    this.estats = [];
    this.etotal = 0;
    for(var i = 0; i < this.uniqueLetters.length; i++) {
      this.estats[i] = this.plaintextFrequency[this.plaintextArr.indexOf(this.searchTerm.charAt(this.uniqueLetters[i]))];
      this.etotal += this.estats[i];
    }
    var n = this.searchTerm.length;
    var m = this.text.length - n + 1;
    var ind;
    var conflictLength;
    this.possibleTerms = [];
    this.freqResults = [];
    this.chiResults = [];
    this.conflictResults = [];
    for(var j = 0; j < m; j++) {
      this.freqResults[j] = 0;
      this.chiResults[j] = 0.0;
      var tmp = this.originalText.substring(j, j + n);
      if(this.equalArray(this.convertToArray(tmp), wordArray)) {
        ind = this.originalText.indexOf(tmp);
        this.conflictResults[j] = this.conflict(tmp);
        if((ind == j) && (this.showAllYes || this.conflictResults[j].length == 0)) {
          this.possibleTerms[this.possibleTermIdx] = this.originalText.substring(j, j + n);
          this.possibleTermIdx++;
          this.chiResults[j] = this.chiSquare(tmp);
        }
        this.freqResults[ind]++;
      }
    }
    if(this.listIdx + 10 < this.possibleTerms.length) {
      this.hasNext10 = true;
    }
    for(var k = 0; k < this.freqResults.length; k++) {
      if(this.freqResults[k] <= 0) {
        this.freqResults.splice(k, 1);
        this.chiResults.splice(k, 1);
        this.conflictResults.splice(k, 1);
        k--;
      }
    }
    if(this.sortByChi) {
      this.sortChi(0, this.possibleTerms.length - 1);
    }
    else {
      this.sortFreq(0, this.possibleTerms.length - 1);
      this.freqResults = this.freqResults.reverse();
      this.chiResults = this.chiResults.reverse();
      this.conflictResults = this.conflictResults.reverse();
      this.possibleTerms = this.possibleTerms.reverse();
    }
    if(this.possibleTerms.length == 0) {
      this.status = "No matches found.";
    } else {
      this.status = "Search Results " + (this.listIdx + 1) + "-" + (this.listIdx + 10) + " (of " + this.possibleTerms.length + ")";
    }
  }

  onKeySearch(event: any) {
    if(event.keyCode == 13) {
      this.onSearch();
    }
    event.target.value = event.target.value.toUpperCase();
    this.searchTerm = this.searchTerm.toUpperCase();
  }

  convertToArray(str) {
    var n = str.length;
    var tmp = [];
    var k = 1;
    tmp[0] = 1;
    var index;
    for(var i = 1; i < n; i++) {
      index = str.indexOf(str.charAt(i));
      if(i == index) {
        k++;
        tmp[i] = k;
      } else {
        tmp[i] = tmp[index];
      }
    }
    return tmp;
  }

  conflict(str) {
    var out = "";
    var m;
    var x;
    var y;
    var n;
    for(var i = 0; i < this.uniqueLetters.length; i++) {
      m = this.uniqueLetters[i];
      x = this.searchTerm.charAt(m);
      y = str.charAt(m);
      n = this.workingDecrypt.indexOf(x);
      if(n >= 0 && this.cypherArr[n] != y) {
        out = out + "*";
      }
      n = this.cypherArr.indexOf(y);
      if(this.workingDecrypt[n] != '') {
        if(this.workingDecrypt[n] != x) {
          out = out + "*";
          this.status = "here" + x;
        }
      }
    }
    return out;
  }

  convertToArraySearchTerm() {
    var n = this.searchTerm.length;
    var tmp = [];
    var tmp2 = [];
    var k = 1;
    tmp[0] = 1;
    tmp2[0] = 1;
    var index;
    for(var i = 1; i < n; i++) {
      index = this.searchTerm.indexOf(this.searchTerm.charAt(i));
      if(i == index) {
        k++;
        tmp[i] = k;
        tmp2[i] = 1;
      } else {
        tmp[i] = tmp[index];
        tmp2[i] = 0;
      }
    }
    this.uniqueLetters = [];
    var j = 0;
    for(var m = 0; m < n; m++) {
      if(tmp2[m] == 1) {
        this.uniqueLetters[j] = m;
        j++;
      }
    }
    return tmp;
  }

  equalArray(array1, array2) {
    var out = true;
    var i = 0;
    while(out && (i < array1.length)) {
      if(array1[i] == array2[i]) {
        i++;
      } else {
        out = false;
      }
    }
    return out;
  }

  chiSquare(match) {
    var tmp = 0.0;
    var n = this.estats.length;
    var cstats = [];
    var ctotal = 0.0;
    for(var i = 0.0; i < this.uniqueLetters.length; i++) {
      cstats[i] = this.cyphertextFrequency[this.cypherArr.indexOf(match.charAt(this.uniqueLetters[i]))];
      ctotal += cstats[i];
    }
    for(var j = 0.0; j < n; j++) {
      tmp += Math.pow((this.etotal * cstats[j] - ctotal * this.estats[j]), 2.0) / this.estats[j];
    }
    return parseFloat(((1000.0 * tmp / (ctotal * this.etotal)) / 1000.0).toFixed(3));
  }

  onNextClick() {
    this.listIdx += 10;
    if(this.listIdx + 10 < this.possibleTerms.length) {
      this.hasNext10 = true;
    } else {
      this.hasNext10 = false;
    }
    this.hasPrev10 = true;
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    if(this.listIdx + 10 > this.possibleTerms.length) {
      this.status = "Search Results " + (this.listIdx + 1) + "-" + this.possibleTerms.length + " (of " + this.possibleTerms.length + ")";
    } else {
      this.status = "Search Results " + (this.listIdx + 1) + "-" + (this.listIdx + 10) + " (of " + this.possibleTerms.length + ")";
    }
  }

  onPrevClick() {
    this.listIdx -= 10;
    if(this.listIdx - 10 >= 0) {
      this.hasPrev10 = true;
    } else {
      this.hasPrev10 = false;
    }
    this.hasNext10 = true;
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.status = "Search Results " + (this.listIdx + 1) + "-" + (this.listIdx + 10) + "  (of " + this.possibleTerms.length + ")";
  }

  onList0Click() {
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list0 = "checked";
  }

  onList1Click() {
    this.list0 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list1 = "checked";
  }

  onList2Click() {
    this.list0 = "";
    this.list1 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list2 = "checked";
  }

  onList3Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list3 = "checked";
  }

  onList4Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list4 = "checked";
  }

  onList5Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list5 = "checked";
  }

  onList6Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "";
    this.list6 = "checked";
  }

  onList7Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list8 = "";
    this.list9 = "";
    this.list7 = "checked";
  }

  onList8Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list9 = "";
    this.list8 = "checked";
  }

  onList9Click() {
    this.list0 = "";
    this.list1 = "";
    this.list2 = "";
    this.list3 = "";
    this.list4 = "";
    this.list5 = "";
    this.list6 = "";
    this.list7 = "";
    this.list8 = "";
    this.list9 = "checked";
  }

  onChiClick() {
    this.sortByFreq = false;
    this.sortByChi = true;
    this.sortChi(0, this.possibleTerms.length - 1);
    this.listIdx = 0;
    this.hasPrev10 = false;
    this.status = "Search Results " + (this.listIdx + 1) + "-" + (this.listIdx + 10) + " (of " + this.possibleTerms.length + ")";
  }

  onFreqClick() {
    this.sortByChi = false;
    this.sortByFreq = true;
    this.sortFreq(0, this.possibleTerms.length - 1);
    this.freqResults = this.freqResults.reverse();
    this.chiResults = this.chiResults.reverse();
    this.possibleTerms = this.possibleTerms.reverse();
    this.listIdx = 0;
    this.hasPrev10 = false;
    this.status = "Search Results " + (this.listIdx + 1) + "-" + (this.listIdx + 10) + " (of " + this.possibleTerms.length + ")";
  }

  sortChi(a, b) {
    var index;
    if (this.chiResults.length > 1) {
      var pivot = this.chiResults[Math.floor((a + b) / 2)]; //middle element
      var i = a; //left pointer
      var j = b; //right pointer
      while (i <= j) {
        while (this.chiResults[i] < pivot) {
          i++;
        }
        while (this.chiResults[j] > pivot) {
          j--;
        }
        if (i <= j) {
          var temp = this.chiResults[i];
          this.chiResults[i] = this.chiResults[j];
          this.chiResults[j] = temp;
          temp = this.freqResults[i];
          this.freqResults[i] = this.freqResults[j];
          this.freqResults[j] = temp;
          temp = this.possibleTerms[i];
          this.possibleTerms[i] = this.possibleTerms[j];
          this.possibleTerms[j] = temp;
          temp = this.conflictResults[i];
          this.conflictResults[i] = this.conflictResults[j];
          this.conflictResults[j] = temp;
          i++;
          j--;
        }
      }
      index = i;
      if (a < index - 1) { //more elements on the left side of the pivot
        this.sortChi(a, index - 1);
      }
      if (index < b) { //more elements on the right side of the pivot
        this.sortChi(index, b);
      }
    }
  }

  sortFreq(a, b) {
    var index;
    if (this.freqResults.length > 1) {
      var pivot = this.freqResults[Math.floor((a + b) / 2)]; //middle element
      var i = a; //left pointer
      var j = b; //right pointer
      while (i <= j) {
        while (this.freqResults[i] < pivot) {
          i++;
        }
        while (this.freqResults[j] > pivot) {
          j--;
        }
        if (i <= j) {
          var temp = this.chiResults[i];
          this.chiResults[i] = this.chiResults[j];
          this.chiResults[j] = temp;
          temp = this.freqResults[i];
          this.freqResults[i] = this.freqResults[j];
          this.freqResults[j] = temp;
          temp = this.possibleTerms[i];
          this.possibleTerms[i] = this.possibleTerms[j];
          this.possibleTerms[j] = temp;
          temp = this.conflictResults[i];
          this.conflictResults[i] = this.conflictResults[j];
          this.conflictResults[j] = temp;
          i++;
          j--;
        }
      }
      index = i;
      if (a < index - 1) { //more elements on the left side of the pivot
        this.sortFreq(a, index - 1);
      }
      if (index < b) { //more elements on the right side of the pivot
        this.sortFreq(index, b);
      }
    }
  }

  onKeyText(event: any) {
    if((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode == 8) {
      this.text = this.currText;
      this.text = this.text.replace(/ /g, "");
      this.text = this.text.replace(/,/g, "");
      this.text = this.text.replace(/\./g, "");
      this.text = this.text.replace(/\'/g, "");
      this.text = this.text.replace(/\n/g, "");
      this.text = this.text.replace(/\"/g, "");
      this.text = this.text.toLowerCase();

      this.originalText = "" + this.text;

      this.cyphertextFrequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for(var m = 0; m < this.currText.length; m++) {
        if(this.currText.charAt(m) == 'a') {
          this.cyphertextFrequency[0]++;
        } else if(this.currText.charAt(m) == 'b') {
          this.cyphertextFrequency[1]++;
        } else if(this.currText.charAt(m) == 'c') {
          this.cyphertextFrequency[2]++;
        } else if(this.currText.charAt(m) == 'd') {
          this.cyphertextFrequency[3]++;
        } else if(this.currText.charAt(m) == 'e') {
          this.cyphertextFrequency[4]++;
        } else if(this.currText.charAt(m) == 'f') {
          this.cyphertextFrequency[5]++;
        } else if(this.currText.charAt(m) == 'g') {
          this.cyphertextFrequency[6]++;
        } else if(this.currText.charAt(m) == 'h') {
          this.cyphertextFrequency[7]++;
        } else if(this.currText.charAt(m) == 'i') {
          this.cyphertextFrequency[8]++;
        } else if(this.currText.charAt(m) == 'j') {
          this.cyphertextFrequency[9]++;
        } else if(this.currText.charAt(m) == 'k') {
          this.cyphertextFrequency[10]++;
        } else if(this.currText.charAt(m) == 'l') {
          this.cyphertextFrequency[11]++;
        } else if(this.currText.charAt(m) == 'm') {
          this.cyphertextFrequency[12]++;
        } else if(this.currText.charAt(m) == 'n') {
          this.cyphertextFrequency[13]++;
        } else if(this.currText.charAt(m) == 'o') {
          this.cyphertextFrequency[14]++;
        } else if(this.currText.charAt(m) == 'p') {
          this.cyphertextFrequency[15]++;
        } else if(this.currText.charAt(m) == 'q') {
          this.cyphertextFrequency[16]++;
        } else if(this.currText.charAt(m) == 'r') {
          this.cyphertextFrequency[17]++;
        } else if(this.currText.charAt(m) == 's') {
          this.cyphertextFrequency[18]++;
        } else if(this.currText.charAt(m) == 't') {
          this.cyphertextFrequency[19]++;
        } else if(this.currText.charAt(m) == 'u') {
          this.cyphertextFrequency[20]++;
        } else if(this.currText.charAt(m) == 'v') {
          this.cyphertextFrequency[21]++;
        } else if(this.currText.charAt(m) == 'w') {
          this.cyphertextFrequency[22]++;
        } else if(this.currText.charAt(m) == 'x') {
          this.cyphertextFrequency[23]++;
        } else if(this.currText.charAt(m) == 'y') {
          this.cyphertextFrequency[24]++;
        } else if(this.currText.charAt(m) == 'z') {
          this.cyphertextFrequency[25]++;
        }
      }
    }
  }
}
