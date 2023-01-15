package com.tfpc3.tfpc3.models;

import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "marca")
public class Marca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 5, nullable = false)
    private String sigla;

    @Column(length = 50, nullable = false)
    private String descricao;

    @OneToMany(mappedBy = "marca", targetEntity = Veiculo.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Veiculo> veiculos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return "Marca [id=" + id + ", sigla=" + sigla + ", descricao=" + descricao + ", veiculo=" + veiculos + "]";
    }

    public List<Veiculo> getVeiculos() {
        return veiculos;
    }

    public void setVeiculos(List<Veiculo> veiculo) {
        this.veiculos = veiculo;
    }

}
