import { useState, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm.jsx'
import UserList from './components/UserList.jsx'
import apiService from './services/api.js'

function App() {
  const [users, setUsers] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    apiService.getUsers()
      .then(response => {
        if (response && response.success) {
          setUsers(response.data || []);
        } else {
          console.error('Invalid response format:', response);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [refreshTrigger]);

  // Callback to handle user added event
  const handleUserAdded = (newUser) => {
    setRefreshTrigger(prev => prev + 1); // Trigger a refresh
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Management System</h1>
      </header>

      <main className="app-container">
        <section className="sidebar">
          <UserForm onUserAdded={handleUserAdded} />
        </section>

        <section className="content">
          <UserList />
        </section>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} User Management System</p>
      </footer>
    </div>
  );
}

export default App;
