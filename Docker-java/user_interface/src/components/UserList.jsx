import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../Api/apiService';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await apiService.getUsers();
      if (response.success) {
        setUsers(response.data);
        setError('');
      } else {
        setError(response.message || 'Failed to fetch users');
      }
    } catch (error) {
      setError('Error connecting to the server. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete user handler
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await apiService.deleteUser(id);
        if (response.success) {
          setSuccessMessage('User deleted successfully');
          fetchUsers(); // Refresh the list
        } else {
          setError(response.message || 'Failed to delete user');
        }
      } catch (error) {
        setError('Error connecting to the server. Please try again later.');
        console.error(error);
      }
    }
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2 className="mb-4">User List</h2>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={fetchUsers}>
          <i className="bi bi-arrow-repeat me-1"></i> Refresh
        </button>
        <Link to="/add" className="btn btn-success">
          <i className="bi bi-plus-circle me-1"></i> Add User
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="alert alert-info">
          No users found. Click the "Add User" button to create one.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
