// write the actual client side router
import Dashboard from "./views/Dashboard.js"

const navigateTo = (url) => {
  history.pushState(null, null, url)
}

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ]

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    }
  })

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch)

  // default match route
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  const view = new match.route.view()

  document.querySelector("#app").innerHTML = await view.getHtml()
}

// when clicks backToPage buttons, it works
window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
  // event delegation
  document.body.addEventListener("click", (e) => {
    // if e.target has the attribute "data-link" then,
    if (e.target.matches("[data-link]")) {
      e.preventDefault()
      navigateTo(e.target.href)
      router()
    }
  })
  router()
})
