import React, { Component } from 'react'

export default class PageHeader extends Component {
  render() {
    return (
        <div>
          <header id="page-topbar">
                  <div className="navbar-header">
                      <div className="d-flex">
                         
                          <div className="navbar-brand-box">
                              <a href="index.html" className="logo logo-dark">
  
                                  <h2>Logo</h2>
                                  {/* <span className="logo-sm">
                                      <img src={{"/assets/images/logo.svg"}} alt="" height="22"/>
                                  </span>
                                  <span className="logo-lg">
                                      <img src={{"/assets/images/logo.svg";}} alt="" height="17"/>
                                  </span> */}
                              </a>
                          </div>
  
                          <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                              <i className="fa fa-fw fa-bars"></i>
                          </button>
  
                          
                          <form className="app-search d-none d-lg-block">
                              <div className="position-relative">
                                  <input type="text" className="form-control" placeholder="Search..."/>
                                  <span className="bx bx-search-alt"></span>
                              </div>
                          </form>
  
                          <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
                              <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                  <span key="t-megamenu">Mega Menu</span>
                                  <i className="mdi mdi-chevron-down"></i> 
                              </button>
                              <div className="dropdown-menu dropdown-megamenu">
                                  <div className="row">
                                      <div className="col-sm-8">
      
                                          <div className="row">
                                              <div className="col-md-4">
                                                  <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                  <ul className="list-unstyled megamenu-list">
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-forms">Forms</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                      </li>
                                                  </ul>
                                              </div>
  
                                              <div className="col-md-4">
                                                  <h5 className="font-size-14" key="t-applications">Applications</h5>
                                                  <ul className="list-unstyled megamenu-list">
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-email">Email</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-projects">Projects</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                                      </li>
                                                  </ul>
                                              </div>
  
                                              <div className="col-md-4">
                                                  <h5 className="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                                  <ul className="list-unstyled megamenu-list">
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-light-sidebar">Light Sidebar</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-compact-sidebar">Compact Sidebar</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-horizontal">Horizontal layout</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                                      </li>
                              
                                                  </ul>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-4">
                                          <div className="row">
                                              <div className="col-sm-6">
                                                  <h5 className="font-size-14" key="t-ui-components">UI Components</h5>
                                                  <ul className="list-unstyled megamenu-list">
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-rating">Rating</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-forms">Forms</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-tables">Tables</a>
                                                      </li>
                                                      <li>
                                                          <a href="javascript:void(0);" key="t-charts">Charts</a>
                                                      </li>
                                                  </ul>
                                              </div>
  
                                              <div className="col-sm-5">
                                                  <div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
  
                              </div>
                          </div>
                      </div>
  
                      <div className="d-flex">
  
                          <div className="dropdown d-inline-block d-lg-none ms-2">
                              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  <i className="mdi mdi-magnify"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                  aria-labelledby="page-header-search-dropdown">
          
                                  <form className="p-3">
                                      <div className="form-group m-0">
                                          <div className="input-group">
                                              <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                              <div className="input-group-append">
                                                  <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
  
                         
  
                        
                      </div>
                  </div>
              </header>
  
              <div className="vertical-menu">
  
                  <div data-simplebar className="h-100">
  
                      <div id="sidebar-menu">
                          <ul className="metismenu list-unstyled" id="side-menu">
                              <li className="menu-title" key="t-menu">Menu</li>
  
                              <li>
                                  <a href="/" className="waves-effect">
                                      <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                      <span key="t-dashboards"> Gestion des Options</span>
                                  </a>
                                  <a href="/professor" className="waves-effect">
                                      <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                      <span key="t-dashboards"> Gestion des Professeurs</span>
                                  </a>
                                  
                                  <a href="/student" className="waves-effect">
                                      <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                      <span key="t-dashboards"> Gestion des etudiants</span>
                                  </a>
                                  <ul className="sub-menu" aria-expanded="false">
                                      <li><a href="/student_filter" key="t-default">Etudiant par option et niveau</a></li>
                                   </ul>
                                   <a href="/course" className="waves-effect">
                                      <i className="bx bx-home-circle"></i><span className="badge rounded-pill bg-info float-end">04</span>
                                      <span key="t-dashboards"> Gestion des cours</span>
                                  </a>
                              </li>
  
                          </ul>
                      </div>
                
                  </div>
              </div>
              
        </div>
      )
  }
}
