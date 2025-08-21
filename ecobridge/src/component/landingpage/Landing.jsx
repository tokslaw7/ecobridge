import Image from "./piano.jpg"
import Image2 from "./paint.jpg"
import Image3 from "./book.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';



// import About from "./about";
// import Login from "./login";
// import Signup from "./signup";
// import tailwindcss from "@tailwindcss/vite";


export default function Landing(){
    return(
      <>
      <div class="container my-5">
  <div class="row align-items-center">
  <div class="col-md-6 text-center">
    <section class="carousel slide" data-bs-ride="carousel">
      <div class="carousel inner">
      <div class="carousel-item active">
      <img src={Image} className="img-fluid " alt="placeholder" />
      </div>
      <div class="carousel-item">
      <img src={Image2} className="img-fluid " alt="placeholder" />
      </div>
      <div class="carousel-item">
      <img src={Image3} className="img-fluid" alt="placeholder" />
      </div>
      </div>
      </section>
    </div>
    <div class="col-md-6 text-end">
      <h1>Art. Music. Self.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <section>
      <a href="/auth/signup" class="btn btn-primary">Join</a>
      <a href="/activity" class="btn btn-outline-primary"> Explore</a>
      </section>
    </div>
  </div>
</div>

      <div class="container text-center row p-4 gap-3">
        <section class="col-md bg-danger text-primary-emphasis" >
          <p class="h5"> Music </p>
          <i class="bi bi-music-note-beamed fs-2"></i>
        <p class="text-primary-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
        <section class="col-md bg-info text-primary-emphasis">
        <p class="h5"> Art </p>
        <i class="bi bi-palette-fill fs-2"></i>
      <p class="text-primary-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
       <section class="col-md bg-warning text-primary-emphasis">
        <p class="h5">Story </p>
        <i class="bi bi-book fs-2"></i>
        <p class="text-primary-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        
      </div>
      </>
    )
}


// <Router>
        //     <nav style={style.nav}>
        //         {/* <Link to="/about" style={style.link}> About </Link>
        //         <Link to="/login" style={style.link}> Login</Link>
        //         <Link to="/signup" style={style.link}> SignUp</Link> */}
        //     </nav>
        //     <div style={style.content}>
        //         <Routes>
        //         <Route path="/about" element={<About />} />
        //         <Route path="/login" element={<Login />} />
        //         <Route path="/signup" element={<Signup />} />
        //         </Routes>
        //     </div>
        // </Router>
    
//     function tailwindcss(){
//       return(
//         <div>
//           <button outline> about </button>
//         </div>
//       )
//     }