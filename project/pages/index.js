import React from 'react'
import Head from '../components/HTMLComponent/Head'
import Nav from '../components/Component/Navbar'

import { createPublicKey } from 'crypto'


export default class index extends React.Component {
  OnMove(){
    window.location="/List"
  }
  render() {
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
                    <form>

                      <label className="label-form">
                        Nama Lengkap
                    </label>
                      <input placeholder="nama Lengkap" type='text' className="input-text" />
                      <label className="label-form">
                        Gaji Yang Diinginkan
                    </label>
                      <input placeholder="gaji diingkan" type='text' className="input-text" />
                      <label className="label-form">
                        Umur Anda
                    </label>
                      <input placeholder="umur" type='text' className="input-text" />
                      <label className="label-form">
                        Deskripsi Diri
                    </label>
                      <textarea placeholder="Deskripsi Diri" type='text' className="input-textarea" />

                      <button>Kirim Data</button>
                      <a style={{ color: '#e06341' }} className="link-move"
                      href='/list'>Lihat Data Pegawai</a>
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
