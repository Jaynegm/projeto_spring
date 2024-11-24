package com.example.doceria_mimosa.controller;
import com.example.doceria_mimosa.model.Usuario;
import com.example.doceria_mimosa.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public Usuario signup(@RequestBody Usuario usuario) {
        return authService.registerUsuario(usuario);
    }

    @PostMapping("/login")
    public Usuario login(@RequestParam String email, @RequestParam String senha) {
        return authService.authenticateUsuario(email, senha);
    }
}