import { Component, ElementRef, ViewChild } from "@angular/core";
import { Itodos } from "./todos";
import { snackBarService } from "../../services/snackbar.service";



@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})

export class todoComponents {
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

    isInEditMode:boolean=false
    onTodoAdd(ele: HTMLInputElement) {
        let val = ele.value
        let newTodo: Itodos = {
            todoItem: val,
            todoId: Date.now().toString()
        }

        this.todosArr.push(newTodo)
            this._snackBar.openSnackbar(`The ${newTodo.todoItem} is Added succesfully!!!`)


    }
    trackByFun(index: number, item: Itodos) {
        return item.todoId //unique value like ID
    }
    @ViewChild('todoControl')
    todoControl!: ElementRef;

    constructor(
        private _snackBar:snackBarService
    ){}


    onRemove(id: string) {
        console.log(id)
        let getIndex = this.todosArr.findIndex(t => t.todoId === id)
        let removed=this.todosArr.splice(getIndex, 1)
        this._snackBar.openSnackbar(`The ${removed[0].todoItem} is removed succesfully!!!`)

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
            this._snackBar.openSnackbar(`The ${UPDATED_OBJ.todoItem} is Updated succesfully!!!`)




    }

}