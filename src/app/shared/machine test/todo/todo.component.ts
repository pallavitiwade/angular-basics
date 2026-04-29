import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Itodo } from "./todo";
import { snackBarService } from "../../services/snackbar.service";



@Component({
    selector: './todo-app',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {


    todosArr: Array<Itodo> = [
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
    IsinEditMode: boolean = false
    @ViewChild('todoItem') todoItem!: ElementRef;
    editId!: string

    constructor(
        private _snackBar: snackBarService
    ) { }
    ngOnInit(): void {

    }

    Addtodo() {
        let todoObj: Itodo = {
            todoItem: this.todoItem.nativeElement.value,
            todoId: Date.now().toString()
        }
        this.todosArr.push(todoObj)
        this.todoItem.nativeElement.value = ''
        this._snackBar.openSnackbar(`The ${todoObj.todoItem} is Added successfully!!!`)
    }

    trackBytodo(index: number, item: Itodo) {
        return item.todoId
    }
    onRemove(todoId: string) {
        let getIndex = this.todosArr.findIndex(t => t.todoId === todoId)
        let removed = this.todosArr.splice(getIndex, 1)
        this._snackBar.openSnackbar(`The ${removed[0].todoItem} is Removed successfully!!!`)

    }

    onEdit(todo: Itodo) {
        this.IsinEditMode = true
        this.editId = todo.todoId
        this.todoItem.nativeElement.value = todo.todoItem
    }
    onUpdate() {
        let UPDATE_ID = this.editId
        let UPDATED_OBJ: Itodo = {
            todoItem: this.todoItem.nativeElement.value,
            todoId: UPDATE_ID
        }
        console.log(UPDATED_OBJ)
        let getIndex = this.todosArr.findIndex(t => t.todoId === UPDATE_ID)
        this.todosArr[getIndex] = UPDATED_OBJ
        this.todoItem.nativeElement.value = ''
        this.IsinEditMode = false
        this._snackBar.openSnackbar(`The ${UPDATED_OBJ.todoItem} is Added successfully!!!`)

    }
}