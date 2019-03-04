import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  texto:string;
  @Output() searchUser:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  handleSearch(){
    this.searchUser.emit(this.texto);
  }
}
