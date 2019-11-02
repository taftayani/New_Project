import React from 'react'
import Nav from '../components/Component/Navbar'
import axios from 'axios'
import API from '../components/Api'
import cookies from 'react-cookies'
export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      age: '',
      DataActivity: [
        {
          id: '1',
          title: 'tes'
        }, {
          id: '1',
          title: 'wkwkwkwkkwkw'
        },
        {
          id: '1',
          title: 'tes'
        }

      ],
      Activity_name: '',
      title_activity: '',
    }
  }

  async componentDidMount() {
    this.setState({
      full_name: (cookies.load('Data')).full_name,
      age: (cookies.load('Data')).age
    })

    await axios.get(API.Url_API).then(response => {
      console.log(response)
      this.setState({
        DataActivity: response.data
      })

    })
  }

  OnChangeInfo(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  CardTask() {
    return this.state.DataActivity.map((activity) => {
      return (
        <div>
          <div className="card-list">
            <table>
              <tr>
                <th>No</th>
                <th>Prioritas Aktivitas</th>
                <th>Nama Aktivitas</th>
              </tr>
              <tr>
                <td>{activity.id}</td>
                <td>Aktivitas Berat</td>
                <td>{activity.title}</td>
              </tr>


            </table>
          </div>
        </div>
      )
    })
  }
  async BtnSubmit(e) {
    e.preventDefault()
    await axios.post(API.Url_API_Post, {
      userId: 100,
      id: '',
      title: this.state.title_activity,
      body: this.state.Activity_name
    }).then(response => {
      console.log(response)
      if(response.status == '201'){
        alert('Data Berhasil Masuk ke API, Tapi tidak Tertampil')
      }
      else{
        alert('loading, dan klik Ok')
      }
    })
  }
  render() {
    console.log(this.state)
    return (

      <div>
        <Nav />

        <div className="container-fluid">
          <div className="container" style={{ paddingTop: '30px' }}>
            <div className="row">
              <div className="col-6">
                <img src="/static/images/profile.svg" className="img-profile" /><br />
                <label>{this.state.full_name} / {this.state.age}th </label>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="card-name">
                    <label className="heading-data" style={{ color: '#9a9f3d' }}>Aktivitas Ringan</label>
                    <form onSubmit={this.BtnSubmit.bind(this)}>
                      <label>Nama Aktivitas</label>
                      <div>
                        <input onChange={this.OnChangeInfo.bind(this)} name="title_activity" placeholder="nama Aktivitas" />
                      </div>

                      <label>Alasan Aktivitas Dilakukan</label>
                      <div>
                        <input onChange={this.OnChangeInfo.bind(this)} name="Activity_name" placeholder="Alasan Aktivitas" />
                      </div>
                      <button className="light-btn" type="submit">Masukan Data</button>
                    </form>
                  </div>
                  <div className="card-name">
                    <label className="heading-data" style={{ color: '#f6663d', fontWeight: '600' }}>Aktivitas Berat</label>
                    <form>
                      <label>Nama Aktivitas</label>
                      <div>
                        <input onChange={this.OnChangeInfo.bind(this)} name="title_activity" placeholder="nama Aktivitas" />
                      </div>

                      <label>Alasan Aktivitas Dilakukan</label>
                      <div>
                        <input onChange={this.OnChangeInfo.bind(this)} name="Activity_name" placeholder="Alasan Aktivitas" />
                      </div>
                      <button className="hard-btn" type="submit">Masukan Data</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="divider" style={{ width: '100%', backgroundColor: '	#BEBEBE' }} />
            {this.CardTask()}
          </div>
        </div>
      </div>
    )
  }
}
