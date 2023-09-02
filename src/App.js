import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import { useSelector } from "react-redux";

function App() {
  const [isEdit, setEdit] = useState(false);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  return (
    <>
      <div className="App">
        {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
        {loading && <p className="loading">Loading...</p>}
        {!isEdit && error && (
          <p className="error">Error on fetching data from server</p>
        )}
      </div>
    </>
  );
}

export default App;
