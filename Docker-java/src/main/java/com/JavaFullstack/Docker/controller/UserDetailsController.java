package com.JavaFullstack.Docker.controller;

import com.JavaFullstack.Docker.model.UserDetails;
import com.JavaFullstack.Docker.service.UserDetailsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserDetailsController {

    private final UserDetailsService service;

    public UserDetailsController(UserDetailsService service) {
        this.service = service;
    }

    // POST /api/users/add - Add new user
    @PostMapping("/add")
    public ResponseEntity<UserDetails> addUser(@RequestBody UserDetails user) {
        try {
            UserDetails savedUser = service.saveUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // GET /api/users - Get all users
    @GetMapping
    public List<UserDetails> getAllUsers() {
        return service.getAllUsers();
    }

    // GET /api/users/{id} - Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<UserDetails> getUserById(@PathVariable Long id) {
        Optional<UserDetails> user = service.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/users/{id} - Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        service.deleteUser(id);
        return ResponseEntity.ok().build();
    }
}
