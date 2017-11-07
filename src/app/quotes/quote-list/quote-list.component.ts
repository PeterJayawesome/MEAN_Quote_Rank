import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote-new/quote';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes:Quote[];
  @Output() voteUp = new EventEmitter();
  @Output() voteDown = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  VoteUp(i){
  	this.voteUp.emit(i);
  }

  VoteDown(i){
  	this.voteDown.emit(i);
  }

  Delete(i){
  	this.delete.emit(i);
  }

}
