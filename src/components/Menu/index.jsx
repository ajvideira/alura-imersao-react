import logoImg from '../../assets/logo.png';
import { Button } from '../Button';
import './styles.css';

export function Menu() {
  return (
    <nav className="Menu">
      <a className="LogoAnchor" href="/">
        <img src={logoImg} className="Logo" alt="Albaflix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}
