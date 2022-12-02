import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public students:string []= ['Jaziel', 'Joel', 'Jessica']
  public correr= false;


  constructor() { }

  ngOnInit(): void {
  }

}
