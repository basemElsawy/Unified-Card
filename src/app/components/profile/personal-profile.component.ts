import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MyTripsComponent } from './my-trips/my-trips.component';
import { MyCardComponent } from './my-card/my-card.component';
import { BalanceComponent } from './balance/balance.component';
import { HistoryComponent } from './history/history.component';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-personal-profile',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MyTripsComponent,
    MyCardComponent,
    BalanceComponent,
    HistoryComponent,
    ReactiveFormsModule,
  ],

  templateUrl: './personal-profile.component.html',
  styleUrl: './personal-profile.component.css',
})
export class PersonalProfileComponent {
  active!: string;
  userDataForm!: FormGroup;
  activeSubject: BehaviorSubject<string> = new BehaviorSubject('My Trips');
  constructor(private toastr: ToastrService) {}
  userData: any = {
    userFullName: 'Muhammed Abubakr',
    username: 'muhammed1988',
    email: 'muhammedCO@ex.eg',
    password: 'mmee2223321@@##',
  };

  buttons: { id: number; link: string; isActive: boolean }[] = [
    {
      id: 1,
      link: 'My Trips',
      isActive: true,
    },
    {
      id: 2,
      link: 'My Card',
      isActive: false,
    },
    {
      id: 3,
      link: 'Balance',
      isActive: false,
    },
    {
      id: 4,
      link: 'History',
      isActive: false,
    },
  ];

  controls: {
    id: number;
    title: string;
    formControl: string;
    isEditing: boolean;
  }[] = [
    {
      id: 1,
      title: 'Name',
      formControl: 'userFullName',
      isEditing: false,
    },
    {
      id: 2,
      title: 'User Name',
      formControl: 'username',
      isEditing: false,
    },
    {
      id: 3,
      title: 'Email',
      formControl: 'email',
      isEditing: false,
    },
    {
      id: 4,
      title: 'Password',
      formControl: 'password',
      isEditing: false,
    },
  ];

  ngOnInit() {
    this.activeSubject.subscribe((link) => {
      this.active = link;
    });

    this.userDataForm = new FormGroup({
      userFullName: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    for (const data in this.userData) {
      this.userDataForm.controls[data].disable();
      if (this.userDataForm.controls.hasOwnProperty(data)) {
        // console.log(typeof data);

        this.userDataForm.controls[data].setValue(this.userData[data]);
      }
    }
  }
  changeStateButton(
    selectedButton: { id: number; link: string; isActive: boolean },
    state: string
  ) {
    this.activeSubject.next(state);
    selectedButton.isActive = true;
    for (let button of this.buttons) {
      if (button.id != selectedButton.id) {
        button.isActive = false;
      }
    }
  }
  editOnUserData(controlName: string, controlIndex: number) {
    this.toastr.success('Edited succesfully');
    this.controls[controlIndex - 1].isEditing = true;
    this.userDataForm.controls[controlName].enable();
  }
  submitEditedData(controlName: string, controlIndex: number) {
    this.controls[controlIndex - 1].isEditing = false;
    this.userDataForm.controls[controlName].disable();
    this.toastr.success('Edited succesfully');
  }
}
