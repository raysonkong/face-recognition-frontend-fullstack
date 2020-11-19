import './SignIn.css';
import React from 'react';

const SignIn = () => {
    return (
        <div className="pa4 black-80">
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center br3 shadow-5 mw-5">
            <form className="measure center inputs pa3">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0 tc">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                  </div>
                  <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"></input> Remember me</label>
                </fieldset>
                <div className="center">
                  <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer dib" type="submit" value="Sign in"></input>
                </div>

                <div className="lh-copy mt3 buttons center signup">
                  <a href="#0" className="tc f6 link dim black db center">Or Register</a>
                </div>
              </form>
            </article>
        </div>
    )

}

export default SignIn;