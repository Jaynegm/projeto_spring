// src/main/java/com/example/doceria/repository/UsuarioRepository.java
package com.example.doceria_mimosa.repository;

import com.example.doceria_mimosa.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    Optional<Usuario> findByEmail(String email);
}
