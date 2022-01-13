import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import {
  Component,
  ContentChildren,
  HostListener,
  QueryList,
} from '@angular/core';
import { TicketItemComponent } from '../ticket-item/ticket-item.component';

@Component({
  selector: 'app-ticket-selector',
  templateUrl: './ticket-selector.component.html',
  styleUrls: ['./ticket-selector.component.scss'],
})
export class TicketSelectorComponent {
  @ContentChildren(TicketItemComponent)
  options!: QueryList<TicketItemComponent>;

  @HostListener('keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowLeft':
        this.keyManager.setPreviousItemActive();
        break;

      case 'ArrowRight':
        this.keyManager.setNextItemActive();
        break;

      default:
        break;
    }
  }

  private keyManager!: ActiveDescendantKeyManager<TicketItemComponent>;

  ngAfterContentInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.options)
      .withWrap()
      .withTypeAhead();
  }
}
