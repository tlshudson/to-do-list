import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Configurar Tailwind CSS no projeto",
      description:
        "Revisar 'index.css' e 'tailwind.config.js' para garantir que todas as classes utilitárias sejam carregadas corretamente.",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Criar componente 'TaskItem'",
      description:
        "Desenvolver o componente JSX para renderizar um único item da lista, incluindo título, descrição e um checkbox.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Implementar a funcionalidade de 'Adicionar'",
      description:
        "Ligar o input do 'AddTask' a um estado e criar a função para adicionar um novo objeto de tarefa (com um ID único) ao array principal de tarefas.",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estilizar o Gerenciador com classes do Tailwind",
      description:
        "Aplicar classes de flexbox (flex), cores de fundo (bg-), e responsividade para dar um visual moderno à aplicação.",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Adicionar botão 'Deletar' em cada tarefa",
      description:
        "Implementar a função de filtro para remover uma tarefa do estado ao clicar no botão 'Deletar'.",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks}/>
        <AddTask />
      </div>
    </div>
  );
}
export default App;
