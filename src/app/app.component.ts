import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'house-party-demo';

  private hangoutLink1 = 'https://hangouts.google.com/call/qffcxSsCX7o55tnNimFtAEEI';
  private hangoutLink2 = 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI';

  private tabRef1: Window;
  private tabRef2: Window;

  public currentLocation = 'nowhere';

  public onClickJoinHangout1(): void {
    this.tabRef1 = window.open(this.hangoutLink1);
    this.currentLocation = 'Rubens room';
    if (this.tabRef2 != null) {
      this.tabRef2.close();
    }
  }

  public onClickJoinHangout2(): void {
    this.tabRef2 = window.open(this.hangoutLink2);
    this.currentLocation = 'Ilses room';
    if (this.tabRef1 != null) {
      this.tabRef1.close();
    }
  }
}
