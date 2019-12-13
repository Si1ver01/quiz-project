import React, { Component } from "react";
import "./Auth.css";
import Button from "../Ui/Button/Button.js";
import Input from "../Ui/Input/Input.jsx";
import is from 'is_js'
import {connect} from 'react-redux'
import { auth } from "../../store/actions/auth";


 class Auth extends Component {
  state = {
    isFormValid : false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите коректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Введите коректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  loginHandler =  () => {
    this.props.auth(this.state.formControls.email.value,this.state.formControls.password.value,true)
 
  };

  registerHandler = () => {
    this.props.auth(this.state.formControls.email.value,this.state.formControls.password.value,false)

    // try {
    //   const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSXo66otszbDqkZb97K4LyL0EwycNSnrM',authData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  submitHandler = event => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.email) {
      isValid = is.email(value) && isValid
    }
    if (validation.minLength) {
      isValid = value.length >= 6 && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    } )

    this.setState({
      formControls, isFormValid
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          value={control.value}
          type={control.type}
          label={control.label}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  };

  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Auth</h1>
          <form onSubmit={this.submitHandler} className="AuthForm">
            {this.renderInputs()}
            <Button type="primary" onClick={this.loginHandler} disabled={!this.state.isFormValid}>
              Войти
            </Button>
            <Button type="success" onClick={this.registerHandler} disabled={!this.state.isFormValid}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    auth : (email,password,isLogin) => dispatch(auth(email,password,isLogin))
  }
}



export default connect(null,mapDispatchToProps)(Auth)
