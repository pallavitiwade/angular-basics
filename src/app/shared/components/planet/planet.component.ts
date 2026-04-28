import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Iplant } from "./planet";
import { snackBarService } from "../../services/snackbar.service";



@Component({
    selector: './app-planet',
    templateUrl: '/planet.component.html',
    styleUrls: ['./planet.component.scss']
})

export class planetComponent {
    isInEditMode: boolean = false
    editObj!: Iplant;


    plantsArr: Array<Iplant> = [
        {
            planetName: "Mercury",
            distanceFromSunKm: 57910000,
            diameterKm: 4879,
            numberOfMoons: 0,
            pid: '123'
        },

        {
            planetName: "Venus",
            distanceFromSunKm: 108200000,
            diameterKm: 12104,
            numberOfMoons: 0,
            pid: '45'
        },

        {
            planetName: "Earth",
            distanceFromSunKm: 149600000,
            diameterKm: 12742,
            numberOfMoons: 1,
            pid: '34'
        },

        {
            planetName: "Mars",
            distanceFromSunKm: 227900000,
            diameterKm: 6779,
            numberOfMoons: 2,
            pid: '67'
        },

        {
            planetName: "Jupiter",
            distanceFromSunKm: 778500000,
            diameterKm: 139820,
            numberOfMoons: 79,
            pid: '56'
        }
    ];
    constructor(
            private _snackBar:snackBarService
        
    ) { }
    ngOnInit(): void {

    }
    @ViewChild('planetName') planetName!: ElementRef;
    @ViewChild('distanceFromSunKm') distanceFromSunKm!: ElementRef;
    @ViewChild('diameterKm') diameterKm!: ElementRef;
    @ViewChild('numberOfMoons') numberOfMoons!: ElementRef;


    onplanetAdd(
        planetName: HTMLInputElement,
        distanceFromSunKm: HTMLInputElement,
        diameterKm: HTMLInputElement,
        numberOfMoons: HTMLInputElement

    ) {
        let newplanet: Iplant = {
            planetName: planetName.value,
            distanceFromSunKm: +distanceFromSunKm.value,
            diameterKm: +diameterKm.value,
            numberOfMoons: +numberOfMoons.value,
            pid: Date.now().toString()
        }
        this.plantsArr.push(newplanet);



        planetName.value = '';
        distanceFromSunKm.value = '';
        diameterKm.value = '';
        numberOfMoons.value = '';
            this._snackBar.openSnackbar(`The ${newplanet.planetName} is Added succesfully!!!`)

    }
    trackByFun(index: number, item: Iplant) {
        return item.pid //unique value like ID
    }


    onRemove(id: string) {
        let getIndex = this.plantsArr.findIndex(p => p.pid === id)
        let removed=this.plantsArr.splice(getIndex, 1)
                    this._snackBar.openSnackbar(`The ${removed[0].planetName} is Removed succesfully!!!`)

    }

    onEdit(pla: Iplant) {
        this.isInEditMode = true;
        this.editObj = pla;
        this.planetName.nativeElement.value = pla.planetName;
        this.distanceFromSunKm.nativeElement.value = pla.distanceFromSunKm;
        this.diameterKm.nativeElement.value = pla.diameterKm;
        this.numberOfMoons.nativeElement.value = pla.numberOfMoons
    }
    onUpdate() {
        let UPDATE_ID = this.editObj.pid;
        let UPDATED_OBJ: Iplant = {
            planetName: this.planetName.nativeElement.value,
            distanceFromSunKm: this.distanceFromSunKm.nativeElement.value,
            diameterKm: this.diameterKm.nativeElement.value,
            numberOfMoons: this.numberOfMoons.nativeElement.value,
            pid: UPDATE_ID
        }
        let getIndex = this.plantsArr.findIndex(p => p.pid === UPDATE_ID)

        this.plantsArr[getIndex] = UPDATED_OBJ
        this.planetName.nativeElement.value = '';
        this.distanceFromSunKm.nativeElement.value = '';
        this.diameterKm.nativeElement.value = '';
        this.isInEditMode = false;
         this._snackBar.openSnackbar(`The ${UPDATED_OBJ.planetName} is Updated succesfully!!!`)

    }
}





