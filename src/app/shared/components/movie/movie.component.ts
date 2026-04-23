import { Component, ElementRef, ViewChild } from "@angular/core";
import { Imovie } from "./movie";


@Component({
selector:'./app-movie',
templateUrl:'./movie.component.html',
styleUrls:['./movie.component.scss']

})

export class MovieComponent{
constructor() {}

ngOnInit(): void{

}
  isInEditMode:boolean = false
  editObj!:Imovie
    MoviesArr:Array<Imovie>=[
  {
    title: "Kantara",
    img: "https://tse1.mm.bing.net/th/id/OIP.XaiN2sHmw41h_3eCJAu51gHaEK?pid=Api&P=0&h=180",
    id:'2'
  },
  {
    title: "Pushpa 2",
    img: "https://tse1.mm.bing.net/th/id/OIP.b0hK8bUJsSAk79_1LNF91gHaEK?pid=Api&P=0&h=180",
    id:'3'
  },
  {
    title: "chaava",
    img: "https://tse1.mm.bing.net/th/id/OIP.PaAwfCKYTYyEAgjqFm18CwHaEl?pid=Api&P=0&h=180",
    id:'4'
  },
  {
    title: "Avengers: Endgame",
    img: "https://tse4.mm.bing.net/th/id/OIP.CIXxgBXzeAgwrhwTgQPJswHaEK?pid=Api&P=0&h=180",
    id:'5'
  },
  {
    title: "Harry Potter",
    img: "https://tse2.mm.bing.net/th/id/OIP.qxQUgl412VM5GTk1227ZdAHaEM?pid=Api&P=0&h=180",
    id:'6'
  }
];
@ViewChild('title')
title!:ElementRef

@ViewChild('img')
img!:ElementRef

movieAdd(
title:HTMLInputElement,
img:HTMLInputElement

){
let newMovie:Imovie={
    title:title.value,
    img:img.value,
    id: Date.now().toString()
}
this.MoviesArr.push(newMovie)
title.value=''
img.value=''
}
  trackBymovie(index: number, item: Imovie) {
      return item.id 
    }

    onRemove(id:string){
        let getIndex=this.MoviesArr.findIndex(
            m=>m.id===id
        )
        this.MoviesArr.splice(getIndex,1)
    }
    onEdit(picture:Imovie){
        this.isInEditMode=true;
        this.editObj=picture;
        this.title.nativeElement.value=this.editObj.title;
        this.img.nativeElement.value=this.editObj.img;
    }
    onUpdate(){
        let UPDATE_ID=this.editObj.id
        let UPDATED_OBJ:Imovie={
            title:this.title.nativeElement.value,
            img:this.title.nativeElement.value,
            id:UPDATE_ID
        }
        let getIndex=this.MoviesArr.findIndex(m=>m.id===UPDATE_ID)

        this.MoviesArr[getIndex]=UPDATED_OBJ
        this.title.nativeElement.value,
        this.img.nativeElement.value,
        this.isInEditMode=false
    }




}


