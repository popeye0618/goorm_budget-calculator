import "./App.css";
import Btn from "./components/Btn";
import Forms from "./components/Forms";
import { GoPaperAirplane } from "react-icons/go";
import { useEffect, useState } from "react";
import Lists from "./components/Lists";
import { FaTrash } from "react-icons/fa6";

export default function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [sumPrice, setSumPrice] = useState(0);
  const [message, setMessage] = useState({ text: "", color: "", show: false });

  const showMessage = (text, color) => {
    setMessage({ text: text, color: color, show: true });
    setTimeout(() => {
      setMessage({ text: "", color: "", show: false });
    }, 3000);
  };

  useEffect(() => {
    const total = items.reduce((acc, items) => acc + Number(items.price), 0);
    setSumPrice(total);
  }, [items]);

  const handleSubmit = (e) => {
    if (!title.trim() || isNaN(price) || Number(price) <= 0) {
      return;
    }

    let newItem = {
      id: Date.now(),
      title: title,
      price: price,
    };

    setItems((prev) => [newItem, ...prev]);
    setTitle("");
    setPrice("");
    showMessage("아이템이 생성되었습니다", "#4AAE51");
  };

  const handleRemoveAll = () => {
    setItems([]);
    showMessage("아이템이 삭제되었습니다", "#C55150");
  };

  const handleRemove = (id) => {
    let newItems = items.filter((items) => items.id !== id);
    setItems(newItems);
    showMessage("아이템이 삭제되었습니다", "#C55150");
  };

  return (
    <div className="flex w-full h-full bg-orange-300">
      <div className="mx-5 my-5 w-screen h-screen">
        <div
          className="mb-4 py-2 px-2 w-1/2 text-white text-center rounded"
          style={{ backgroundColor: message.color }}
        >
          {message.text}
        </div>
        <h1 className="font-bold text-2xl mb-4">예산 계산기</h1>
        <div className="flex flex-col bg-white min-h-1/2 w-1/2">
          <Forms
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            handleSubmit={handleSubmit}
          />
          <Btn
            text={"제출"}
            icon={<GoPaperAirplane />}
            handleSubmit={handleSubmit}
          />
          <Lists
            items={items}
            setItems={setItems}
            handleRemove={handleRemove}
          />
          <Btn
            text={"목록 지우기"}
            icon={<FaTrash />}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
        <div className="flex w-1/2 justify-end mt-2">
          <h1 className="text-lg">총 지출 : {sumPrice}원</h1>
        </div>
      </div>
    </div>
  );
}
