function App() {
  return (
    <center className="todo-container">
      <h1>Todo App</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input type="text" placeholder="Enter Task" />
          </div>
          <div className="col-4">
            <input type="date" placeholder="dd/mm/yyyy" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Success
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-4">Buy Milk</div>
          <div className="col-4">01/06/2024</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>

          <div className="row">
            <div className="col-4">Buy Milk</div>
            <div className="col-4">01/06/2024</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
