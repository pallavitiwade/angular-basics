import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Istudent } from "./student";
import { MatSnackBar } from "@angular/material/snack-bar";
import { snackBarService } from "../../services/snackbar.service";


@Component({
  selector: './app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],

})


export class StudentComponent implements OnInit {

  studentArr: Array<Istudent> = [
    {
      Fullname: "Amit Sharma",
      Email: "amit.sharma@gmail.com",
      contact: "9876543210",
      IsActive: true,
      id: '2'
    },
    {
      Fullname: "Priya Verma",
      Email: "priya.verma@gmail.com",
      contact: "9123456780",
      IsActive: true,
      id: '3'
    },
    {
      Fullname: "Rahul Patil",
      Email: "rahul.patil@gmail.com",
      contact: "9988776655",
      IsActive: false,
      id: '4'
    },
    {
      Fullname: "Sneha Kulkarni",
      Email: "sneha.kulkarni@gmail.com",
      contact: "9090909090",
      IsActive: true,
      id: '5'
    },
    {
      Fullname: "Vikas Singh",
      Email: "vikas.singh@gmail.com",
      contact: "9871234567",
      IsActive: false,
      id: '6'
    }
  ];


  IsinEditMode: boolean = false

  @ViewChild('Fullname') Fullname!: ElementRef;
  @ViewChild('Email') Email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('IsActive') IsActive!: ElementRef;

  editid!: string;
  constructor(
    private _snackBar:snackBarService
  ) {}
  ngOnInit(): void {

  }

  StudentAdd() {
    let stdObj: Istudent = {
      Fullname: this.Fullname.nativeElement.value,
      Email: this.Email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      IsActive: this.IsActive.nativeElement.value,
      id: Date.now().toString()
    }
    this.studentArr.unshift(stdObj)

    this.Fullname.nativeElement.value = ''
    this.Email.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.IsActive.nativeElement.value = ''
    this._snackBar.openSnackbar(`The Student ${stdObj.Fullname} is Added succesfully!!!`)


  }
  
  trackByStudent(index: number, item: Istudent) {
    return item.id
  }

  onRemove(id: string) {
    let getIndex = this.studentArr.findIndex(s => s.id === id)
    let removedstd=this.studentArr.splice(getIndex, 1)
    
    this._snackBar.openSnackbar(`The Student ${removedstd[0].Fullname} is removed succesfully!!!`)
  }
  onEdit(std: Istudent) {
    this.IsinEditMode = true
    this.editid = std.id
    this.Fullname.nativeElement.value = std.Fullname
    this.Email.nativeElement.value = std.Email
    this.contact.nativeElement.value = std.contact
    this.IsActive.nativeElement.value = std.IsActive

  }
  onUpdate() {
    let UPDATE_ID = this.editid
    let UPDATED_OBJ: Istudent = {
      Fullname: this.Fullname.nativeElement.value,
      Email: this.Email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      IsActive: this.IsActive.nativeElement.value,
      id: UPDATE_ID

    }
    console.log(UPDATED_OBJ)
    let getIndex = this.studentArr.findIndex(s => s.id === UPDATE_ID)
    this.studentArr[getIndex] = UPDATED_OBJ
    this.Fullname.nativeElement.value = ''
    this.Email.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.IsActive.nativeElement.value = ''
    this.IsinEditMode = false
        this._snackBar.openSnackbar(`The Student ${UPDATED_OBJ.Fullname} is Updated succesfully!!!`)


  }



}