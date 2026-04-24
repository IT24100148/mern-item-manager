import { useState } from 'react';

function ItemForm({ onItemAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setprice] = useState('');
  // TODO: Add price state here manually later

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;

    const newItem = { name, description, price };
    // TODO: Add price field here manually

    onItemAdded(newItem);
    setName('');
    setDescription('');
    setprice('');
    // TODO: Reset price state here manually
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h2>Add New Item</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setprice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ItemForm;
