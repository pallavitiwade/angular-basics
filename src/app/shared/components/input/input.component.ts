import { Component, ElementRef, ViewChild } from "@angular/core";


@Component({
    selector:'app-Input',
    templateUrl:'./input.component.html',
    styleUrls:['./input.component.scss']

})



export class InputComponent{
    onSearch(eve:Event){
        let val=(eve.target as HTMLInputElement).value
        console.log(val)
    }


    
    onSearch1(ele:HTMLInputElement){
        let val=ele.value
        console.log(`searched ${val}`);
        ele.value=''

    }


    @ViewChild('city')
    pn!:ElementRef
    onSearch2(){
        console.log(this.pn.nativeElement.value);
        this.pn.nativeElement.value=''
     
    }
    @ViewChild('actor')
    pn1!:ElementRef
    onSearch3(){
        console.log(this.pn1.nativeElement.value);
        this.pn1.nativeElement.value=''
     
    }
    @ViewChild('singer')
    pns!:ElementRef
    onSearch4(){
        console.log(this.pns.nativeElement.value);
        this.pns.nativeElement.value=''
     
    }
        @ViewChild('politician')
    pn4!:ElementRef
    onSearch5(){
        console.log(this.pn4.nativeElement.value);
        this.pns.nativeElement.value=''
     
    }
    @ViewChild('rich')
    pn6!:ElementRef
    onSearch6(){
        console.log(this.pn6.nativeElement.value);
        this.pn6.nativeElement.value=''
     
    }
    @ViewChild('artist')
    pn7!:ElementRef
    onSearch7(){
        console.log(this.pn7.nativeElement.value);
        this.pn7.nativeElement.value=''
     
    }
    @ViewChild('cartoon')
    pn8!:ElementRef
    onSearch8(){
        console.log(this.pn8.nativeElement.value);
        this.pn8.nativeElement.value=''
     
    }
    @ViewChild('film')
    pn9!:ElementRef
    onSearch9(){
        console.log(this.pn9.nativeElement.value);
        this.pn9.nativeElement.value=''
     
    }
    @ViewChild('web')
    pn10!:ElementRef
    onSearch10(){
        console.log(this.pn10.nativeElement.value);
        this.pn10.nativeElement.value=''
     
    }
    @ViewChild('lawyer')
    pn11!:ElementRef
    onSearch11(){
        console.log(this.pn11.nativeElement.value);
        this.pn11.nativeElement.value=''
     
    }

    
}

