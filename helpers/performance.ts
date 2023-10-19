class TimeChecker {

  now: number

  constructor () {
    this.now = performance.now()
  
  }

  start = () => {
    this.now = performance.now()
  }

  logDiff = () => {
    console.log('Execution time: ', performance.now() - this.now);
  }
}

export const execute = (cb: () => any, withTime = true) => {
  const time = new TimeChecker()
  console.log(cb());
  withTime && time.logDiff()
}