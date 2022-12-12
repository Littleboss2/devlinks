
import './error.css'

import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'


export default function Error() {
  return (
    <div className="error">
      <Logo />
      <h1>Pagina não encontrada!</h1>
      <p>Está página que esta procurando não existe.</p>

      <Link to={"/"} className="link">
        Voltar para Home
      </Link>
    </div>
  )
}