import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import sun from "./Assets/imgs/icon-sun.svg";
import moon from "./Assets/imgs/icon-moon.svg";
import check from "./Assets/imgs/icon-check.svg";
import cross from "./Assets/imgs/icon-cross.svg";
import { Footer1, Footer2 } from "./Components/footer";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(null);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = { id: uuidv4(), title, marked: false };
    setTodo([...todo, newItem]);
    setTitle("");
  };

  const deleteItem = (id) => {
    setTodo((todos) => todos.filter((item) => item.id !== id));
  };

  const selected = (id) => {
    setTodo((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, marked: !item.marked } : item
      )
    );
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("todo"));
    if (storedData && storedData.length > 0) {
      setTodo(storedData); // Update the 'todo' state with the stored data
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div
      className={
        !mode
          ? "App flex md:justify-center"
          : "App light flex md:justify-center"
      }
    >
      <div className="container flex items-center flex-col w-screen px-5  md:px-0 md:w-[550px] py-5 md:py-20">
        <div className="head flex justify-between items-center w-full mb-10 flex-row">
          <h1 className=" uppercase text-stone-50 font-bold md:tracking-[.5em] tracking-[.3em] text-3xl md:text-4xl">
            to<span className="text-pink-500">do</span>
          </h1>
          <img
            src={!mode ? sun : moon}
            alt="sun"
            className="cursor-pointer"
            onClick={() => setMode((ismode) => !ismode)}
          />
        </div>
        <div className="box px-5 py-2 flex mb-8 w-full items-center">
          <div className=" w-5 h-5 rounded-full border border-stone-400"></div>
          <form onSubmit={addItem}>
            <input
              type="text"
              className={!mode ? "input" : "input text-stone-700"}
              placeholder="Type a thing to do"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
        </div>


        <ul className="box flex flex-col w-full divide-y divide-stone-400 ">
          {view === "marked"
            ? todo
                .filter((item) => item.marked === true)
                .map((item) => (
                  <li
                    key={item.id}
                    className=" px-5 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className={
                          !item.marked
                            ? "w-5 h-5 rounded-full flex items-center justify-center border cursor-pointer border-stone-400"
                            : "circle cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border border-stone-400"
                        }
                        onClick={() => selected(item.id)}
                      >
                        {item.marked && (
                          <img src={check} alt="check" className="" />
                        )}
                      </div>

                      <p
                        className={
                          !mode
                            ? " text-stone-300 capitalize font-normal text-[18px] px-4 "
                            : " text-stone-600 capitalize font-semibold text-[18px] px-4 "
                        }
                        style={
                          item.marked ? { textDecoration: "line-through" } : {}
                        }
                      >
                        {item.title}
                      </p>
                    </div>
                    <img
                      src={cross}
                      alt="cross"
                      className="cursor-pointer"
                      onClick={() => deleteItem(item.id)}
                    />
                  </li>
                ))


            : view === "unmarked"
            ? todo
                .filter((item) => item.marked === false)
                .map((item) => (
                  <li
                    key={item.id}
                    className=" px-5 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className={
                          !item.marked
                            ? "w-5 h-5 rounded-full flex items-center justify-center border cursor-pointer border-stone-400"
                            : "circle cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border border-stone-400"
                        }
                        onClick={() => selected(item.id)}
                      >
                        {item.marked && (
                          <img src={check} alt="check" className="" />
                        )}
                      </div>

                      <p
                        className={
                          !mode
                            ? " text-stone-300 capitalize font-normal text-[18px] px-4 "
                            : " text-stone-600 capitalize font-semibold text-[18px] px-4 "
                        }
                        style={
                          item.marked ? { textDecoration: "line-through" } : {}
                        }
                      >
                        {item.title}
                      </p>
                    </div>
                    <img
                      src={cross}
                      alt="cross"
                      className="cursor-pointer"
                      onClick={() => deleteItem(item.id)}
                    />
                  </li>
                ))



            : !view &&
              todo.map((item) => (
                <li
                  key={item.id}
                  className=" px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div
                      className={
                        !item.marked
                          ? "w-5 h-5 rounded-full flex items-center justify-center border cursor-pointer border-stone-400"
                          : "circle cursor-pointer w-5 h-5 flex items-center justify-center rounded-full border border-stone-400"
                      }
                      onClick={() => selected(item.id)}
                    >
                      {item.marked && (
                        <img src={check} alt="check" className="" />
                      )}
                    </div>

                    <p
                      className={
                        !mode
                          ? " text-stone-300 capitalize font-normal text-[18px] px-4 "
                          : " text-stone-600 capitalize font-semibold text-[18px] px-4 "
                      }
                      style={
                        item.marked ? { textDecoration: "line-through" } : {}
                      }
                    >
                      {item.title}
                    </p>
                  </div>
                  <img
                    src={cross}
                    alt="cross"
                    className="cursor-pointer"
                    onClick={() => deleteItem(item.id)}
                  />
                </li>
              ))}


          {todo.length > 0 && (
            <Footer1
              todo={todo}
              setTodo={setTodo}
              setView={setView}
              view={view}
            />
          )}
        </ul>

        {todo.length > 0 && (
          <Footer2
            todo={todo}
            setTodo={setTodo}
            setView={setView}
            view={view}
          />
        )}
      </div>
    </div>
  );
}

export default App;
