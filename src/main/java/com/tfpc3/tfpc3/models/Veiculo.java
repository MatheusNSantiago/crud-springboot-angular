package com.tfpc3.tfpc3.models;

import jakarta.persistence.*;

@Entity
@Table(name = "veiculo")
public class Veiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 8, nullable = false)
    private String placa;

    @Column(length = 20, nullable = false)
    private String cor;

    private Integer anoModelo;

    @Column(name = "marca", nullable = false)
    private Integer marca;

    public long getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public Integer getAnoModelo() {
        return anoModelo;
    }

    public void setAnoModelo(Integer anoModelo) {
        this.anoModelo = anoModelo;
    }

    public Integer getMarca() {
        return marca;
    }

    public void setMarca(Integer marca) {
        this.marca = marca;
    }

    @Override
    public String toString() {
        return "Veiculo [id=" + id + ", placa=" + placa + ", cor=" + cor + ", anoModelo=" + anoModelo
                + ", marca="
                + marca + "]";
    }
}
