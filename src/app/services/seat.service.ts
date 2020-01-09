import { Injectable } from '@angular/core';

export interface ISeat {
  soGhe: number,
  tenGhe: string,
  gia: number,
  trangThai: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor() { }
}
