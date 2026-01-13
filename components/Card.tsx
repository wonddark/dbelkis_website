import { ReactNode } from "react";

function Card(props: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex w-60 shrink-0 flex-col gap-4 rounded-2xl bg-paper p-3 shadow-[0_2px_4px_0] shadow-[rgb(107_114_128/0.1)]">
      {props.children}
    </div>
  );
}

export default Card;
