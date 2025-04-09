import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer.js'
import Note from './Note.js';
import './index.css'
import notes from './notes.js';



function App() {
  return (
    <div>
      <Header/>
      {notes.map((note) =>{
        return (
          <Note key={note.key} title={note.title} content={note.content}/>
        );

      })}
      <Footer/>
    </div>
    
  );
}

export default App;
