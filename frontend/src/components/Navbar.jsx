import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ open }) {
  if (!open) return null;

  const selectedLink = [
    "/conveyorbelt",
    "/conveyorsystem",
    "/engineeringplastic",
    "/engineeringplasticfabrication",
    "/aircompressor",
    "/industrialprinters",
    "/other",
  ];

  return (
    <>
      <div className="absolute mt-93 ml-60">
        {[
          "Conveyor Belt",
          "Conveyor System",
          "Engineering Plastic",
          "Engineering Plastic Fabrication",
          "Air Compressors",
          "Industrial Printers",
          "Other Products & Services",
        ].map((item, index) => (
          <Link to={selectedLink[index]} key={index}>
            <div className="bg-blue-50 w-90 hover:bg-blue-100 pb-3 pt-2 pl-5">
              {item}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function DropDown({ item, index, clickedIndex, setClickedIndex }) {
  const [open, setOpen] = useState(false);
  const setBackground = ["bg-blue-100", "bg-blue-50"];

  return (
    <>
      <li tabIndex={0} onBlur={() => setOpen(false)}>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            onClick={() => setClickedIndex(index)}
            className={`${
              open ? setBackground[0] : setBackground[1]
            } p-3 pt-5 pb-5 hover:bg-blue-50 hover:text-blue-500 w-30`}
          >
            {item}
          </div>
        </div>
      </li>
      <ProductList open={open} />
    </>
  );
}

function NavLists({ items, index, clickedIndex, setClickedIndex }) {
  const setBackground = ["bg-blue-100", "bg-blue-50"];
  const isActive = clickedIndex === index;

  return (
    <>
      <li
        onClick={() => setClickedIndex(index)}
        className={`flex justify-center ${
          isActive ? setBackground[0] : setBackground[1]
        } hover:text-blue-500 hover:bg-blue-50 transition-colors duration-300 ease-in-out cursor-pointer pt-5 pb-5 w-30`}
      >
        {items}
      </li>
    </>
  );
}

const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-blue-50 flex-none content-center">
        <div className=" flex items-center gap-10 justify-around">
          <img src="./bengarLogo.svg" className="cursor-pointer"></img>
          <ul className="flex items-center justify-between">
            <Link to="/">
              <NavLists
                items={"Home"}
                index={0}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            </Link>
            <Link to="/about">
              <NavLists
                items={"About"}
                index={1}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            </Link>
            <DropDown
              item={"Our Products"}
              index={2}
              clickedIndex={clickedIndex}
              setClickedIndex={setClickedIndex}
            />
            <Link to="ourclients">
              <NavLists
                items={"Our Clients"}
                index={3}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            </Link>
            <Link to="ourpartners">
              <NavLists
                items={"Our Partners"}
                index={4}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            </Link>
            <Link to="contactus">
              <NavLists
                items={"Contact Us"}
                index={5}
                clickedIndex={clickedIndex}
                setClickedIndex={setClickedIndex}
              />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
