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


const Produk = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="12">
          <CCard>
            <CCardHeader>
              whiskas
            </CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol xs="12" sm="6" md="4">
                        <img src="https://cdn.onemars.net/sites/whiskas_id_98_2/image/whiskas-sea-tuna-1_1584084321592.png" class="produk-thumb"/>
                    </CCol>
                    <CCol xs="12" sm="6" md="4">
                        <div class="detail">
                            mengandung extract buah segara dan nutrisi yang penting
                            <br/><br/><br/><br/>
                            <CButton block color="success" to="/detail/produk">Buy</CButton>
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

export default Produk
