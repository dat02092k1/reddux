import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import EditPage from "./components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import PostForm from "./components/Post/PostForm";
import Post from "./components/Post/Post";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(true);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  return (
    <>
      <div className="App">
        {isEdit 
        ? <EditPage setEdit={setEdit} /> 
        : !isEdit && !isOpenPost ? (
          <>
            <Header setEdit={setEdit} />
            <div className="post-container">
              <Post/>
            </div>
            <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
          </>
        ) : (
          <>
            <Header setEdit={setEdit} />
            <PostForm setOpen={setOpen} />
          </>
        )}
        
        {loading && <p className="loading">Loading...</p>}
        {!isEdit && error && (
          <p className="error">Error on fetching data from server</p>
        )}
        <Footer isOpenPost={isOpenPost} setOpen={setOpen} />
         
      </div>
    </>
  );
}

export default App;
