const ClientLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>HEADER</h1>
      </header>
      {children}
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
};

export default ClientLayout;
