package com.tfpc3.tfpc3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tfpc3.tfpc3.models.Veiculo;
import com.tfpc3.tfpc3.service.VeiculoService;

@RestController
public class VeiculoController {

    private final VeiculoService service;

    @Autowired
    public VeiculoController(VeiculoService veiculoService) {
        this.service = veiculoService;
    }

    @GetMapping("/api/veiculos")
    public List<Veiculo> getAll() {
        return service.getAll();
    }

    @PostMapping("/api/veiculo")
    public void add(@RequestBody Veiculo veiculo) {
        System.out.println(veiculo);
        service.add(veiculo);
    }

    @PutMapping("/api/veiculo/{id}")
    public void update(@PathVariable Integer id,@RequestBody Veiculo updatedVeiculo) {
        service.update(id, updatedVeiculo);
    }

    @DeleteMapping("/api/veiculo/{id}")
    public void remove(@PathVariable Integer id) {
        service.remove(id);
    }

}
