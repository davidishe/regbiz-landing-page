import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { error } from 'protractor';
import { AccountService } from './components/layouts/account/account.service';
import { SideNavService } from './services/side-nav.service';
import { IUser } from './shared/models/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  constructor(
  ) {
    }







}
