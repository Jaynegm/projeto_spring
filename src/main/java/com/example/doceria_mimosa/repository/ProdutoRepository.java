package com.example.doceria_mimosa.repository;

import com.example.doceria_mimosa.model.Produto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProdutoRepository extends MongoRepository<Produto, String> {
}

