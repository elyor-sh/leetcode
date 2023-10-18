class TimeChecker {

  now: number = performance.now()

  start = () => {
    this.now = performance.now()
  }

  logDiff = () => {
    console.log('Execution time: ', performance.now() - this.now);
  }
}

export const timeChecker = new TimeChecker()

export const execute = (cb: () => any, withTime = true) => {
  withTime && timeChecker.start()
  console.log(cb());
  withTime && timeChecker.logDiff()
}