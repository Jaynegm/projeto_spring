package com.example.doceria_mimosa.controller;

import com.example.doceria_mimosa.model.Produto; // Altere para o seu pacote
import com.example.doceria_mimosa.service.ProdutoService; // Importando o serviço
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService; // Usando o serviço em vez do repositório diretamente

    @GetMapping("/api/produtos") // Adicione "/api" para manter a consistência com o frontend
    public List<Produto> getAllProdutos() {
        return produtoService.listarProdutos(); // Chamando o método do serviço
    }

    @PostMapping("/api/produtos") // Adicione "/api"
    public void adicionarProduto(@RequestBody Produto produto) {
        produtoService.adicionarProduto(produto); // Adicione esse método no serviço
    }
}
