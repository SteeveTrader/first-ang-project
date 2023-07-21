import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lorem-card',
  templateUrl: './lorem-card.component.html',
  styleUrls: ['./lorem-card.component.scss']
})
export class LoremCardComponent {

  @Input()
  public brand: string = '';
  @Input()
  public model: string = '';
  @Input()
  public img: string = '';


}
