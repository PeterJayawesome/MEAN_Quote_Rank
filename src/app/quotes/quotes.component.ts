import { Component, OnInit } from '@angular/core';
import { Quote } from './quote-new/quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[];
  constructor() { }

  ngOnInit() {
  }

  create(quote){
  	this.quotes.push(quote);
  	this.reassign(this.quotes.length-1,-1);
  }

  reassign(index,increment){
  	while(index+increment >= 0 && index+increment < this.quotes.length){
  		if((this.quotes[index+increment].rating-this.quotes[index].rating)*increment>0){
  			let temp = this.quotes[index];
  			this.quotes[index] = this.quotes[index+increment];
  			this.quotes[index+increment] = temp;
  			index += increment;
  		}
  		else{
  			break;
  		}
  	}
  }

  voteUp(i){
  	this.quotes[i].rating++;
  	this.reassign(i,-1);
  }

  voteDown(i){
  	this.quotes[i].rating--;
  	this.reassign(i,1);
  }

  delete(i){
  	for(let x=i;x<this.quotes.length-1;x++){
  		this.quotes[x]=this.quotes[x+1];
  	}
  	this.quotes.pop();
  }
}
