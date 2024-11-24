// src/main/java/com/example/doceria_mimosa/controller/ProdutoController.java
package com.example.doceria_mimosa.controller;

import com.example.doceria_mimosa.model.Produto;
import com.example.doceria_mimosa.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    @Autowired
    private ProdutoRepository produtoRepository;

    // Endpoint para listar todos os produtos
    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    // Endpoint para buscar produtos
    @GetMapping("/buscar")
    public List<Produto> buscarProdutos(@RequestParam(required = false) String search) {
        if (search == null || search.isEmpty()) {
            return produtoRepository.findAll(); // Retorna todos os produtos
        }
        return produtoRepository.findByNomeContainingIgnoreCase(search); // Filtra pelos produtos
    }
}
