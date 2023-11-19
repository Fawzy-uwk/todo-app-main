export function Footer1({ todo, setTodo, setView, view }) {
  return (
    <li className="list px-5 py-4 flex text-stone-400 items-center justify-between">
      <span className="text-sm font-normal">
        {todo.filter((item) => item.marked === false).length} items left
      </span>

      <ul className="gap-2 text-sm hidden  font-semibold md:flex items-center justify-between">
        <li
          onClick={() => setView(null)}
          className={
            view === null
              ? "active hover:text-slate-300 cursor-pointer"
              : "hover:text-slate-300 cursor-pointer "
          }
        >
          All
        </li>

        <li
          onClick={() => setView("unmarked")}
          className={
            view === "unmarked"
              ? "active hover:text-slate-300 cursor-pointer "
              : "hover:text-slate-300 cursor-pointer"
          }
        >
          Active
        </li>

        <li
          onClick={() => setView("marked")}
          className={
            view === "marked"
              ? "active hover:text-slate-300 cursor-pointer "
              : "hover:text-slate-300 cursor-pointer"
          }
        >
          Completed
        </li>
      </ul>

      <span
        className="text-stone-400 cursor-pointer hover:text-slate-200"
        onClick={() => setTodo([])}
      >
        Clear Completed
      </span>
    </li>
  );
}

export function Footer2({ view, setView }) {
  return (
    <div className="box mt-6 px-5 py-3 flex mb-8 w-full items-center justify-center gap-2 list-none text-sm font-semibold md:hidden">
      <li
        onClick={() => setView(null)}
        className={
          view === null
            ? "active hover:text-slate-300 cursor-pointer "
            : "hover:text-slate-300 cursor-pointer"
        }
      >
        All
      </li>

      <li
        onClick={() => setView("unmarked")}
        className={
          view === "unmarked"
            ? "active hover:text-slate-300 cursor-pointer "
            : " hover:text-slate-300 cursor-pointer"
        }
      >
        Active
      </li>

      <li
        onClick={() => setView("marked")}
        className={
          view === "unmarked"
            ? "active hover:text-slate-300 cursor-pointer "
            : " hover:text-slate-300 cursor-pointer"
        }
      >
        Completed
      </li>
    </div>
  );
}
