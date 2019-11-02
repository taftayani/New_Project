import React from 'react'
import Nav from '../components/Component/Navbar'
import axios from 'axios'
export default class List extends React.Component{
  constructor(){
    super();
    this.state={
      DataActivity:[
        {
          id:'1',
          Kegiatan:''
      }
      ]
    }
  }
  render() {
    return (
      <div> 
          <Nav/>

          <div className="container-fluid">
            <div className="container" style={{paddingTop:'30px'}}>
                <div className="row">
                    <div className="col-6">
                        <img src="/static/images/profile.svg" className="img-profile"/>
                        <label>Muhammad Breda Taftayani / 50th </label>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="card-name">
                           <label className="heading-data" style={{color:'#9a9f3d'}}>Aktivitas Ringan</label>
                           <form>
                                <label>Nama Aktivitas</label>
                              <div>
                                <input/>
                              </div>

                              <label>Tujuan Aktivitas</label>
                              <div>
                                <input/>
                              </div>

                              <label>Alasan Aktivitas Dilakukan</label>
                              <div>
                                <input/>
                              </div>
                              <button className="light-btn">Masukan Data</button>
                           </form>
                        </div>
                        <div className="card-name">
                           <label className="heading-data" style={{color:'#f6663d',fontWeight:'600'}}>Aktivitas Berat</label>
                           <form>
                                <label>Nama Aktivitas</label>
                              <div>
                                <input/>
                              </div>

                              <label>Tujuan Aktivitas</label>
                              <div>
                                <input/>
                              </div>

                              <label>Alasan Aktivitas Dilakukan</label>
                              <div>
                                <input/>
                              </div>
                              <button className="hard-btn">Masukan Data</button>
                           </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
               <div className="divider" style={{width:'100%',backgroundColor:'	#BEBEBE'}}/>
                <div className="container">
                <div className="row">
                  <div className="card-list">
                    <table>
                      <thead>
                          <tr>
                            <td>No</td>
                            <td>Prioritas Aktivitas</td>
                            <td>Aktivitas</td>
                          </tr>
                      </thead>
                    </table>
                  </div>
               </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
