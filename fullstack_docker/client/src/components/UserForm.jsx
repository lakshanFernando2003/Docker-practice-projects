import React, { useState } from 'react';
import apiService from '../services/api';

const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'age' ? parseInt(e.target.value, 10) || '' : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await apiService.createUser(formData);
      if (result.success) {
        setFormData({ name: '', email: '', age: '' });
        setSuccess('User added successfully!');
        if (onUserAdded) onUserAdded(result.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', age: '' });
    setError('');
    setSuccess('');
  };

  return (
    <div className="user-form-container">
      <div className="form-header">
        <h2>Add New User</h2>
      </div>
      
      {error && (
        <div className="alert alert-error">
          <span className="alert-icon">⚠️</span>
          <span>{error}</span>
          <button className="close-btn" onClick={() => setError('')}>×</button>
        </div>
      )}
      
      {success && (
        <div className="alert alert-success">
          <span className="alert-icon">✓</span>
          <span>{success}</span>
          <button className="close-btn" onClick={() => setSuccess('')}>×</button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
            min="1"
            className="form-control"
          />
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            disabled={loading} 
            className="btn btn-primary"
          >
            {loading ? 'Adding...' : 'Add User'}
          </button>
          <button 
            type="button" 
            onClick={handleReset} 
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
