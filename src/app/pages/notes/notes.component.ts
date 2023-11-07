import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from 'src/app/model/INote';
import { SharedModule } from 'src/app/components/SharedModule';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule, HighlightDirective],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  @ViewChild('colorpicker') cp!: ElementRef;

  public color:String = '#fff';
  public page = 'Inicio';

  public notes:INote[] = [
    {title: 'Nota1', description:"Hola mundo"},
    {title: 'Nota2', description:"Hello World"},
  ];

  constructor(public notesS:NotesService){ }

  ngOnInit(){
  }

  refresh(){
    location.reload();
  }
  cambiaColor($event:any){
    this.color=$event.target.value;
  }
  public removingNote($event:INote){
    console.log("Eliminando Nota");
    console.log($event);
  }

  public editingNote($event:INote){
    console.log("Editando Nota");
    console.log($event);
  }

  trackByNotes(index:number, item:INote){
    return item.id;
  }

}