import "../App.css";

export const BasketItem = ({ item, cart, setCart }) => {
  const ChangeItemCount = (id, isAdd, isFilter) => {
    setCart(
      cart.filter((item) => {
        if (item.id === id) {
          if (isFilter) return false;
          if (!isAdd && item.count > 1) {
            item.count -= 1;
          } else if (isAdd) {
            item.count += 1;
          }
        }

        return true;
      })
    );
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.count}</td>
      <td>{item.price * item.count}</td>
      <td className="incDecBtnWrapper">
        <span onClick={() => ChangeItemCount(item.id, true)}>+</span>
        <span onClick={() => ChangeItemCount(item.id)}>-</span>
        <span onClick={() => ChangeItemCount(item.id, null, true)}>x</span>
      </td>
    </tr>
  );
};
