import "./styles.css";
import Button from "../Button/Button";
// шаг 1 - импорт хука useState из react
import { useState } from `react`

function Counter() {

// шаг 2 - вызываем хук useState и передаём в него первоначальное состояние для каунтера 
// и делаем деструктуризацию массива, который возвращает вызов хука
const [count, setCount] = useState(0);

//шаг 3 - необходимо прописать функции, которые будут менять состояние, внутри функций используем setCount
//Функция по изменению состояния, которую возвращает нам вызов useState, принимает аргумент, который и будет являться новым значением
// то есть функцию setCount необходимо вызвать и передать в нее новое значение
const onMinusClick = () => {
    setCount((prevValue)=>prevValue - 1);
};
const onPlusClick = () => {
    setCount((prevValue)=>prevValue + 1);
};

// const result = useState(2)
// console.log(result)

  return (
    <div className="counter-component">
      <div className="button-wrapper">
        <Button name="-" onMinusClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onPlusClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;