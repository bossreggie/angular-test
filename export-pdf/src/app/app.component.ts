import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'export-pdf';
  Data = [  
    { Id: 101, Name: 'Nitin', Salary: 1234 },  
    { Id: 102, Name: 'Sonu', Salary: 1234 },  
    { Id: 103, Name: 'Mohit', Salary: 1234 },  
    { Id: 104, Name: 'Rahul', Salary: 1234 },  
    { Id: 105, Name: 'Kunal', Salary: 1234 }  
  ];

  @ViewChild('content') content:ElementRef;

  public SavePDF():void{
    let content = this.content.nativeElement;
    let doc = new jsPDF();
    let _elementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };
    doc.fromHTML(content.innerHTML,15,15, {
      'width':190,
      'elementHandlers':_elementHandlers
    });
    doc.save('test.pdf');
  }
}
