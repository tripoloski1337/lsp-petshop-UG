import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { render } from 'enzyme/build'

import axios from "axios";
const qs = require('querystring');



class Detail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id: localStorage.getItem("id"),
        apiUrl: "http://localhost:8000/api/users/detail/",
        data: [],
        username: '',
        phone: "",
        email: '',
        alamat: '',
        isLoading: true,
      }
  }

  componentDidMount() {
    fetch(this.state.apiUrl + this.state.id)
        .then(response => response.json())
        .then(data => this.setState({data:data[0], username:data[0].username , email:data[0].email, phone:data[0].phone, alamat:data[0].alamat,isLoading: false}));
  }

  handleChangeUsername = (event) => {
    this.setState({
        username: event.target.value
    });
    console.log(this.state.username);    
  }

  handleChangePhone = (event) => {
    this.setState({
        phone:event.target.value
    });
    console.log(this.state.phone)    
  }

  handleChangeEmail = (event) => {
    this.setState({
        email:event.target.value
    });
    console.log(this.state.email)    
  }

  handleChangeAlamat = (event) => {
    this.setState({
        alamat:event.target.value
    });
    console.log(this.state.alamat)    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var urlpost = "http://localhost:8000/api/users/update/";
    const config = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    }
  
    const reqBody = {
        username : this.state.username,
        email : this.state.email,
        phone: this.state.phone,
        alamat: this.state.alamat,
    }

    axios.post(urlpost + this.state.id, qs.stringify(reqBody) , config)
      .then((result) => {
        console.log("oke")
          console.log(result);
          if(result.data.msg == "fail"){
              this.setState({
                  error:  <React.Fragment>
                              <badge color="warning" >
                                  ERORR : data can't be added
                              </badge>
                          </React.Fragment>
              });
          }else{
              this.setState({
                  error:""
              });
              this.setState({
                  error:window.location="/"
              });
          }
      })

  }

  render(){
    return (
        <>
        <CRow>
            <CCol xs="12" sm="6" md="12">
            <CCard>
                <CCardHeader>
                Profile {this.state.data["username"]}
                </CCardHeader>
                <form onSubmit={this.handleSubmit}>
                <CCardBody>
                    <table className="table">
                        <tr>
                            <td>Username</td>
                            <td><input type="text" name="username" className="form-control" onChange={this.handleChangeUsername} value={this.state.username}/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" className="form-control" onChange={this.handleChangeEmail} value={this.state.email} /></td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td><input type="text" name="phone" className="form-control" onChange={this.handleChangePhone} value={this.state.phone}/></td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td><input type="text" name="alamat" className="form-control" onChange={this.handleChangeAlamat} value={this.state.alamat} /></td>
                        </tr>
                        <tr>
                            <td>Tiper user</td>
                            <td>: {this.state.data['tipe_user']}</td>
                        </tr>
                    </table>
                </CCardBody>
                <CCardFooter>
                    <input type="submit" value="submit" className="btn btn-primary btn-block"/>
                </CCardFooter>
                </form>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
  }
}

export default Detail
