package com.example.doceria_mimosa.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "produtos")
public class Produto {
    
    @Id
    private String id; // O MongoDB usa ObjectId, mas aqui você pode usar String
    private String nome;
    private String descricao;
    private String imagem; // Isso deve ser String se for uma URL
    private int valor; // O valor deve ser int ou double, dependendo do que você quer

    // Construtores
    public Produto() {}

    public Produto(String nome, String descricao, String imagem, int valor) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.valor = valor;
    }

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }
}
