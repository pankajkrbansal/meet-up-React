function Todo(){
    return (
        <div className="row">
      <div className="card" style={{width:"25%"}}>
        <div className="card-title">
        <h2>Title</h2>
        </div>
        <div className="card-body">
          <p>Card body</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger"> Delete </button>
        </div>
      </div>
    </div>
    );
}

export default Todo;