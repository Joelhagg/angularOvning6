import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  textFromFirstInput: any = ''
  textFromSecondInput: any = ''
  textFromThirdInput: any = ''

  firstInputValue(text: string) {
    this.textFromFirstInput = text
  }

  secondInputValue(secondInput: KeyboardEvent) {
    
    console.log(KeyboardEvent);

    this.textFromSecondInput = secondInput

  }

  thirdInputValue(text: string) {
    this.textFromThirdInput = text
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
