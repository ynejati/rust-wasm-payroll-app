import * as React from 'react';
import { KeyboardDownArrow } from './index';

export const Login: React.FunctionComponent<any> = (props: any) => {
  const [userNameMeetsMinLength, setUserNameMeetsMinLength] = React.useState(false);
  const [passwordMeetsMinLength, setPasswordMeetsMinLength] = React.useState(false);
  const [isSignInDisabled, setSignInDisabled] = React.useState(true);

  React.useEffect(() => {
    if (passwordMeetsMinLength && userNameMeetsMinLength) {
      setSignInDisabled(false);
    } else {
      setSignInDisabled(true);
    }
  }, [passwordMeetsMinLength, userNameMeetsMinLength]);

  const minLength: number = 4;
  const usernameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueLength: number = e.currentTarget.value.length;
    if (!passwordMeetsMinLength && valueLength >= minLength) {
      setPasswordMeetsMinLength(true);
    } else if (passwordMeetsMinLength && valueLength < minLength) {
      setPasswordMeetsMinLength(false);
    }
  }

  const onSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.wasm.greet('Sign Up');
  }

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueLength: number = e.currentTarget.value.length;
    if (!userNameMeetsMinLength && valueLength >= minLength) {
      setUserNameMeetsMinLength(true);
    } else if (userNameMeetsMinLength && valueLength < minLength) {
      setUserNameMeetsMinLength(false);
    }
  }

  return (
    <div className='loginContentContainer'>
      <div className='loginTranslationContainer'>
        <div>English (US)</div>
        <KeyboardDownArrow />
      </div>
      <div className='loginWelcome'>
        Welcome to ABC
        </div>
      <div className='loginFormContainer'>
        <div>
          <div>Username</div>
          <input className='loginInput' ref={usernameRef} onChange={onUsernameChange} type='text'></input>
        </div>
        <div className='rememberContainer'>
          <input type='checkbox'></input>
          <label>Remember My User ID</label>
        </div>
        <div className='passwordContainer'>
          <div>Password</div>
          <input className='loginInput' ref={passwordRef} onChange={onPasswordChange} type='password'></input>
        </div>
        <button className='signInButton' disabled={isSignInDisabled} onClick={props.onSignInClick}>SIGN IN</button>
        <a className='forgotLink' href="">Forgot your username/password?</a>
      </div>
      <div className='needAccountContainer'>
        <span>Need an account?</span>
        <button className='signUpButton' onClick={onSignUpClick}>SIGN UP</button>
      </div>
    </div>
  );
}