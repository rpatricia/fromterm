import { Component, OnInit } from '@angular/core';
import { BombasDeCalor } from 'src/app/models/BombasDeCalor.model';
import { BombasDeCalorService } from 'src/app/services/bombas-de-calor.service';
import { AppToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  bombas: BombasDeCalor[] = [];
  bombaSelecionada!: BombasDeCalor;
  bombaAbertaSelect?: number;
  isEdit: boolean = false;
  bombaInsert: BombasDeCalor = {
    name: '',
    value: 0,
    aberta: false,
  };
  aberta: string = '0';
  editedRowIndex!: number | null;

  constructor(
    private _bombasDeCalorService: BombasDeCalorService,
    public toastService: AppToastService
  ) {}

  ngOnInit(): void {
    this.updateTable();
  }

  updateTable() {
    this._bombasDeCalorService.getAll().then((bombas) => {
      this.bombas = bombas.sort((a, b) => {
        // Primeiro, ordena pelo nome
        const nameComparison = a.name.localeCompare(b.name);

        if (nameComparison === 0) {
          // Se os nomes forem iguais, ordene pela propriedade 'aberta'
          return +a.aberta - +b.aberta; // Para ordem decrescente, troque a e b
        }

        return nameComparison;
      });
    });
  }

  bombaAbertaOuFechada(value: boolean): string {
    return value ? 'Aberta' : 'Fechada';
  }

  editLine(i: number, bomba: BombasDeCalor) {
    this.isEdit = true;
    this.editedRowIndex = i;
    this.bombaAbertaSelect = bomba.aberta ? 1 : 0;
    this.bombaSelecionada = bomba;
  }

  insert() {
    this.bombaInsert.aberta = this.aberta === '1' ? true : false;
    this._bombasDeCalorService
      .addBombaDeCalor(this.bombaInsert)
      .then((data) => {
        this.updateTable();
        this.toastService.success(
          'Sucesso',
          'Bomba de Calor adicionada com sucesso!'
        );
      });
  }

  saveLine(i: number) {
    this.isEdit = false;
    this.editedRowIndex = null;
    console.log(this.bombaSelecionada);
    this._bombasDeCalorService
      .update(this.bombaSelecionada)
      .then((data) =>
        this.toastService.success(
          'Sucesso',
          'Bomba de Calor editada com sucesso!'
        )
      )
      .catch((error) => {
        this.toastService.error('Erro', 'Ocorreu um erro ao salvar a edição');
      });
  }

  cancelSaveLine(i: number) {
    this.isEdit = false;
    this.editedRowIndex = null;
    this.updateTable();
  }

  delete(bomba: BombasDeCalor) {
    const confirmacao = confirm('Deseja realmente exlcuir o registro?');
    if (confirmacao)
      if (bomba.id)
        this._bombasDeCalorService
          .delete(bomba.id)
          .then((data) => {
            this.toastService.success(
              'Sucesso',
              'Bomba de calor excluída com sucesso!'
            );
            this.updateTable();
          })
          .catch((error) => {
            this.toastService.error(
              'Erro',
              'Ocorreu um erro ao excluir o registro'
            );
          });
  }
  clear() {
    this.bombaInsert = {
      name: '',
      value: 0,
      aberta: false,
    };
    this.aberta = '0';
  }
}
