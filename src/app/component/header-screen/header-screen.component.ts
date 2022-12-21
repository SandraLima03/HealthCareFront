import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-screen',
  templateUrl: './header-screen.component.html',
  styleUrls: ['./header-screen.component.css']
})
export class HeaderScreenComponent {
  @Input('title') title :string = "";
}
