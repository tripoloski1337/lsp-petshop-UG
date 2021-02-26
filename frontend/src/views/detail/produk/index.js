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
  CLink,
  CButton
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import "../../../assets/css/custom.css";


class Produk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      nama: "",
      nama_produk: "",
      price: "",
      keterangan:"",
      isLoading: true
    }

  }

  componentDidMount(){
    fetch("http://localhost:8000/api/produk/" + this.state.id)
    .then(response => response.json())
    .then(data => this.setState({nama:data[0].nama_produk, price: data[0].harga, keterangan:data[0].keterangan, isLoading:false}));
  }

  handleAddCart = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/cart/add/" + this.state.id + "/" + localStorage.getItem("id"))
    .then(response => response.json())
    .then(data => window.location="/#/cart");

  }

  render(){
    if(this.state.isLoading){
      return (<h1>Loading...</h1>)
    }
    
    return (
      <>
        <CRow>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardHeader>
                {this.state.nama}
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12" sm="6" md="4">
                          <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-thumb"/>
                      </CCol>
                      <CCol xs="12" sm="6" md="4">
                          <div class="detail">
                              <table>
                                <tr>
                                  <td>{this.state.keterangan}</td>
                                </tr>
                                <tr>
                                  <td>Rp. {this.state.price}</td>
                                </tr>
                              </table>
                              <br/><br/><br/><br/>
                              <CButton block color="success" onClick={this.handleAddCart}>Add to cart</CButton>
                          </div>
                      </CCol>
                  </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}

export default Produk
