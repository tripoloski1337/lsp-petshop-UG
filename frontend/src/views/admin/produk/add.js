import React from 'react'
import {
  CBadge,
  CCardHeader,
  CDataTable,
  CRow,
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
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'
import axios from "axios";

const qs = require('querystring');


class Produk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nama:"",
            price:"",
            keterangan: ""
        }
    }

    handleChangeNama = (event) => {
        this.setState({
            nama:event.target.value
        });
        console.log(this.state.nama)    
    }
     
    
    handleChangePrice = (event) => {
        this.setState({
            price:event.target.value
        });
        console.log(this.state.price)    
    }

    handleChangeKet = (event) => {
        this.setState({
            keterangan:event.target.value
        });
        console.log(this.state.keterangan)    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var urlpost = "http://localhost:8000/api/produk/add";

        const config = {
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }

        const reqBody = {
            nama: this.state.nama,
            harga : this.state.price,
            ket : this.state.keterangan,
        }

        axios.post(urlpost , qs.stringify(reqBody) , config)
        .then((result) => {
            console.log("oke")
            console.log(result);
            if(result.data.msg == "exist"){
                this.setState({
                    error:  <React.Fragment>
                                <badge color="warning" >
                                    ERORR : something went wrong
                                </badge>
                            </React.Fragment>
                });
            }else{
                this.setState({
                    error:""
                });
                this.setState({
                    error:window.location="/#/dashboard"
                });
            }
        })
    }

    render(){
        return (
            <>
            <CRow>
                <CCol xs="12" lg="12">
                <CCard>
                    <CCardHeader>
                    Manage Product
                    </CCardHeader>
                    <CCardBody>
                    <form onSubmit={this.handleSubmit}>
                            <h1>Add produk data</h1>
                            <p className="text-muted">input all the data</p>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-user" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Nama" autoComplete="Nama" value={this.state.nama} onChange={this.handleChangeNama}/>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>$</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="number" placeholder="Harga" autoComplete="Harga" value={this.state.price} onChange={this.handleChangePrice}/>
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-star" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Keterangan" autoComplete="Keterangan" value={this.state.keterangan} onChange={this.handleChangeKet}/>
                            </CInputGroup>
                            <input type="submit" class="btn btn-success" block value="Create Product"/>
                        </form>
                    </CCardBody>
                </CCard>
                </CCol>

            </CRow>

            
            </>
        )
    }
}

export default Produk
