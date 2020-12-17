import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  @Input() navBarData: Array<any> = [];
  @Output() messageEvent = new EventEmitter<{clickedElement:number, navBarData: Array<any>}>();

  constructor() { }

  ngOnInit(): void {
  }

  navBarClick(clickedElement: any, index: number){
    console.log("clickedElement", clickedElement, "index", index)
    this.navBarData = this.navBarData.slice(0, index)
    console.log("navBarData child", this.navBarData)
    this.messageEvent.emit({clickedElement:clickedElement, navBarData:this.navBarData})
  }
  

}
