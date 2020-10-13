import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle("Posts")
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <ul>
        <li><a href="/posts/1" data-link>When is my birthday?</a></li>
        <li><a href="/posts/2" data-link>Which university did I graduate?</a></li>
        <li><a href="/posts/3" data-link>What is your curreng goal?</a></li>
      </ul>
    `
  }
}
