import axios from 'axios'
import React, { useEffect, useState } from 'react';


import Card, {CardVariant} from './components/Card';
import UserItem from './components/UserItem';
import UserList from './components/UserList';
import List from './components/List';
import { ITodo, IUser } from './types/types';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';

const App = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])


  useEffect(() => {
      fetchUsers()
      fetchToDos()
  }, [])

  async function fetchUsers() {
    try{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
    } catch (e){
        alert(e)
    }
    
  }

  async function fetchToDos() {
    try{
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
    } catch (e){
        alert(e)
    }
    
  }

  return (
    <div>
      Works!
      <EventsExample/>
      <Card onClick={(num) => console.log('clicked', num)} variant={CardVariant.outlined} width='200px' height='200px'> 
          <button>Smash ME!</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum expedita molestias quos vel ad atque maxime laborum tenetur s</p>
      </Card>
      <List
          items={users}
          renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
      />
      <List
          items={todos}
          renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
};

export default App;

// в каждом экспортируемом элементе <Element/> указываем props которые передаем в этот компонент