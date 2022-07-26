import React from 'react';

export default function Main() {
  return (
    <div className='container container-componentes'>
      <main className='Conteudo-principal'>
        <article className='artigo'>
          <h2>Primeira Seção</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

          <h3>Subseção1</h3>

          <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>

          <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

          <h3>Subseção2</h3>

          <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

          <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
        </article>

        <aside className='conteudo-apoio'>
          <h2>Conteúdo de apoio</h2>

          <ul>
            <li><a href="#1">Oh I do like to be beside the seaside</a></li>
            <li><a href="#2">Oh I do like to be beside the sea</a></li>
            <li><a href="#3">Although in the North of England</a></li>
            <li><a href="#4">It never stops raining</a></li>
            <li><a href="#5">Oh well...</a></li>
          </ul>
        </aside>
      </main>
    </div>
  )
};