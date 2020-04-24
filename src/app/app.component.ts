import { Component } from '@angular/core';
import { stringify } from 'querystring';

export interface Room {
  owner: string;
  hangoutLink: string;
  windowRef: Window;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public rooms: Room[] = [
    { owner: 'Putain', hangoutLink: 'https://hangouts.google.com/call/qffcxSsCX7o55tnNimFtAEEI', windowRef: null },
    { owner: 'Isle', hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Arturo', hangoutLink: '', windowRef: null },
    { owner: 'Bert', hangoutLink: '', windowRef: null },
    { owner: 'Nate my Mate', hangoutLink: '', windowRef: null },
    { owner: 'Paultje Pils', hangoutLink: '', windowRef: null },
    { owner: 'Babush', hangoutLink: '', windowRef: null },
    { owner: 'Toni', hangoutLink: '', windowRef: null },
    { owner: 'Soppie', hangoutLink: '', windowRef: null },
    { owner: 'Anorld', hangoutLink: '', windowRef: null },
  ];

  private hangoutLink1 = '';
  private hangoutLink2 = '';

  private tabRef1: Window;
  private tabRef2: Window;

  public currentLocation = 'nowhere';

  public onClickJoinHangout(clickedRoom: Room): void {
    this.rooms.forEach(room => {
      if (room == null) {
        return;
      }
      room.windowRef.close();
    });
    clickedRoom.windowRef = window.open(clickedRoom.hangoutLink);
  }

  public generateColorStyle(roomToGenerateColor: Room): string {
    let index = this.rooms.findIndex(room => room === roomToGenerateColor);
    if (index == null) {
      index = 0;
    }

    const maxHue = 360;
    const hue = (maxHue / this.rooms.length) * index;

    const styleString = `hsl(${hue}, 50%, 50%)`;
    return styleString;
  }

  // public onClickJoinHangout1(): void {
  //   this.tabRef1 = window.open(this.hangoutLink1);
  //   this.currentLocation = 'Rubens room';
  //   if (this.tabRef2 != null) {
  //     this.tabRef2.close();
  //   }
  // }

  // public onClickJoinHangout2(): void {
  //   this.tabRef2 = window.open(this.hangoutLink2);
  //   this.currentLocation = 'Ilses room';
  //   if (this.tabRef1 != null) {
  //     this.tabRef1.close();
  //   }
  // }
}
