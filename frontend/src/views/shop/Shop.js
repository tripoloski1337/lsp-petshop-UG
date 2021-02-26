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

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      apiUrl: "http://localhost:8000/api/produk/list"
    }
  }

  componentDidMount() {
    fetch(this.state.apiUrl)
        .then(response => response.json())
        .then(data => this.setState({data:data['data'] , isLoading:false}));
  }

  render(){
    if(this.state.isLoading){
      return (<h1>Loading...</h1>)
    }
    var {data} = this.state;
    if(localStorage.getItem("tipe_user") == "user"){
      return (
        <>
          <CRow>
            {
              data.map((item, idx) => 
              <CCol xs="12" sm="6" md="4">
                <CCard>
                  <CCardHeader>
                    {item.nama_produk}
                  </CCardHeader>
                  <CCardBody>
                    <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
                    <p>Harga: Rp.{item.harga},-</p>
                  </CCardBody>
                  <CCardFooter>
                  <CButton block color="primary" to={"/detail/produk/" + item._id}>Detail</CButton>
                  </CCardFooter>
                </CCard>
              </CCol>
              )
            }
          </CRow>
        </>
      )
    }else{
      return (
        <>
          <CRow>
            {
              data.map((item, idx) => 
              <CCol xs="12" sm="6" md="4">
                <CCard>
                  <CCardHeader>
                    {item.nama_produk}
                  </CCardHeader>
                  <CCardBody>
                    <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
                    <p>Harga: Rp.{item.harga},-</p>
                  </CCardBody>
                  <CCardFooter>
                  <CButton block color="primary" to={"/login"}>Detail</CButton>
                  </CCardFooter>
                </CCard>
              </CCol>
              )
            }
          </CRow>
        </>
      )
    }
  }
}

export default Shop
