import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public af: AngularFireAuth, private router: Router) {}
  error: any;

  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  hide = true;

  getEmailErrorMessage() {
    return this.email.hasError("required")
      ? "You must enter a value"
      : this.email.hasError("email")
      ? "Not a valid email"
      : "";
  }

  getPasswordErrorMessage() {
    return this.password.hasError("required") ? "You must enter a value" : "";
  }

  googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.af.auth.signInWithPopup(provider).then(
      (success) => {
        this.router.navigateByUrl('/productlist')
      }
    ).catch(
      (err) => {
        this.error = err;
      }
    )


  }
  ngOnInit() {}
}
