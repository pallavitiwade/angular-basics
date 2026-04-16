import { Component, OnInit } from "@angular/core";
import { Itodo } from "./todo";



@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})

export class todoComponent implements OnInit{
    isInEditMode:boolean=false
    todosArr:Array<Itodo>=[
      {
            todoItem:'Angular',
            todoId:'123'
        },
       {
            todoItem:'typescript',
            todoId:'123'
        },
        {
            todoItem:'javascript',
            todoId:'123'
        }
       
    ]
constructor(){}

ngOnInit(): void {
  
    
}
onTodoAdd(ele:HTMLInputElement){
    let val=ele.value
    let newTodo:Itodo={
        todoItem:val,
        todoId:Date.now().toString()
    }

this.todosArr.push(newTodo)

}
trackByFun(index:number,item:Itodo){
    return item.todoId //unique value like ID
}
onRemove(id:string){
    console.log(id)
    let getIndex=this.todosArr.findIndex(t=>t.todoId===id)
    this.todosArr.splice(getIndex,1)


}
}