class Post {
  #number = 0
  #subscribers = []

  constructor (name) {
    this.name = name
  }

  get summary () {
    return `${this.name} publication number ${this.#number}`
  }

  getSubscribers () {
    return this.#subscribers.map(user => user.name).join(',')
  }

  attach (user) {
    this.#subscribers.push(user)
  }
}

module.exports = Post
