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
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { render } from 'enzyme/build'


class Detail extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id: this.props.match.params.id,
        apiUrl: "http://localhost:8000/api/users/detail/",
        data: [],
        isLoading: true,
      }
  }

  componentDidMount() {
    fetch(this.state.apiUrl + this.state.id)
        .then(response => response.json())
        .then(data => this.setState({data:data[0], isLoading: false}));
  }

  render(){
    return (
        <>
        <CRow>
            <CCol xs="12" sm="6" md="12">
            <CCard>
                <CCardHeader>
                Profile {this.state.data["username"]}
                </CCardHeader>
                <CCardBody>
                    <table className="table">
                        <tr>
                            <td>Username</td>
                            <td>: {this.state.data['username']}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: {this.state.data['email']}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>: {this.state.data['phone']}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>: {this.state.data['alamat']}</td>
                        </tr>
                        <tr>
                            <td>Tiper user</td>
                            <td>: {this.state.data['tipe_user']}</td>
                        </tr>
                    </table>
                </CCardBody>
            </CCard>
            </CCol>
        </CRow>
        </>
    )
  }
}

export default Detail
