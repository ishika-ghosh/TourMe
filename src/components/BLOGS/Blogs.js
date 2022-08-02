import React, { useState, useRef, useEffect } from "react";
import { storage, db } from "../firebase/index";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import ViewPosts from "./ViewPosts";
import ModalComp from "./Modal";
import "./blogs.css";
import ModalControl from "./modalControl";

function Blogs() {
  const formRef = useRef(null);
  const [allState, setAllState] = useState({
    fileData: {
      fileName: "",
      fileContent: "",
    },
    selectedImage: null,
    userList: [],
    Modal: false,
    isloading: false,
    userData: {
      name: "",
      visitedPlace: "",
      experience: "",
      rating: 0,
      image: "",
    },
  });

  const [date, setdate] = useState(new Date().getMilliseconds());

  //handle the selected file
  const handlefilechange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    setAllState((prev) => ({ ...prev, selectedImage: file }));
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAllState((prev) => ({
        ...prev,
        fileData: {
          fileName: file.name,
          fileContent: reader.result,
        },
      }));
    };
  };
  //upload the image and set the url in userdata
  useEffect(() => {
    const uploadImage = () => {
      const imageRef = ref(
        storage,
        `images/${allState.selectedImage.name + date}`
      );
      setAllState((prev) => ({ ...prev, isloading: true }));
      uploadBytes(imageRef, allState.selectedImage)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            const user = { ...allState.userData };
            user.image = url;
            setAllState((prev) => ({ ...prev, userData: user }));
          });

          setAllState((prev) => ({ ...prev, isloading: false }));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    allState.selectedImage && uploadImage();
  }, [allState.selectedImage]);

  //post the form to firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "users"), {
      ...allState.userData,
      timeStamp: new Date().toLocaleString(),
    }).then((res) => {
      alert("Post sucessful");
      e.target.reset();
      setAllState((prev) => ({
        ...prev,
        userData: { name: "", visitedPlace: "", experience: "", image: "" },
        fileData: {
          fileName: "",
          fileContent: "",
        },
        Modal: false,
      }));
    });
  };
  //Input field change
  const handleChange = (e) => {
    const user = { ...allState.userData };
    user[e.currentTarget.name] = e.currentTarget.value;

    setAllState((prev) => ({ ...prev, userData: user }));
  };
  useEffect(() => {
    setAllState((prev) => ({ ...prev, isloading: true }));
    onSnapshot(collection(db, "users"), (snapshot) => {
      var list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      // list.reverse();
      list.sort(
        (a, b) =>
          new Date(a.timeStamp).valueOf() - new Date(b.timeStamp).valueOf()
      );
      list.reverse();
      setAllState((prev) => ({ ...prev, isloading: false, userList: list }));
    });
  }, []);

  return (
    <>
      {allState.Modal && (
        <ModalComp
          submit={handleSubmit}
          changeInput={handleChange}
          setFile={handlefilechange}
          ref={formRef}
          data={allState.userData}
          isloading={allState.isloading}
          file={allState.fileData}
          setModal={(tf) => setAllState((prev) => ({ ...prev, Modal: tf }))}
          setdata={setAllState}
        />
      )}
      <div className="blog-container">
        <div className="content">
          <div className="control-modal">
            <ModalControl
              setModal={(tf) => setAllState((prev) => ({ ...prev, Modal: tf }))}
            />
          </div>
          <div className="post-view">
            {allState.userList.map((user) => {
              return (
                <ViewPosts key={user.id} data={user} modal={allState.Modal} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
