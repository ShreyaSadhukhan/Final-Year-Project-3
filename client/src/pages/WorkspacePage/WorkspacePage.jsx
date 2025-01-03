import { useState, useEffect } from 'react';
import './WorkspacePage.css';

function Workspace() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme.toString());
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? 'workspace dark' : 'workspace'}>
      <div className="workspace-header">
      <header>
        <h2 className="workspace-username">Workspace</h2>
        <div className="theme-toggle">
          <span>Light</span>
          <label className="switch">
            <input type="checkbox" checked={isDarkTheme} onChange={handleToggleTheme} />
            <span className="slider round"></span>
          </label>
          <span>Dark</span>
        </div>
        <button className='share'>Share</button>
      </header>
      </div>
      <div className="content">
        <button className="create-folder">
          <span className="icon">+</span>
          Create a folder
        </button>
        <button className="create-typebot">
          <span className="icon">+</span>
          Create a typebot
        </button>
      </div>
    </div>
  );
}

export default Workspace;