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

const Cart = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

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
                    <CButton block color="danger">Checkout</CButton>
                    </CCol>
                </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
               whiskas
            </CCardHeader>
            <CCardBody>
              <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
            </CCardBody>
            <CCardFooter>
            <CButton block color="primary" to="/detail/produk">Remove</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
               whiskas
            </CCardHeader>
            <CCardBody>
              <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
            </CCardBody>
            <CCardFooter>
            <CButton block color="primary" to="/detail/produk">Remove</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
               whiskas
            </CCardHeader>
            <CCardBody>
              <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-list"/>
            </CCardBody>
            <CCardFooter>
            <CButton block color="primary" to="/detail/produk">Remove</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Cart
