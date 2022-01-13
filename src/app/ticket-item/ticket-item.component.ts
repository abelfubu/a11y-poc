import { Highlightable } from '@angular/cdk/a11y';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss'],
})
export class TicketItemComponent implements Highlightable {
  disabled = false;
  private _active = false;

  @HostBinding('class.active') get isActive() {
    return this._active;
  }

  setActiveStyles(): void {
    this._active = true;
  }

  setInactiveStyles(): void {
    this._active = false;
  }

  getLabel(): string {
    return 'label';
  }
}
