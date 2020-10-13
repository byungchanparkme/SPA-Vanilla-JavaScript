import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.postId = params.id
    this.setTitle("Viewing Post")
    this.posts = [
      { id: 1, title: "When is my birthday?", content: "May 22nd" },
      { id: 2, title: "Which university did I graduate?", content: "Korea Aerospace University" },
      { id: 3, title: "What is your curreng goal?", content: "My goal is to become a frontend developer" },
    ]
  }

  filterPost = () => {
    return this.posts.filter((post) => post.id == this.postId)
  }

  async getHtml() {
    return this.filterPost().map((post) => {
      return `
      <h1>Post${post.id} : ${post.title}</h1>
      <p>Answer) ${post.content}</p>
    `
    })[0]
  }
}
