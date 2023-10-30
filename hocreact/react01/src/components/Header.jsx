import React, { Fragment } from "react";

const Header = () => {
  const showMenu = true;
  const notifications = [
    {
      id: 1,
      name: "Noti 1",
      content: "Content Noti 1",
    },

    {
      id: 2,
      name: "Noti 2",
      content: "Content Noti 2",
    },

    {
      id: 3,
      name: "Noti 3",
      content: "Content Noti 3",
    },
  ];
  return (
    <>
      <h1>HEADER</h1>
      <h1>HEADER</h1>
      {showMenu && (
        <>
          <h2>Menu Item</h2>
          <h2>Menu Item</h2>
        </>
      )}
      {notifications.map(({ id, name, content }) => (
        <Fragment key={id}>
          <h4>{name}</h4>
          <p>{content}</p>
        </Fragment>
      ))}
    </>
  );
};

export default Header;
