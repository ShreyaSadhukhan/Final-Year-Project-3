import { useState, useEffect } from 'react';

function WorkspacePage() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('isDarkTheme') === 'true'
  );
  const [workspace, setWorkspace] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    localStorage.setItem('isDarkTheme', isDarkTheme.toString());
  }, [isDarkTheme]);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleSelectWorkspace = (event) => {
    setWorkspace(event.target.value);
  };

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleLogout = () => {
    setUsername('');
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <header>
        <div>
          <button onClick={handleToggleTheme}>
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div>
          {username ? (
            <div>
              Welcome, {username}
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <select value={workspace} onChange={handleSelectWorkspace}>
                <option value="">Select Workspace</option>
                <option value="workspace1">Workspace 1</option>
                <option value="workspace2">Workspace 2</option>
              </select>
              <button onClick={() => handleLogin('John Doe')}>Login</button>
            </div>
          )}
        </div>
      </header>
      <main>
        <div>
          <button>Create New Form</button>
        </div>
        <div>
          <button>Create New Folder</button>
        </div>
      </main>
    </div>
  );
}

export default WorkspacePage;