// src/pages/SobrePage.js
import React from 'react';

const SobrePage = () => {
    return (
        <div style={{ padding: '20px', fontFamily: "'Poppins', sans-serif", color: '#333', lineHeight: '1.6' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '2rem', color: '#673C33', marginBottom: '5px' }}>Mimosa Doceria</h1>
                <p style={{ fontSize: '1rem', margin: '0' }}>Tradição, sabor e carinho em cada receita.</p>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                <img
                    src="https://www.mynametags.ie/blog/wp-content/uploads/2021/02/mother-with-son-mixing-melted-chocolate-bowl.jpg"
                    alt="Família preparando doces"
                    style={{ flex: '1', maxWidth: '250px', borderRadius: '10px', objectFit: 'cover' }}
                />
                <div style={{ flex: '2', minWidth: '250px' }}>
                    <p style={{ margin: '10px 0' }}>
                        A Mimosa Doceria é muito mais do que uma loja de doces: é um pedaço da nossa história familiar.
                        Cada receita que você experimenta foi criada e aprimorada pelas mãos habilidosas de nossas avós e tias, 
                        que sempre colocaram amor e dedicação em tudo o que faziam.
                    </p>
                    <p style={{ margin: '10px 0' }}>
                        Hoje, seguimos esse legado com orgulho. A loja é administrada por nós, as irmãs Juliana e Martina, que crescemos 
                        cercadas pelo aroma doce das receitas caseiras e decidimos compartilhar esses momentos com você.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: '2', minWidth: '250px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: '#673C33', marginBottom: '10px' }}>Nosso Compromisso</h2>
                    <p style={{ margin: '10px 0' }}>
                        Cada doce que produzimos é feito com ingredientes selecionados e muito carinho. Queremos que você sinta o mesmo
                        acolhimento de estar em casa a cada mordida.
                    </p>
                    <p style={{ margin: '10px 0' }}>
                        Além disso, prezamos por manter as memórias vivas em cada receita, com sabores que nos conectam às nossas raízes 
                        e criam novas lembranças.
                    </p>
                </div>
                <img
                    src="https://irp.cdn-website.com/33406c6e/dms3rep/multi/doces+de+confeitaria.jpg"
                    alt="Exposição de bolos e doces"
                    style={{ flex: '1', maxWidth: '250px', borderRadius: '10px', objectFit: 'cover' }}
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img
                    src="logo.png"
                    alt="Logo Doceria Mimosinha"
                    style={{ maxWidth: '150px', marginBottom: '10px' }}
                />
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    Venha nos visitar e experimente o melhor da nossa história transformado em sabores únicos. Estamos ansiosas para te receber!
                </p>
            </div>
        </div>
    );
};

export default SobrePage;
