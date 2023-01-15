package com.tfpc3.tfpc3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tfpc3.tfpc3.models.Marca;
import com.tfpc3.tfpc3.repository.MarcaRepository;

@Service
public class MarcaService {

    private final MarcaRepository repo;

    @Autowired
    public MarcaService(MarcaRepository marcaRepository) {
        this.repo = marcaRepository;
    }

    public List<Marca> getAll() {
        return repo.findAll();
    }

    public void add(Marca marca) {
        repo.save(marca);
    }

    public void update(Integer id, Marca updatedMarca) {
        Marca marca = repo.findById(id).get();

        marca.setDescricao(updatedMarca.getDescricao());
        marca.setSigla(updatedMarca.getSigla());
        marca.setVeiculos(updatedMarca.getVeiculos());

        repo.save(marca);
    }

    public void remove(Integer id) {
        repo.deleteById(id);
    }

}
