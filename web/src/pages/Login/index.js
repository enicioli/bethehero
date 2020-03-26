import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'
import { FiLogIn } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg'
import HeroesImg from '../../assets/heroes.png'

import api from '../../services/api'

export default function Login() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        const data = {
            id
        }

        try {
            const response = await api.post('/login', data)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/incident')
        }  catch(err) {
            alert(err)
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    
                    <input
                        name="id"
                        type="text"
                        placeholder="ONG ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button type="submit" className="button">Login</button>

                    <Link to="/signup" className="backlink">
                        <FiLogIn size={16} color="#e02041" />
                        SignUp
                    </Link>
                </form>
            </section>

            <img src={HeroesImg} alt="heroes"/>
        </div>
    )
}
