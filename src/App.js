// routing -> Home ,about ,contact ,settings -> simple navigation bar
import { BrowserRouter, Link, Routes,Route } from "react-router-dom";
function Home() {
  return (
    <div>Home page</div>
  )
}

function About() {
  return (
    <div>About page</div>
  )
}

function Contact() {
  return (
    <div>Contact page</div>
  )
}

function App()
{
  return (
    <BrowserRouter>
    <nav>
      <ul>
        {/* localhost:3000/contact */}
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
// public folder -> index.html -> div tag with id="root" -> created a Reactdom with base as root 
// root->App->Home
// index.html -> div -> Home page content
// root->App->About
// index.html -> div -> ABout page content
// localhost:3000/about
// index.html -> div -> Contact page content
// localhost:3000/contact
// root->App->Contact
// index.html -> based on the url -> we are rendering the component 
