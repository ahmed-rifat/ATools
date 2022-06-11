import React, { useState } from 'react';
import "./Login.css"
import Swal from 'sweetalert2'



const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [token, setToken] =useState('');
    const userToken = token.token;
    
   

    
    const formSubmit =()=> {
      if(password)  {
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          text: (userToken),
        })
      const userData= {
        email : email,
        password: password
      }
      const url= `https://reqres.in/api/login`;
  fetch(url,{
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body:JSON.stringify(userData)
  })
  .then(res=>res.json())
  .then(result => {
      setToken(result);
  })
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Missing Password!',
  })
}

 


};

    return (
        <div className='container'>
            <section class="vh-100 main-background">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card card-style">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid image-style" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex justify-content-center align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3 logo-style"></i>
                    <span class="h1 fw-bold mb-0">Welcome Back</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3 sign-into-account">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input onChange={e=>setEmail(e.target.value)} type="email" id="form2Example17" class="form-control form-control-lg" placeholder='Email Address*' />
                  </div>

                  <div class="form-outline mb-4">
                    <input onChange={e=>setPassword(e.target.value)}  type="password" id="form2Example27" class="form-control form-control-lg" placeholder='Password*' />
                  </div>
                  <div class="form-check d-flex justify-content-between mb-4">
                 <div>
                 <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
                 </div>
              <a class="small text-muted" href="#!">Forgot password?</a>
            </div>
            


                  <div class="pt-1 mb-4 d-grid">
                    <button onClick={formSubmit} class="btn btn-dark" type="button">Login</button>
                  </div>
                  
                
                  
                </form>
              

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Login;