import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  constructor(private clipboard: Clipboard) {}

  public copyToClipboard(): void {
    const successful = this.clipboard.copy('I want this in my clipboard');

    if (successful) {
      // do something
    } else {
      // do something else
    }
  }

  public copyToClipboardWithParameter(value: HTMLElement): void {
    const text: string = value.textContent || '';
    console.log(text);
    const successful = this.clipboard.copy(text);

    if (successful) {
      // do something
    } else {
      // do something else
    }
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
