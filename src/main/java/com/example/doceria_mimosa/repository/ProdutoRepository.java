package com.example.doceria_mimosa.repository;

import com.example.doceria_mimosa.model.Produto;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProdutoRepository extends MongoRepository<Produto, String> {

    List<Produto> findByNomeContainingIgnoreCase(String search);
}

