


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
      <img src="/placeholder.jpg" class="img-thumbnail" alt="placeholder" />
    </div>
    <div class="col-md-6 text-end">
      <h1>Art. Music. Self.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <section>
      <button class="btn btn-primary">Join</button>
      <button class="btn btn-outline-primary"> Explore</button>
      </section>
    </div>
  </div>
</div>

      <div class="container text-center row p-4 gap-3">
        <section class="col-md bg-danger text-primary-emphasis" >
          <p class="h5"> Music </p>
        <p class="text-primary-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
        <section class="col-md bg-info text-primary-emphasis">
        <p class="h5"> Art </p>
      <p class="text-primary-emphasis">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
       <section class="col-md bg-warning text-primary-emphasis">
        <p class="h5">Story </p>
        
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