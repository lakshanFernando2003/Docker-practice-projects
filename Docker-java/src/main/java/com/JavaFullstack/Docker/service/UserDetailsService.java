package com.JavaFullstack.Docker.service;

import com.JavaFullstack.Docker.model.UserDetails;
import com.JavaFullstack.Docker.repository.UserDetailsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDetailsService {

    private final UserDetailsRepository repository;

    public UserDetailsService(UserDetailsRepository repository) {
        this.repository = repository;
    }

    public UserDetails saveUser(UserDetails user) {
        validateUser(user);
        System.out.println("Saving user: " + user);
        return repository.save(user);
    }

    public List<UserDetails> getAllUsers() {
        return repository.findAll();
    }

    public Optional<UserDetails> getUserById(Long id) {
        return repository.findById(id);
    }

    public void deleteUser(Long id) {
        repository.deleteById(id);
    }

    public boolean isAdult(UserDetails user) {
        return user.getAge() >= 18;
    }

    private void validateUser(UserDetails user) {
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("User name cannot be empty");
        }
        if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("User email cannot be empty");
        }
        if (user.getAge() < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
}