import { Highlightable } from '@angular/cdk/a11y';
import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { TicketSelectorComponent } from '../ticket-selector/ticket-selector.component';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements Highlightable {
  disabled = false;
  private _active = false;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly host: TicketSelectorComponent
  ) {}

  @HostBinding('class.active') get isActive() {
    return this._active;
  }

  @HostBinding('class.disabled') get isDisabled() {
    return this.disabled;
  }

  @HostListener('click')
  onClick() {
    this.host.keyManager.setActiveItem(this);
    this.scrollIntoView();
  }

  setActiveStyles(): void {
    this._active = true;
  }

  setInactiveStyles(): void {
    this._active = false;
  }

  scrollIntoView(): void {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }
}
