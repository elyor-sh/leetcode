


type UserTweets = {
  id: number
  time: number
}

export class Twitter {

  tweets = new Map<number, UserTweets[]>()
  follows = new Map<number, Set<number>>()

  time = 0

  constructor() {
    
  }

  postTweet(userId: number, tweetId: number): void {
    const tw = this.tweets.get(userId) || []
    tw.push({
      id: tweetId,
      time: this.time++
    })
    this.tweets.set(userId, tw)
  }

  getNewsFeed(userId: number): number[] {
    const flws = this.follows.get(userId) || new Set<number>()
    flws.add(userId)
    const tws: UserTweets[] = []
    for (const flwId of flws){
      tws.push(...(this.tweets.get(flwId) || []))
    }

    return tws.sort((a, b) => b.time - a.time).map(a => a.id).slice(0, 10)
  }

  follow(followerId: number, followeeId: number): void {
   const flws = this.follows.get(followerId) || new Set<number>()
   flws.add(followeeId)
   this.follows.set(followerId, flws)
  }

  unfollow(followerId: number, followeeId: number): void {
    const flws = this.follows.get(followerId)

    if(flws){
      flws.delete(followeeId)
      this.follows.set(followerId, flws)
    }
  }
}