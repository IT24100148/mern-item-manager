import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import * as api from './api';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await api.getItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleItemAdded = async (newItem) => {
    try {
      await api.createItem(newItem);
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleItemDelete = async (id) => {
    try {
      await api.deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="container">
      <h1>MERN Item Manager</h1>
      <ItemForm onItemAdded={handleItemAdded} />
      <ItemList items={items} onItemDelete={handleItemDelete} />
    </div>
  );
}

export default App;
