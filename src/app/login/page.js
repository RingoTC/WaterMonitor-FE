//import "./login.css"

export default function LogIn() {
    return (
        <div className="home p-0">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-md-6 ">
                        <img src="images/login.png" className="left-half" alt="..."/>
                    </div>

                    
                    <div className="col-md-6 login-container">
                        <h2 className="login-title">Let&apos;s Log In!</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"><b>Username</b></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"/>
                                <div id="emailHelp" className="form-text">Username, Phone Number or Email</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember the username and password next time</label>
                                <div id="emailHelp" className="form-text login-forget-password"><a href="#">Forget Password?</a></div>
                            </div>

                            <div class="d-grid gap-2">
                                <button class="btn btn-primary login-button" type="button">Log In</button>
                            </div>
                        </form>

                    

                        <div className="login-signup">Don&apos;t have an account?

                           
                            <a href="/signup"> Sign Up</a> 
                    
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
  }
