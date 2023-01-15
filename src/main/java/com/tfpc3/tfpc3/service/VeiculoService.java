package com.tfpc3.tfpc3.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tfpc3.tfpc3.models.Veiculo;
import com.tfpc3.tfpc3.repository.VeiculoRepository;

@Service
public class VeiculoService {

    private final VeiculoRepository repo;

    @Autowired
    public VeiculoService(VeiculoRepository veiculoRepository) {
        this.repo = veiculoRepository;
    }

    public List<Veiculo> getAll() {
        return repo.findAll();
    }

    public void add(Veiculo veiculo) {
        repo.save(veiculo);
    }

    public void update(Integer id, Veiculo updatedVeiculo) {
        Veiculo veiculo = repo.findById(id).get();

        veiculo.setPlaca(updatedVeiculo.getPlaca());
        veiculo.setCor(updatedVeiculo.getCor());
        veiculo.setAnoModelo(updatedVeiculo.getAnoModelo());
        veiculo.setMarca(updatedVeiculo.getMarca());

        repo.save(veiculo);
    }

    public void remove(Integer id) {
        repo.deleteById(id);
    }
}
