import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private shared:SharedService){}
  // hide = true;
  // tmp_email: any;
  // tmp_pass: any;

  // loginUser = new FormGroup({
  //   uemail: new FormControl('', Validators.required),
  //   upass: new FormControl('', Validators.required),
  // })

  // ulogin() {
  //   this.tmp_email = this.loginUser.value.uemail;
  //   this.tmp_pass = this.loginUser.value.upass;
  //   console.log(this.tmp_email);

  //   if (((this.tmp_email == "gcalderon") || (this.tmp_email == "lcalero")) && (this.tmp_pass == '7532159')) {
  //     alert("¡Acceso con éxito!")
  //     this.shared.setMessage(this.tmp_email)
  //     this.router.navigate(['/mainPage']);
  //     this.dialogRef.close('success');
  //   } else if ((this.tmp_email != "gcalderon") && (this.tmp_email != "lcalero")) {
  //     alert("Usuario es incorrecto.")
  //     console.log("Usuario es incorrecto.");
  //   } else if (this.tmp_pass != "7532159") {
  //     alert("Contraseña es incorrecta.");
  //     console.log("Contraseña es incorrecta.");
  //   } else {
  //     alert("Usuario y contraseña incorrectos.");
  //     console.log("Usuario y contraseña incorrectos.");
  //   }
  // }

  username: string = '';
  password: string = '';

  onSubmit() {
    console.log('Formulario enviado');
    if (this.username === 'gabrielcal17' && this.password === 'gabrielcal17') {
      console.log('Usuario autenticado correctamente');
    } else if (this.username === '') {
      alert('Debe ingresar el usuario.');
    } else if (this.password === '') {
      alert('Debe ingresar la contraseña.');
    } else {
      console.log('Usuario o contraseña incorrectos');
      alert("Usuario y/o contraseña incorrectos.");
    }
  }
}
