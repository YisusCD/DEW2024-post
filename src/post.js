class Post {
  #number
  constructor (name) {
    this.name = name
    this.#number = 0
  }

  get summary () {
    return `${this.name} publication number ${this.#number}`
  }
}

module.exports = Post
