import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';



@NgModule({
  declarations: [
    AppointmentComponent,
    PatientComponent,
    DoctorComponent,
    UserComponent,
    NewAppointmentComponent,
    NewPatientComponent,
    NewDoctorComponent,
    NewUserComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
