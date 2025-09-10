import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add" element={<UserForm />} />
            <Route path="/edit/:id" element={<UserEdit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
