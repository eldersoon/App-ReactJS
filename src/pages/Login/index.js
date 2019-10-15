import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){

    const [email, setEmail] = useState('');

    async function handleSubmit(event){

        event.preventDefault();

        const respose = await api.post('/sessions', { email })

        const { _id } = respose.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');

    }
    return (
    <>
        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email *</label>
          <input type="text" id="email" placeholder="Seu email pessoal" value={email} onChange={event => setEmail(event.target.value)} />

          <button className="btn" type="submit">Entrar</button>
        </form>
    </>
    );
}