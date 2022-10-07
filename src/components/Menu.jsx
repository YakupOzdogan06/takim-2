import React from "react";

const Menu = ({ item }) => {
  const { name, title, price, url, category } = item;
  return (
    <div className="griddüzen">
      <div className="flexüst">
        <div className="url">
          <img src={url} alt="meal" />
        </div>
        <div className="fiyatveisimler">
          <div className="sadecerow">
            <div className="isim"> {name}</div>{" "}
            <div className="fiyat">{price}</div>
          </div>
          <div className="kategori">{category}</div>
          <div className="title">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
