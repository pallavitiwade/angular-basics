import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Ipost } from "./card";

@Component({
  selector: './app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
  isInEditMode: boolean = false
  editObj!: Ipost
  postArr: Array<Ipost> = [
    {
      title: "The Power of Habit",
      body: "This book explains how habits are formed and how they can be changed to improve personal and professional life.",
      id: '1'
    },
    {
      title: "Atomic Habits",
      body: "A practical guide to building good habits and breaking bad ones using small daily improvements.",
      id: '2'
    },
    {
      title: "Rich Dad Poor Dad",
      body: "Focuses on financial education, investing, and building wealth through smart money habits.",
      id: '3'
    },
    {
      title: "Think and Grow Rich",
      body: "Classic book on success mindset, goal setting, and achieving financial independence.",
      id: '4'
    },
    {
      title: "The Alchemist",
      body: "A philosophical story about following your dreams and listening to your heart.",
      id: '5'
    }
  ];

  @ViewChild('Title')
  Title!: ElementRef

  @ViewChild('body')
  body!: ElementRef

  @ViewChild('userId')
  userId!: ElementRef

  onpostAdd(
    Title: HTMLInputElement,
    body: HTMLTextAreaElement,
    userId: HTMLSelectElement
  ) {
    let newPost: Ipost = {
      title: Title.value,
      body: body.value,
      id: Date.now().toString()

    }
    this.postArr.push(newPost)
    Title.value = ''
    body.value = ''
    userId.value = '1'
  }
  trackBycard(index: number, item: Ipost) {
    return item.id
  }
  onRemove(id: string) {
    let getIndex = this.postArr.findIndex(
      p => p.id === id
    )
    this.postArr.splice(getIndex, 1)
  }
  onEdit(post: Ipost) {
    this.isInEditMode = true
    this.editObj = post
    this.Title.nativeElement.value = post.title
    this.body.nativeElement.value = post.body
  }

  onUpdate() {
    let UPDATE_ID = this.editObj.id
    let UPDATED_OBJ: Ipost = {
      title: this.Title.nativeElement.value,
      body: this.body.nativeElement.value,
      id: UPDATE_ID
    }
    let getIndex = this.postArr.findIndex(p => p.id === UPDATE_ID)

    this.postArr[getIndex] = UPDATED_OBJ
    this.Title.nativeElement.value = ''
    this.body.nativeElement.value = ''
    this.userId.nativeElement.value = '1'
    this.isInEditMode = false
  }
}


