import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const history = useHistory()

    async function handleSignUp(e) {
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('/ong', data)
            alert(`Access ID: ${response.data.id}`)
            history.push('/')
        }  catch(err) {
            alert(err)
        }
    }

    return (
        <div className="signup-container">
            <div className="content">
                <section>
                <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Sign Up</h1>
                    <p>Help people to find the incidents of your ONG</p>
                    <Link to="/" className="backlink">
                        <FiArrowLeft size={16} color="#e02041" />
                        Login
                    </Link>
                </section>
                
                <form onSubmit={handleSignUp}>
                    <input
                        name="name"
                        type="text"
                        placeholder="ONG Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        name="whatsapp"
                        type="text"
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            name="city"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            name="uf"
                            type="text"
                            placeholder="UF"
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="button">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
