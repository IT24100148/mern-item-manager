function ItemList({ items, onItemDelete }) {
  return (
    <div className="item-list">
      <h2>Items</h2>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price ? `$${item.price}` : ''}</p>
              {/* TODO: Add price display here manually later */}
              <button onClick={() => onItemDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
