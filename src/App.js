import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import PostForm from "./components/Post/PostForm";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(true);
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
        <Footer isOpenPost={isOpenPost} setOpen={setOpen}/>
        {isOpenPost && <PostForm setOpen={setOpen}/>}
      </div>
    </>
  );
}

export default App;
