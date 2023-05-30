import React from 'react'

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
    
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
        <div className="container">
        <div className="column is-centered">
        <div className="column is-4-desktop">
            <form onSubmit={User} className="box">
            <p className='has-text-centered'>{msg}</p>
            <div className="field mt-5">
                        <label className="label">Nilai</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Sertif</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Sekolah</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="button is-success is-fullwidth">User</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </section>
    )

export default User