import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [Validators,FormBuilder]
})
export class FormComponent {

 public obj = new FormBuilder();
 displayData : boolean = false;

  MarvellousForm = this.obj.group({
    Fname: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Lname: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Phone : ['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    Email: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z]{1,}\.[a-zA-Z]{2,}$')]],
    City: ['',[Validators.required, Validators.pattern('^(.*?[a-zA-Z]){4,}.*$')]],
    State: ['', Validators.required],
    zipcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    comment: ['',[Validators.required,Validators.minLength(30)]]
  })

  ShoeInfo(){
    this.displayData = true;
  }
};
