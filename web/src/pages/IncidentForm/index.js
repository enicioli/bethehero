import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function IncidentForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    async function handleIncident(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post(
                '/incident',
                data,
                {
                    headers: {
                        Authorization: ongId
                    }
                }
            )
            history.push('/incident')
        }  catch(err) {
            alert(err)
        }
    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                <img src={LogoImg} alt="Be The Hero"/>
                    <h1>New incident</h1>
                    <p>Register the information about a new incident</p>
                    <Link to="/incident" className="backlink">
                        <FiArrowLeft size={16} color="#e02041" />
                        List
                    </Link>
                </section>
                
                <form onSubmit={handleIncident}>
                    <input
                        name="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                    <input
                        name="value"
                        type="text"
                        placeholder="Value"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button">Save</button>
                </form>
            </div>
        </div>
    )
}
