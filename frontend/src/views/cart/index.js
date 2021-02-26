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
import "../../assets/css/custom.css"

import Card from "./cardco";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    fetch("http://localhost:8000/api/cart/list/" + localStorage.getItem("id"))
    .then(response => response.json())
    .then(data => this.setState({data:data, isLoading:false}));
  }

  render(){
    if(this.state.isLoading){
      return (<h1>Loading...</h1>)
    }
    var { data } = this.state;
    var x = 0;
    
      data['data'].map((item2, idx) => 
      x += Number(item2.harga)
      )
    var tot = x
    return (
      <>
          <CRow>
          <CCol xs="12" sm="6" md="12">
            <CCard>
              <CCardHeader>
                Process Checkout
              </CCardHeader>
              <CCardBody>
                  <CRow>
                      <CCol xs="12" sm="6" md="12">
                        <table class="table">
                          <tr>
                            <td>
                              Subtotal 
                            </td>
                            <td>: 
                              {tot}
                            </td>
                          </tr>
                        </table>
                      <a class="btn btn-success btn-block btn-block" href={"https://wa.me/6289680837605?text=hai%20admin%0Aid%20saya " + localStorage.getItem("id") + "%0Aberikut%20total%20harga%20saya " + tot}>Checkout</a>
                      </CCol>
                  </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          {
            data['data'].map((item, idx) => 
            
            <Card id={item.id_produk} idc={item._id}/>
            )}
        </CRow>
      </>
    )
  }
}

export default Cart
