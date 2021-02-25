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

const Shop = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
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
            <CButton block color="primary" to="/detail/produk">Detail</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Shop
