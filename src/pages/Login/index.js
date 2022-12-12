import './login.css'

import { Logo } from '../../components/Logo'
import { useState } from 'react'

import { auth } from '../../services/firebsase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Input } from '../../components/Input'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert("Preencha todos os campos!")
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin", { replace: true })
      })
      .catch(() => {
        toast.error("ERRO AO FAZER SEU LOGIN")
      })
  }

  return (
    <div className='login-container'>
      <Logo />

      <form className='form' onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder='Digite seu email...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder='**********'
          autoComplete='on'
          value={password}
          onChange={(s) => setPassword(s.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  )
}