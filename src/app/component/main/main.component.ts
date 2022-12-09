import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public students:string []= ['Jaziel', 'Joel', 'Jessica']
  public correr= false;
  public hoy=new Date();


  //formulario
public formularioPincipal: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioPincipal = this.fb.group({
      nombre: ["",[Validators.required, Validators.maxLength(10)]],
      edad: [0],
      correo: ["fulano@gmail.com"],
    });
  }
submit(): void{
console.log(this.formularioPincipal.value)
}

}
