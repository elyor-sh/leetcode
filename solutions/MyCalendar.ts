
// https://leetcode.com/problems/my-calendar-i/description

export class MyCalendar {
  calendar: number[][];
  
  constructor() {
      this.calendar = [];
  }

  book(start: number, end: number): boolean {
      if (this.calendar.filter(e => e[0] < end && e[1] > start).length !== 0) return false;
      this.calendar.push([start, end]);
      return true;
  }
}