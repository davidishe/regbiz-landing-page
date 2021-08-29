import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SideNavService } from 'src/app/services/side-nav.service';
import { IUser } from 'src/app/shared/models/user/user';
import { AccountService } from '../../layouts/account/account.service';
import { NavStateService } from './services/nav-state.service';
import { ThemeService } from './services/theme.service';
import { WindowService } from './services/window.service';




@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent   {


 
 

  constructor(
 ) {
 
          
  }







}
