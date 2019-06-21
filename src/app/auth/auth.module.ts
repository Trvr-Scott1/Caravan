import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { 
  InputsModule, 
  ButtonsModule, 
  CardsFreeModule, 
  IconsModule, 
  WavesModule, 
  InputUtilitiesModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { PingComponent } from './components/ping/ping.component';

@NgModule({
  imports: [
    PingComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    InputUtilitiesModule,
    ButtonsModule,
    CardsFreeModule,
    WavesModule,
    RouterModule,
    IconsModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule { }