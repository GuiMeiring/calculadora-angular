import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculadora';
  number : string ='';
  operation :string | undefined;
  resolution : string| undefined;
  number2 : string ='';
  numberValue : number | undefined;
  numberValue2 : number | undefined;
  resultValue : number | undefined;
  result : string ='';

 public delete(){
    location.reload();
 }
 public getNumber(algorismo: string){
  if(this.operation == null){
    this.number +=algorismo;
    this.resolution= this.number;
  }else{
    this.number2 +=algorismo;
    this.resolution = this.number + this.operation+ this.number2;
  }

 }
 public getOperation(oper :string){
   this.operation=oper;
   this.resolution +=this.operation;
 }
public getResult(equal : string){
  this.numberValue=parseInt(this.number);
  this.numberValue2=parseInt(this.number2);
  if(this.operation =="+"){
    this.resultValue=this.numberValue + this.numberValue2;
    this.result=""+this.resultValue;
    this.resolution=this.result;
    this.number=this.result;
    this.number2='';
  }
  if(this.operation =="-"){
    this.resultValue=this.numberValue - this.numberValue2;
    this.result=""+this.resultValue;
    this.resolution=this.result;
    this.number=this.result;
    this.number2='';
  }
  if(this.operation =="X"){
    this.resultValue=this.numberValue * this.numberValue2;
    this.result=""+this.resultValue;
    this.resolution =this.result;
    this.number=this.result;
    this.number2='';
  }
  if(this.operation =="%"){
    this.resultValue=this.numberValue / this.numberValue2;
    this.result=""+this.resultValue;
    this.resolution =this.result;
    this.number=this.result;
    this.number2='';
  }

}

}
