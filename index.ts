import { execute } from "./helpers/performance";
import {minFallingPathSum} from "./solutions/931.minFallingPathSum";
// execute(() => minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]));

class ActionBus {
  private list: Map<string, Set<() => void>>

  constructor() {
    this.list = new Map()
  }

  subscribe (fn: string, subscriber: () => void) {
    if(!this.list.has(fn)){
      this.list.set(fn, new Set())
    }

    const subscribers = this.list.get(fn)!
    subscribers.add(subscriber)

    this.list.set(fn, subscribers)
  }

  createAction <T>(callback: (arg: T) => void) {

    const uid = Date.now().toString()

    const self = this

    return {
      subscribe(callback: () => void) {
        self.subscribe(uid, callback)
        return this
      },
      fx (arg: T ) {
        callback(arg)
        self.callAction(uid)
      }
    }
  }

  callAction (uid: string) {
    const subscribers = this.list.get(uid)!

    for (const sub of subscribers){
      sub()
    }
  }
}

const actionBus = new ActionBus()

const langs = ['JS', 'TS']

function addLangs (lang: string) {
  langs.push(lang)
}

function langsString () {
  console.log('lang str',langs.join(' . '))
}

function logLangsLength () {
  console.log('lang len',langs.length)
}

const langAction = actionBus.createAction(addLangs)

langAction
  .subscribe(langsString)
  .subscribe(logLangsLength)

langAction.fx('Rust')
langAction.fx('C#')