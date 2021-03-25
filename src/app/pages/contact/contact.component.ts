import { Component } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.css' ]
})

export class ContactComponent {
  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "userEmail": new FormControl("", [Validators.required, Validators.email]),
      "userPhone": new FormControl("", [Validators.required, Validators.pattern("^([\+]{1})(380)([0-9]{9})$")]) 
    });
  }

  ngOnInit(){
    document.body.style.backgroundColor = "blue";
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "white";
  }

  sendForm(){
    console.log(this.myForm.value);
  }
}
