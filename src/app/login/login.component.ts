import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ReactiveFormsModule,FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import * as firebase from 'firebase';
=======
import { FormControl, Validators } from '@angular/forms';
import * as firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
>>>>>>> a2bca9b393626d0760e7852e55b50798fb3625f8

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  constructor(public af: AngularFireAuth, private router: Router,private fb: FormBuilder) {}
  error: any;

  userForm: FormGroup;
  loginForm: FormGroup;
  passReset: boolean = false;

  /*loginForm :FormGroup;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);
  */
  hide = true;

=======
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
>>>>>>> a2bca9b393626d0760e7852e55b50798fb3625f8

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

<<<<<<< HEAD
  }

  gitLogin(){
    var gitProvider = new firebase.auth.GithubAuthProvider();
    gitProvider.addScope('profile');
    gitProvider.addScope('email');
    this.af.auth.signInWithPopup(gitProvider).then(
      (success) => {
        this.router.navigateByUrl('/productlist')
      }
    ).catch(
      (err) => {
        this.error = err;
        console.log(err);
      }
    )

  }
  twitterLogin(){
    var twitterProvider = new firebase.auth.TwitterAuthProvider();
    //twitterProvider.addScope('profile');
    //twitterProvider.addScope('email');
    this.af.auth.signInWithPopup(twitterProvider).then(
      (success) => {
        this.router.navigateByUrl('/productlist')
      }
    ).catch(
      (err) => {
        this.error = err;
        console.log(err);
      }
    )

  }

// Updates validation state on form changes.
onValueChanged(data?: any) {
  if (!this.userForm) { return; }
  const form = this.userForm;
  for (const field in this.formErrors) {
    // clear previous error message (if any)
    this.formErrors[field] = '';
    const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}

onValueChangedLoginForm(data?: any) {
  if (!this.loginForm) { return; }
  const form = this.userForm;
  for (const field in this.formErrors) {
    // clear previous error message (if any)
    this.formErrors[field] = '';
    const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}

formErrors = {
  'email': '',
  'password': ''
};
loginFormErrors={
  'email': '',
  'password': ''
}

validationMessages = {
  'email': {
    'required':      'Email is required.',
    'email':         'Email must be a valid email'
  },
  'password': {
    'required':      'Password is required.',
    'pattern':       'Password must be include at one letter and one number.',
    'minlength':     'Password must be at least 4 characters long.',
    'maxlength':     'Password cannot be more than 40 characters long.',
  }
};
  buildForm(): void {
    this.userForm = this.fb.group({
      'email': ['', [
          Validators.required,
          Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
    ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      'email': ['', [
          Validators.required,
          Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
    ],
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChangedLoginForm(data));
    this.onValueChangedLoginForm(); // reset validation messages
  }


  login(): void {
    this.af.auth.signInWithEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['password'])
    .then((success)=>{
      console.log("success : " +success);
      this.router.navigateByUrl('/productlist')
     })
    .catch(error => console.log(error));
  }

  resetPassword() {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(this.userForm.value['email']).then(() => {
      console.log("email sent") ;
      this.passReset=true;
    })
    .catch((error) => console.log(error));

  }

  signup(): void {
    this.af.auth.createUserWithEmailAndPassword(this.userForm.value['email'], this.userForm.value['password'])
     .then(()=>{
       console.log("success");
       this.router.navigateByUrl('/productlist')
      })
     .catch(error => console.log(error));
  }



  ngOnInit() {
    this.buildForm();
    this.buildLoginForm();
  }
=======

  }
  ngOnInit() {}
>>>>>>> a2bca9b393626d0760e7852e55b50798fb3625f8
}
