import './App.css'

function App() {
  return (

    <div className ="wrapper">
      <header>
        <h1>Document Heading</h1>
      </header>
      <main>
        <section className='Article'>
          <h2>This is the heading of the main section</h2>
          <p>This is a paragraph of text.</p>
        </section>
        <section className='aside'>Here is the aside</section>
      </main>
      <footer>
          <p>Copyright &#169; 2017 <a href="/">My Site</a></p>
      </footer>

    </div>
  )    

}

export default App