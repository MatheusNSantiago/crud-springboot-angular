package com.tfpc3.tfpc3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tfpc3.tfpc3.models.Marca;
import com.tfpc3.tfpc3.service.MarcaService;

@RestController
public class MarcaController {

    private final MarcaService service;

    @Autowired
    public MarcaController(MarcaService marcaService) {
        this.service = marcaService;
    }

    @GetMapping("/api/marcas")
    public List<Marca> getAll() {
        return service.getAll();
    }

    @PostMapping("/api/marca")
    public void add(@RequestBody Marca marca) {
        service.add(marca);
    }

    @PutMapping("/api/marca/{id}")
    public void update(@PathVariable Integer id ,@RequestBody Marca updatedMarca) {
        service.update(id, updatedMarca);
    }

    @DeleteMapping("/api/marca/{id}")
    public void remove(@PathVariable Integer id) {
        service.remove(id);
    }
}
