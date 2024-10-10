package com.example.doceria_mimosa.controller;

import com.example.doceria_mimosa.model.Produto; // Altere para o seu pacote
import com.example.doceria_mimosa.repository.ProdutoRepository; // Altere para o seu pacote
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/produtos")
    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }
    @PostMapping("/produtos")
    public void adicionarProduto(@RequestBody Produto produto){
        produtoRepository.insert(produto);
    }
}
