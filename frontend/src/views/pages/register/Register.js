import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone:"",
      alamat:"",
      tipe_user:""
    }
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

  handleChangeEmail = (event) => {
    this.setState({
      email:event.target.value
      });
  }

  handleChangePhone = (event) => {
    this.setState({
      phone:event.target.value
    });
  }

  handleChangeAlamat = (event) => {
    this.setState({
      alamat:event.target.value
    });
  }

  handleChangeTipeUser = (event) => {
    this.setState({
      tipe_user:event.target.value
    });
  }



  handleSumbitAuth = (event) => {
    event.preventDefault();
    var url = "http://localhost:8000/api/register";

    const config = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    }

    const reqBody = {
        username : this.state.username,
        password : this.state.password,
        email : this.state.email,
        phone : this.state.phone,
        addr: this.state.alamat,
        tipe_user: this.state.tipe_user,
    }

    console.log(reqBody)

    axios.post(url , qs.stringify(reqBody) , config)
        .then((result) => {
            console.log(result);
            if(result.data.msg == "fail"){
                this.setState({
                    error:  <React.Fragment>
                                <badge color="warning" >
                                    ERORR : fail data
                                </badge>
                            </React.Fragment>
                });
            }else{
                this.setState({
                    error:""
                });
                this.setState({
                    error:window.location="/#/login"
                });
            }
        })
  }



  render(){
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <form onSubmit={this.handleSumbitAuth}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleChangeUsername} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" value={this.state.email} onChange={this.handleChangeEmail} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="new-password" value={this.state.password} onChange={this.handleChangePassword} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-home" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Alamat" autoComplete="new-password" value={this.state.alamat} onChange={this.handleChangeAlamat}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-phone" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Phone" autoComplete="new-password" value={this.state.phone} onChange={this.handleChangePhone}/>
                    </CInputGroup>
                    <input type="submit" color="success" block value="Create Account"/>
                  </form>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Register
