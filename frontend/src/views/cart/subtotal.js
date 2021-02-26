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

class Subtotal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    }
  }

  componentDidMount(){
    console.log(this.props.id)
    fetch("http://localhost:8000/api/produk/" + this.props.id)
    .then(response => response.json())
    .then(data => this.setState({data:data, isLoading:false}));
  }

  render(){
    if(this.state.isLoading){
      return (<h1>Loading...</h1>)
    }
    var { data } = this.state;
    console.log(this.state.data);
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
                        <CButton block color="success">Checkout</CButton>
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

export default Subtotal
