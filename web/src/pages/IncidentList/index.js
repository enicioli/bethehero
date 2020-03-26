import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function IncidentList() {
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    const [incidents, setIncidents] = useState([])
    let update = 0

    useEffect(() => {
        api.get(
            '/incident',
            {
                headers: {
                    Authorization: ongId
                }
            }
        ).then(response =>  {
            setIncidents(response.data)
        })
    }, [ongId, update])

    function handleLogout() {
        localStorage.removeItem('ongId')
        localStorage.removeItem('ongName')
        history.push('/')
    }

    function handleDelete(id) {
        api.delete(
            `/incident/${id}`,
            {
                headers: {
                    Authorization: ongId
                }
            }
        ).then(response => {
            setIncidents(incidents.filter(incident => incident.id !== id))
        })
    }

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero"/>
                <span>Welcome, {ongName}</span>
                <Link className="button" to="/incident/form">New incident</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Indidents</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Incident</strong>
                    <p>{incident.title}</p>

                    <strong>Description</strong>
                    <p>{incident.description}</p>

                    <strong>Value</strong>
                    <p>R$ {incident.value}</p>

                    <button type="button" onClick={() => handleDelete(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
