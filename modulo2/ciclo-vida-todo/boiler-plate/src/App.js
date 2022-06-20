import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const listaConvertida = JSON.stringify(this.state.tarefas)
    localStorage.setItem("tarefas", listaConvertida);
  };

  componentDidMount() {
    const tarefasLocalStorage = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefasLocalStorage) {
      this.setState({ tarefas: tarefasLocalStorage });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const listaAtualizada = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: listaAtualizada})
    this.setState({inputValue: ''})

    //Salvando no Local Storage
    const listaConvertida = JSON.stringify(listaAtualizada);
    localStorage.setItem("tarefas", listaConvertida);

  }

  selectTarefa = (id) => {
    
    const listaAtualizada = this.state.tarefas.map((tarefa) => {
      let tarefaModificada = {
        ...tarefa
      }
      if (id === tarefa.id) {
        tarefaModificada.completa = !tarefa.completa
      }
      
      return tarefaModificada
    })
    this.setState({tarefas: listaAtualizada})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    let listaFiltrada = []
    if (this.state.tarefas) {
      listaFiltrada = this.state.tarefas.filter(tarefa => {
        switch (this.state.filtro) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })
    }
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} placeholder="Tarefa" type="text"/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
