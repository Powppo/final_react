import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const User = () => {
    const [nilai, setNilai] = useState('');
    const [sertif, setSertif] = useState('');
    const [sekolah, setSekolah] = useState('');

    const User = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/users', {
            nilai: nilai,
            sertif: sertif,
            sekolah: sekolah,
        }).then((data) => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSertifChange = (event) => {
        const file = event.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            setSertif(file);
        } else {
            setSertif(null);
            alert('Please select a file up to 5MB in size.');
        }
    };
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={User} className="box">
                                <p className="has-text-centered"></p>
                                <div className="field mt-5">
                                    <label className="label">Nilai</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai"
                                            value={nilai}
                                            onChange={(e) => setNilai(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Sertif</label>
                                    <div className="control">
                                        <input
                                            type="file"
                                            className="input"
                                            placeholder="Sertifikat"
                                            value={sertif}
                                            accept=".pdf"
                                            onChange={(e) => handleSertifChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Sekolah</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Sekolah"
                                            value={sekolah}
                                            onChange={(e) => setSekolah(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default User