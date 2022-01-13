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
    this.keyManager.onKeydown(event);
    this.keyManager.activeItem?.scrollIntoView();
  }

  keyManager!: ActiveDescendantKeyManager<TicketItemComponent>;

  ngAfterContentInit() {
    this.keyManager = new ActiveDescendantKeyManager(this.options).withWrap();
    this.keyManager.withHorizontalOrientation('ltr');
    this.keyManager.withVerticalOrientation(false);
    this.options.get(
      Math.floor(Math.random() * this.options.length)
    )!.disabled = true;
    this.keyManager.setFirstItemActive();
  }
}
