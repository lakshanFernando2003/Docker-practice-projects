package com.JavaFullstack.Docker.service;

import com.JavaFullstack.Docker.model.UserDetails;
import com.JavaFullstack.Docker.repository.UserDetailsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDetailsService {

    private final UserDetailsRepository repository;

    // Constructor injection
    public UserDetailsService(UserDetailsRepository repository) {
        this.repository = repository;
    }

    // Save a new user
    public UserDetails saveUser(UserDetails user) {
        System.out.println("Saving user: " + user);
        return repository.save(user);
    }

    // Get all users
    public List<UserDetails> getAllUsers() {
        return repository.findAll();
    }

    // Get user by ID
    public Optional<UserDetails> getUserById(Long id) {
        return repository.findById(id);
    }

    // Delete user by ID
    public void deleteUser(Long id) {
        repository.deleteById(id);
    }

    // Business logic: Check if user is adult
    public boolean isAdult(UserDetails user) {
        return user.getAge() >= 18;
    }
}
