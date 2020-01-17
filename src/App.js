import React from 'react';
import './App.css';
import './global.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong className="" >Cadastrar</strong>
        <form>
          <div className="input-block" >
            <label htmlFor="github_username"> Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block" >
            <label htmlFor="techs">Tecnologias  </label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block" >
              <label htmlFor="longitude"> Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>

            <div className="input-block" >
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
          </div>
          <button type="submit" >Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6803917?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Antonio Raimundo</strong>
                <span>ReactJs, NodeJs, Adonisjs</span>
              </div>
            </header>
            <p>💻 🎧 ⚫️ Graduated in Software Engineering at Federal University of Ceará</p>
            <a href="https://github.com/antoniorrm">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6803917?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Antonio Raimundo</strong>
                <span>ReactJs, NodeJs, Adonisjs</span>
              </div>
            </header>
            <p>💻 🎧 ⚫️ Graduated in Software Engineering at Federal University of Ceará</p>
            <a href="https://github.com/antoniorrm">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6803917?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Antonio Raimundo</strong>
                <span>ReactJs, NodeJs, Adonisjs</span>
              </div>
            </header>
            <p>💻 🎧 ⚫️ Graduated in Software Engineering at Federal University of Ceará</p>
            <a href="https://github.com/antoniorrm">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/6803917?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Antonio Raimundo</strong>
                <span>ReactJs, NodeJs, Adonisjs</span>
              </div>
            </header>
            <p>💻 🎧 ⚫️ Graduated in Software Engineering at Federal University of Ceará</p>
            <a href="https://github.com/antoniorrm">Acessar perfil no Github</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;
