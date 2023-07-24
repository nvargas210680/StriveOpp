import { useEffect, useState } from 'react';
import { Auth, GoogleAuthProvider } from './components/auth';
import { db, auth, storage } from './config/firebase';
import { 
        getDocs, 
        collection, 
        addDoc, 
        deleteDoc, 
        doc, 
        updateDoc} 
      from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

const ScholarshipTest = () => {
  const [perfumeList, setPerfumeList] = useState([]);

  // New Perfumes State
  const [newHouse, setNewHouse] = useState("");
  const [newPerfumeFragrance, setNewPerfumeFragrance] = useState("");
  const[newReleaseDate,setNewReleaseDate] = useState(0);
  const [isNewFragranceLimitedEdition, setNewFragranceLimitedEdition] = useState(false);

  // Update Fragrance State
  const [updatedFragrance, setUpdatedFragrance] = useState("");

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null);

  // Database
  const perfumesCollectionRef = collection(db, "perfumes");

  const getPerfumeList = async() => {
    try {
      const data = await getDocs(perfumesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setPerfumeList(filteredData);
      } catch(err) {
        console.error(err);
      }
    };

    const deletePerfume = async(id) => {
      const perfumeDoc = doc(db, "perfumes", id);
      await deleteDoc(perfumeDoc);
    }

    const updatePerfumeFragrance = async(id) => {
      const perfumeDoc = doc(db, "perfumes", id);
      await updateDoc(perfumeDoc, { fragrance: updatedFragrance});
    };

    const uploadFile = async() => {
      if(!fileUpload) return;
      const filesFolderRef=ref(storage, `projectFiles/${fileUpload.name}`);
      try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect (() => {
      getPerfumeList();
    }, []);
  
    const onSubmitPerfume = async () => {
      try {
      await addDoc(perfumesCollectionRef, {
        house: newHouse,
        fragrance: newPerfumeFragrance,
        releaseDate: newReleaseDate,
        limitedEdition: isNewFragranceLimitedEdition,
        userId: auth?.currentUser?.uid,
      });

      getPerfumeList();
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <>
    <div className="App">
      <Auth />

      <br />
      <hr />
      <br />

      <div>
        <input 
          placeholder="House"
          onChange={(e) => 
          setNewHouse(e.target.value)}
          />
        <input 
          placeholder="Fragrance"
          onChange={(e) =>
          setNewPerfumeFragrance(e.target.value)}
          />
        <input
          placeholder="Release Date"
          type="number"
          onChange={(e) =>
          setNewReleaseDate(Number(e.target.value))}
          />
        <br />
        <br />
        <label>Limited Edition?</label>
        <input type="checkbox"
          checked={isNewFragranceLimitedEdition} 
          onChange={(e) => 
          setNewFragranceLimitedEdition(e.target.checked)}
          />
        <br />
        <br />
        <button onClick={onSubmitPerfume}>Submit Fragrance</button>
      </div>
      <br />
      <hr />
      <br />
    
    </div>

    <div>
      {perfumeList.map((perfume) => (
        <>
        <div>
          <b><i>House: </i></b>{perfume.house}
          <br />
          <h1 style={{color:perfume.limitedEdition ? "red" : "green"}}>
            {perfume.fragrance}
          </h1>

          <p>
            Release Date: {perfume.releaseDate}
            <br />
            Top Notes: {perfume.topnotes}
            <br />
            Heart Notes: {perfume.heartnotes}
            <br />
            Base Notes: {perfume.basenotes}
          </p>

          <br />

          <button
            onClick={() => 
            deletePerfume(perfume.id)}> 
            Delete Perfume 
            </button>
          <br />
          <br />

          <input 
            placeholder="new title..."
            onChange={(e) => 
            setUpdatedFragrance(e.target.value)}
            />
          <button>Update Fragrance Name</button>
        </div>
        </>
      ))}
    </div>

    <div>
      <input 
        type="file" 
        onChange={(e) =>
        setFileUpload(e.target.files[0])}
      />
      <button onClick={uploadFile}> Upload File </button>
    </div>
    </>
  )};

export default ScholarshipTest;
