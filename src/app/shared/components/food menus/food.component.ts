import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ifood } from "./food";



@Component({
  selector: './app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})

export class FoodComponent {

  constructor() { }
  ngOnInit(): void {

  }
  isInEditMode: boolean = false
  editObj!: Ifood
  foodArr: Array<Ifood> = [
    {
      menuTitle: "Masala Dosa",
      menuPhoto: "https://images.unsplash.com/photo-1727404496374-21f174663abb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc2FsYSUyMGRvc2F8ZW58MHx8MHx8fDA%3D",
      id: '1'
    },
    {
      menuTitle: "Veg Biryani",
      menuPhoto: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
      id: '2'
    },
    {
      menuTitle: "Cold Coffee",
      menuPhoto: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
      id: '3'
    },
    {
      menuTitle: "Veg Manchurian",
      menuPhoto: "https://media.istockphoto.com/id/1145431419/photo/veg-or-chicken-manchurian.jpg?s=612x612&w=0&k=20&c=RzGX1y36Rkol3GKsacbS1gqYMmeB_s4ZE4JkDEhJdAo=",
      id: '4'
    },
    {
      menuTitle: "Gulab Jamun",
      menuPhoto: "https://media.istockphoto.com/id/521802535/photo/gulab-jamun-12.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mri9HwChsS3eLZYXOMVHGL49Y3gLNhD-Ez-QIYeEfwQ=",
      id: '5'
    }
  ];

  @ViewChild('menuTitle')
  menuTitle!: ElementRef

  @ViewChild('menuPhoto')
  menuPhoto!: ElementRef

  onfoodAdd(
    menuTitle: HTMLInputElement,
    menuPhoto: HTMLInputElement
  ) {
    let newPost: Ifood = {
      menuTitle: menuTitle.value,
      menuPhoto: menuPhoto.value,
      id: Date.now().toString()

    }
    this.foodArr.push(newPost)
    menuTitle.value = ''
    menuPhoto.value = ''
  }
   trackByfood(index: number, item: Ifood) {
      return item.id 
    }
  onRemove(id: string) {
    let getIndex = this.foodArr.findIndex(
      p => p.id === id
    )
    this.foodArr.splice(getIndex, 1)
  }
  onEdit(food:Ifood) {
    this.isInEditMode = true;
    this.editObj = food;
    this.menuTitle.nativeElement.value = this.editObj.menuTitle;
    this.menuPhoto.nativeElement.value = this.editObj.menuPhoto;
  }

  onUpdate(){
    let UPDATE_ID = this.editObj.id
    let UPDATED_OBJ: Ifood = {
      menuTitle: this.menuTitle.nativeElement.value,
      menuPhoto: this.menuPhoto.nativeElement.value,
      id: UPDATE_ID
    }
    let getIndex = this.foodArr.findIndex(p =>p.id===UPDATE_ID)

    this.foodArr[getIndex] = UPDATED_OBJ
    this.menuTitle.nativeElement.value = ''
    this.menuPhoto.nativeElement.value = ''
    this.isInEditMode = false
  }
}






