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

class Card extends React.Component {
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

  handleRemove = (event) =>{
    fetch("http://localhost:8000/api/cart/delete/" + this.props.idc)
    .then(response => response.json())
    .then(data => this.setState({data:data, isLoading:false}));
    console.log(this.state.data); 
    window.location="/#/"
  }

  render(){
    if(this.state.isLoading){
      return (<h1>Loading...</h1>)
    }
    var { data } = this.state;
    console.log(this.state.data);
    return (
      <>
          
          <CCol xs="12" sm="6" md="4">
            <CCard>
              <CCardHeader>
                {this.state.data[0].nama_produk}
              </CCardHeader>
              <CCardBody>
                <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
              </CCardBody>
              <CCardFooter>
              <center>Rp. {this.state.data[0].harga},-</center>
              <br/>
              <CButton block color="danger" onClick={this.handleRemove}>Remove</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
          
      </>
    )
  }
}

export default Card
