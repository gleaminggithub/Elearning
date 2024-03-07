import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* In essence, this code instructs the React Router that:
          1.When the user accesses the root path (usually http://localhost:3000/),
          2.It should render the component named Home. */}
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App


// 1.<Link>:
// Function: Creates navigational links within your React application.
// Behavior:When clicked, triggers a navigation event without causing a full page reload.
// Updates the...... browser's URL...... in the address bar to reflect the new route.
// Renders the appropriate component based on the matched route definition.
// Example:
// JavaScript
// <Link to="/">Home</Link>
// <Link to="/about">About</Link>
// Use code with caution.

// 2. <Route>:
// Function: Defines a mapping between a URL path and the corresponding React component that should be rendered.
// Behavior:Acts as a declaration, not a visual element itself.
// Determines which component is displayed based on the current URL.
// Can be configured with various prop options:
// path: The URL path that triggers this route.
// exact: (Optional) Ensures only exact path match (default behavior in React Router v6).
// component: The React component to render when the path matches.
// JavaScript
{/* <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} /> */}
// route define
// Start by stating that React Router is a popular routing library used with React to manage navigation and display different UI components based on the URL.
// Mention that it allows you to create single-page applications (SPAs), where the entire application runs on a single HTML page, and the content dynamically changes based on the URL.