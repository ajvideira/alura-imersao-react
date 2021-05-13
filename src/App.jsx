import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import { Menu } from './components/Menu';

import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={dadosIniciais.categorias[0].videos[0].titulo}
      />

      <VideoCardGroup category={dadosIniciais.categorias[0]} key={0} />

      <VideoCardGroup category={dadosIniciais.categorias[1]} key={1} />

      <VideoCardGroup category={dadosIniciais.categorias[2]} key={2} />

      <VideoCardGroup category={dadosIniciais.categorias[3]} key={3} />

      <VideoCardGroup category={dadosIniciais.categorias[4]} key={4} />

      <VideoCardGroup category={dadosIniciais.categorias[5]} key={5} />
    </div>
  );
}

export default App;
