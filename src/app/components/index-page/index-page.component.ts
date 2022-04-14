import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Output,EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit, AfterViewInit {
  isSearch=false;
  isHome=false;
  isIndex=true;
  url:string='';
  isSelectedRoute = 'menu';

  constructor(
    private router:Router, private activatedroute: ActivatedRoute,
    ) {
    }
@Output() change: EventEmitter <string> = new EventEmitter<string>();
  ngOnInit(): void {
    // this.activatedroute.snapshot.url.forEach(value => this.url += '/${value}');
    // console.log(this.activatedroute);
  }
@Input() check:string='menu';
  ngAfterViewInit(): void {
    this.activatedroute.url.subscribe(res => {
      console.log(res);
    })
  }


  search(){
    this.isSearch=true;
  }

  navigate(directionMenu: string) {
    this.router.navigate([directionMenu]);
    this.isSelectedRoute = directionMenu;
    console.log(directionMenu);

  }

  emitChangeValue(event){
    this.change.emit(event.taget)
  }
}
