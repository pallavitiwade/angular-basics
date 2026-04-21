import { Component, ElementRef, ViewChild } from "@angular/core";
import { Itodos } from "./todos";



@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})

export class todoComponents {
    isInEditMode: boolean = false
    editObj!: Itodos;
    todosArr: Array<Itodos> = [
        {
            todoItem: 'Angular',
            todoId: '123'
        },
        {
            todoItem: 'typescript',
            todoId: '123'
        },
        {
            todoItem: 'javascript',
            todoId: '123'
        }

    ]

    onTodoAdd(ele: HTMLInputElement) {
        let val = ele.value
        let newTodo: Itodos = {
            todoItem: val,
            todoId: Date.now().toString()
        }

        this.todosArr.push(newTodo)

    }
    trackByFun(index: number, item: Itodos) {
        return item.todoId //unique value like ID
    }
    @ViewChild('todoControl')
    todoControl!: ElementRef;

    onRemove(id: string) {
        console.log(id)
        let getIndex = this.todosArr.findIndex(t => t.todoId === id)
        this.todosArr.splice(getIndex, 1)


    }

    onEdit(todo: Itodos) {
        console.log(todo)
        this.isInEditMode = true
        this.editObj = todo;
        this.todoControl.nativeElement.value = this.editObj.todoItem
    }

    onUpdate() {
        let UPDATE_ID = this.editObj.todoId
        let UPDATED_OBJ: Itodos = {
            todoItem: this.todoControl.nativeElement.value,
            todoId: UPDATE_ID

        }
        let getIndex = this.todosArr.findIndex(t => t.todoId === UPDATE_ID)
        this.todosArr[getIndex] = UPDATED_OBJ
        this.todoControl.nativeElement.value = ''
        this.isInEditMode = false



    }

}