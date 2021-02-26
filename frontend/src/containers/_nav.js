import React from 'react'
import {CIcon} from '@coreui/icons-react'

if(localStorage.getItem("tipe_user") != "admin" && localStorage.getItem("tipe_user") != "user"){
  var _nav =  [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/dashboard',
      icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['User']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Shop',
      to: '/shop',
      icon: <CIcon name="cil-calculator" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Login',
      to: '/login',
      icon: <CIcon name="cil-paper-plane" customClasses="c-sidebar-nav-icon"/>,
    },
  ]
}


if(localStorage.getItem("tipe_user") == "user"){
  var _nav =  [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/dashboard',
      icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['User']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Shop',
      to: '/shop',
      icon: <CIcon name="cil-calculator" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Cart',
      to: '/cart',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Profile',
      to: '/user/biodata/' + localStorage.getItem('id') ,
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Logout',
      to: '/x/logout',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
  ]
}


if(localStorage.getItem("tipe_user") == "admin"){
  _nav = [
    {
      _tag: 'CSidebarNavTitle',
      _children: ['admin functional']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Manage Product',
      to: '/admin/produk',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Manage User',
      to: '/admin/users',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Manage shop',
      to: '/admin/checkout',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Logout',
      to: '/x/logout',
      icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon"/>,
    },
  ]
}

export default _nav
