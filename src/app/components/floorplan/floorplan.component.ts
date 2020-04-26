import { Component, OnInit } from '@angular/core';

export interface Room {
  id?: number;
  owner: string;
  hangoutLink: string;
  windowRef: Window;
}

@Component({
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent {

  public rooms: Room[] = [
    { owner: 'Putain', id: 0, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Isle', id: 1, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Arturo', id: 2, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Bert', id: 3, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Nate my Mate', id: 4, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Paultje Pils', id: 5, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Babush', id: 6, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Toni', id: 7, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Soppie', id: 8, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
    { owner: 'Anorld', id: 9, hangoutLink: 'https://hangouts.google.com/call/DTrANIf3KX0e0coBbkq-AEEI', windowRef: null },
  ];

  public currentLocation = 'nowhere';

  public onClickJoinHangout(clickedRoomId: number): void {
    const clickedRoom = this.rooms.find(room => room.id === clickedRoomId);
    if (clickedRoom == null) {
      return;
    }


    this.rooms.forEach(room => {
      if (room == null || room.windowRef == null) {
        return;
      }
      room.windowRef.close();
    });
    clickedRoom.windowRef = window.open(clickedRoom.hangoutLink);
  }

}
