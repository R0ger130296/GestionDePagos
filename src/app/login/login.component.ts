import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  btnClickHome = function () {
    var validacionUser = $('#user').val();
    var validacionPassword = $('#password').val();

    if (validacionUser === "" || validacionPassword === "") {
      alert('Debes llenar todos los campos');
      return false;
    }
    else {
      this.router.navigateByUrl('/inicio');
    }
  };
}
