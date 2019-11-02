import React from 'react'
import Head from '../components/HTMLComponent/Head'
import Nav from '../components/Component/Navbar'
import Cookies from 'react-cookies'
import { createPublicKey } from 'crypto'


export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      full_name: '',
      age: '',
      email: '',
      Desk: ''

    }
  }

  OnMove() {
    window.location = "/List"
  }

  Onchage(e) {
    var name = e.target.name
    var value = e.target.value

    this.setState({
      [name]: value
    })
  }

  BtnActive() {
    if (!(this.state.full_name)||!(this.state.age)
    || !(this.state.email)||!(this.state.Desk)) {
      return (
        <div>
          <button className='btn-disable' disabled>Kirim Data</button>
        </div>
      )
    }

    else {
      return (

        <div>
          <button className='btn-active' type="submit">Kirim Data</button>
        </div>)
    }

  }
  BtnSubmit(e) {
    e.preventDefault();
    Cookies.save('Data', this.state)

    window.location = '/List'
  }
  render() {
    console.log(this.state)
    return (

      <div>
        <Head />
        <Nav />

        <div className='container-fluid background-home' style={{ paddingTop: '100px' }}>
          <div className="container">
            <div className="row">

              <div className="col-8">
                <label className="heading-home">Selamat Datang Di Data Karyawan</label><br />
                <label className="heading-home-second">Anda Dapat Melihat, dan Edit Data Karyawan</label>
                <div className="divider" />
              </div>

              <div className="col-4">
                <div className="card-register">
                  <h1 className="heading-home-third">Daftarkan Diri</h1>
                  <div className="divider-second" />
                  <div className="form-regis">

                    <form onSubmit={this.BtnSubmit.bind(this)}>
                      <label className="label-form" >
                        Nama Lengkap
                    </label>
                      <input placeholder="nama Lengkap" name="full_name" onChange={this.Onchage.bind(this)} type='text' className="input-text" />
                      <label className="label-form">
                        Umur
                    </label>
                      <input placeholder="umur" type='text' name="age" onChange={this.Onchage.bind(this)} className="input-text" />
                      <label className="label-form">
                        Email
                    </label>
                      <input placeholder="email" type='text' name="email" onChange={this.Onchage.bind(this)} className="input-text" />
                      <label className="label-form">
                        Deskripsi Diri
                    </label>
                      <textarea placeholder="Deskripsi Diri" name="Desk" onChange={this.Onchage.bind(this)} type='text' className="input-textarea" />

                      {this.BtnActive()}
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
