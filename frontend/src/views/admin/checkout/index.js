import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const usersData = [
    {id: 0, name: 'wishkas', price: '10.000', addedby: 'bismillah'},
]

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','price', 'addedby', "action"]

const Checkout = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Manage Payment
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'action':
                  (item)=>(
                    <td>
                        <CButton
                        key="squaresizes"
                        color="danger"
                        className="s-1"
                        >
                        Remove
                        </CButton>
                        &nbsp;
                        <CButton
                        key="squaresizes"
                        color="warning"
                        className="s-1"
                        >
                        Edit
                        </CButton>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      
    </>
  )
}

export default Checkout
