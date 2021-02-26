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


import axios from "axios";
var qs = require("querystring");


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
const fields = ['nama_produk','harga', 'keterangan', "action"]

class Produk extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiurl: "http://localhost:8000/api/produk/list",
      apiurldel: "http://localhost:8000/api/produk/remove/",
      data : [],
      isLoading : true,
    }
  }

  handleRemove = (id) =>{
    this.setState({
      isLoading : true
    });
    axios.get(this.state.apiurldel + id )
            .then(res => {
                this.setState({
                    error: <div class="alert alert-primary alert-dismissible fade show" role="alert">
                            <strong>Succsess</strong> item deleted.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                });
            });
    window.location="/#/"
  }
  componentDidMount(){
    fetch(this.state.apiurl)
    .then(response => response.json())
    .then(data => this.setState({data:data , isLoading:false}));
  }
  render() {
    if(this.state.isLoading){
      return (
        <h1>Loading....</h1>
      )
    }
    console.log(this.state.data)
    return (
      <>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader>
                Manage Product
              </CCardHeader>
              <CCardBody>
              <CButton
                          key="squaresizes"
                          color="primary"
                          className="s-1"
                          to="/admin/add/produk"
                          >
                          Add
                          </CButton>
                          <br/><br/><br/>
              <CDataTable
                items={this.state.data['data']}
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
                          onClick={(e) => this.handleRemove(item._id)}
                          >
                          Remove
                          </CButton>
                          &nbsp;
                          <a
                          className="btn btn-warning s-1"
                          href={"/#/admin/edit/produk/" + item._id}
                          >
                          Edit
                          </a>
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
}

export default Produk
