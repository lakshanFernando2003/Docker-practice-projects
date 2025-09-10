package com.JavaFullstack.Docker.controller;

import com.JavaFullstack.Docker.Api.ApiResponse;
import com.JavaFullstack.Docker.model.UserDetails;
import com.JavaFullstack.Docker.service.UserDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserDetailsController {

    private final UserDetailsService service;

    public UserDetailsController(UserDetailsService service) {
        this.service = service;
    }

    // POST /api/users - Add new user
    @PostMapping
    public ResponseEntity<ApiResponse<UserDetails>> addUser(@RequestBody UserDetails user) {
        try {
            UserDetails savedUser = service.saveUser(user);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.success("User created successfully", savedUser));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Error creating user: " + e.getMessage()));
        }
    }

    // GET /api/users - Get all users
    @GetMapping
    public ResponseEntity<ApiResponse<List<UserDetails>>> getAllUsers() {
        List<UserDetails> users = service.getAllUsers();
        return ResponseEntity.ok(ApiResponse.success("Users retrieved successfully", users));
    }

    // GET /api/users/{id} - Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDetails>> getUserById(@PathVariable Long id) {
        Optional<UserDetails> user = service.getUserById(id);
        return user.map(u -> ResponseEntity.ok(ApiResponse.success("User retrieved successfully", u)))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("User not found with ID: " + id)));
    }

    // PUT /api/users/{id} - Update user
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDetails>> updateUser(@PathVariable Long id, @RequestBody UserDetails userDetails) {
        try {
            Optional<UserDetails> existingUser = service.getUserById(id);
            if (existingUser.isPresent()) {
                userDetails.setId(id); // Ensure ID is set correctly
                UserDetails updated = service.saveUser(userDetails);
                return ResponseEntity.ok(ApiResponse.success("User updated successfully", updated));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("User not found with ID: " + id));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Error updating user: " + e.getMessage()));
        }
    }

    // DELETE /api/users/{id} - Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id) {
        try {
            Optional<UserDetails> existingUser = service.getUserById(id);
            if (existingUser.isPresent()) {
                service.deleteUser(id);
                return ResponseEntity.ok(ApiResponse.success("User deleted successfully", null));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(ApiResponse.error("User not found with ID: " + id));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Error deleting user: " + e.getMessage()));
        }
    }
}