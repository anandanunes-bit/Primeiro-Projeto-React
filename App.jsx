function App() {
  const nome = "Ananda"
  const curso = "Desenvolvimento de Sistemas"

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Olá, eu sou a {nome}!</h1>
      <h2>Curso: {curso}</h2>
      
      <p>Sobre mim: Sou de Floripa e tô aprendendo React agora, socorro.</p>
      
      <p>Meu hobby: Cantar e dançar</p>
      <p>Quero aprender: Ficar rica com programação</p>

      <img 
        src="https://i.pinimg.com/736x/d0/fe/31/d0fe31450e9ae918c123804cd9a67a84.jpg" 
        alt="foto da Ananda" 
        width="200"
        style={{ borderRadius: '20px', marginTop: '20px' }}
      />

      <h3>3 coisas que eu gosto:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>🎀 Hello Kitty</li>
        <li>🎵 Música</li>
        <li>💻 Quando o código funciona de primeira</li>
      </ul>
    </div>
  );
}

export default App;