import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";

const qs = require('querystring');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    }
    this.handleSumbitAuth = this.handleSumbitAuth.bind(this);
  }



handleChangePassword = (event) => {
  this.setState({
    password:event.target.value
  });
  console.log("password : " + this.state.password);
}

handleChangeUsername = (event) => {
this.setState({
  username:event.target.value
    });
}

    
handleSumbitAuth = (event) => {
  event.preventDefault();
  var urlpost = "http://localhost:8000/api/login";

  const config = {
      headers: {
          "Content-type": "application/x-www-form-urlencoded"
      }
  }

  const reqBody = {
      username : this.state.username,
      password : this.state.password
  }

  axios.post(urlpost , qs.stringify(reqBody) , config)
      .then((result) => {
        console.log("oke")
          console.log(result);
          if(result.data.msg == "fail"){
              this.setState({
                  error:  <React.Fragment>
                              <badge color="warning" >
                                  ERORR : incorrect username or password
                              </badge>
                          </React.Fragment>
              });
          }else{
              this.setState({
                  error:""
              });
              localStorage.setItem("token",result.data.token);
              localStorage.setItem("id",result.data.id);
              localStorage.setItem("username",result.data.username);
              localStorage.setItem("email",result.data.email);
              localStorage.setItem("tipe_user", result.data.tipe);
              this.setState({
                  error:window.location="/"
              });
          }
      })
}


  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <form onSubmit={this.handleSumbitAuth}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleChangeUsername}/>
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.handleChangePassword} />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <input type="submit" color="primary" className="px-4" value="Login"/>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </form>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Untuk dapat membeli produk, anda harus mendaftar sebagai user terlebih dahulu.</p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Login
