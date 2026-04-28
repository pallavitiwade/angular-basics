import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable({
    providedIn:"root"
})


export class snackBarService {
    constructor(private _matSnackbar:MatSnackBar) {}

 openSnackbar(msg:string){
    this._matSnackbar.open(msg,'close',{
        duration:3000,
        horizontalPosition:'center',
        verticalPosition:'bottom'

    })
 }

}