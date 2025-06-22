import { useState, type MouseEvent } from "react";

interface ListGroupProps{
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem:  (item: string) => void// onClick
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
    

    // let selectedIndex = 0;
    // hook
    const [selectedIndex, setSelectedIndex] = useState(-1); // variable name, function name, initial value
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater/setter function

    // const [name, setName] = useState('');

    // mgaBabyKo = [];

    // const message = mgaBabyKo.length === 0 ? <p>wala kang baby</p> : null;

    // const getMessage = () =>{
    //     return mgaBabyKo.length === 0 ? <p>wala kang baby</p> : null;
    // }

    // type annotation
    // const handleClick = (event: MouseEvent) => console.log(event);

    return (
    // <h1></h1> // bawal multiple elements/ na magsibling
    // <> means to use a fragment
    <>
      <h1>{heading}</h1>
      { items.length === 0 && <p>wala kang baby</p> }
      <ul className="list-group">
        {items.map((baby, index) => (
            <li className={
              selectedIndex === index 
              ? "list-group-item active" 
              : "list-group-item"
            } key={baby} onClick={() => {
              setSelectedIndex(index);
              onSelectItem(baby);
            }}>{baby}</li>
        ))} 
      </ul>
    </>
    // mgaBabyKo.length === 0 && <p>wala kang baby</p> // ibig-sabihin irereturn yung after ng 2& if true, else wala 
    // : null} para walang i-return/continue lang
    // {mgaBabyKo.map(baby => <li>{baby}</li>)} // may outer braces kasi bawal yata yung mga ganyan, so parang tinreat din natin na string yung return nung function???

  );
}
export default ListGroup;
