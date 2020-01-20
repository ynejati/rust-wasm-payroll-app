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

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    height: 450,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    padding: 10,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  };

  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 300
  }

  const signInButtonStyle: React.CSSProperties = {
    height: 32,
    borderRadius: 4,
    fontSize: 16
  }

  const signUpButtonStyle: React.CSSProperties = {
    marginLeft: 16,
    borderRadius: 4,
    height: 26
  }

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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: 32,
    borderRadius: 2
  };

  return (
    <div className='loginPage' style={containerStyle}>
        <div style={{ cursor: 'pointer', alignItems: 'center', alignSelf: 'flex-end', display: 'flex' }}>
          <div style={{ fontSize: 12 }}>English (US)</div>
          <KeyboardDownArrow />
        </div>
        <div style={{ margin: 30, fontSize: 22, fontWeight: 600 }}>
        Welcome to ABC
        </div>
      <div style={formContainerStyle}>
        <div>
          <div>Username</div>
          <input style={inputStyle} ref={usernameRef} onChange={onUsernameChange} type='text'></input>
        </div>
        <div style={{ marginTop: 8, fontSize: 14 }}>
          <input style={{ cursor: 'pointer' }} type='checkbox'></input>
          <label>Remember My User ID</label>
        </div>
        <div style={{ margin: '25 0' }}>
          <div>Password</div>
          <input style={inputStyle} ref={passwordRef} onChange={onPasswordChange} type='password'></input>
        </div>
        <button className='signInButton' disabled={isSignInDisabled} style={signInButtonStyle} onClick={props.onSignInClick}>SIGN IN</button>
        <a style={{ fontSize: 14 }} href="">Forgot your username/password?</a>
      </div>
      <div style={{ marginTop: 20 }}>
        <a>Need an account?</a>
        <button className='signUpButton' style={signUpButtonStyle} onClick={onSignUpClick}>SIGN UP</button>
      </div>
    </div>
  );
}