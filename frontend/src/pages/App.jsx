import React from 'react';

function Header() {
  return <h1>Header</h1>;
}

function Sidebar() {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

function Content() {
  return <p>Contenido principal</p>;
}

function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
