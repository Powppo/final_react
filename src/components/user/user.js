import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const User = () => {
    const [achievement, setAchievement] = useState('');
    const [schoolAccreditation, setSchoolAccreditation] = useState('');
    const [testResult, setTestResult] = useState('');
    const [nilaiBIndonesia, setNilaiBIndonesia] = useState('');
    const [nilaiMathematic, setNilaiMathematic] = useState('');
    const [nilaiEnglish, setNilaiEnglish] = useState('');
    const [nilaiRata, setNilaiRata] = useState('');
    const [sertif, setSertif] = useState('');
    const [sekolah, setSekolah] = useState('');
    const [totalSertif, setTotalSertif] = useState(0);

    const submitUser = async (e) => {
        e.preventDefault();
        console.log(`${achievement} ${schoolAccreditation} ${testResult} ${nilaiBIndonesia} ${nilaiMathematic} ${nilaiEnglish} ${nilaiRata} ${sekolah} ${totalSertif}`)
    };

    const handleSertifChange = (event) => {
        event.preventDefault();
        const files = event.target.files;
        const fileList = Array.from(files);
        const totalFiles = fileList.length;
        if (totalFiles > 0) {
            setTotalSertif(totalFiles)
            setSertif(fileList);
        } else {
            setSertif([]);
        }
    };

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={submitUser} className="box">
                                <p className="has-text-centered"></p>
                                <div className="field mt-5">
                                    <label className="label">Nilai Mathematic</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Masukkan Nilai Mathematic"
                                            value={nilaiMathematic}
                                            onChange={(e) => setNilaiMathematic(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai B Indonesia</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai B Indonesia"
                                            value={nilaiBIndonesia}
                                            onChange={(e) => setNilaiBIndonesia(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai English</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai English"
                                            value={nilaiEnglish}
                                            onChange={(e) => setNilaiEnglish(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nilai Rata-rata</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Nilai Rata-rata"
                                            value={nilaiRata}
                                            onChange={(e) => setNilaiRata(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Asal Sekolah</label>
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
                                    <label className="label">School Accreditation</label>
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                value={schoolAccreditation}
                                                onChange={(e) => setSchoolAccreditation(e.target.value)}
                                            >
                                                <option value="1">C</option>
                                                <option value="2">B</option>
                                                <option value="3">A</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field mt-5">
                                    <label className="label">Sertif</label>
                                    <div className="control">
                                        <input
                                            type="file"
                                            className="input"
                                            placeholder="Sertifikat"
                                            accept=".pdf"
                                            multiple
                                            onChange={(e) => handleSertifChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Achievement</label>
                                    <div className="control">
                                        <div className="select">
                                            <select
                                                value={achievement}
                                                onChange={(e) => setAchievement(e.target.value)}
                                            >
                                                <option value="1">Others</option>
                                                <option value="2">Kota</option>
                                                <option value="3">Provinsi</option>
                                                <option value="4">National</option>
                                                <option value="5">International</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Test Result</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Test Result"
                                            value={testResult}
                                            onChange={(e) => setTestResult(e.target.value)}
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
    );
};

export default User;