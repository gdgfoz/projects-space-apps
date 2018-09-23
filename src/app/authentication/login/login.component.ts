import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';

@Component({
  selector: 'sa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _afAuth: AngularFireAuth,
    private _router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  loginWithGoogle(): void {
    this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this._successHandler());
  }

  loginWithFacebook(): void {
    this._afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(() => this._successHandler());
  }

  private _successHandler(): void {
    this._router.navigateByUrl('/cms/novo-projeto');
  }

  private buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
