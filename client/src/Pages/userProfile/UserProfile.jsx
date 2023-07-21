import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthProvider";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
const UserProfile = () => {
  const [singleDoc, setSingleDoc] = useState({});
  const { currentUser } = useAuth();
  const id = currentUser.uid;

  const fetchSingle = async (e) => {
    e.preventDefault();
    console.log(db);
    const userCollection = collection(db, "user_profile");
    const userQuery = query(
      userCollection,
      where("userId", "==", currentUser.uid)
    );

    const userSnapshot = await getDocs(userQuery);
    if (!userSnapshot.empty) {
      const doc = userSnapshot.docs[0];
      const docData = doc.data();
      setSingleDoc(docData);
    } else {
      console.log("Document not found in Firestore");
    }
  };

  useEffect(() => {
    console.log(singleDoc);
  }, [singleDoc]);

  return (
    <div>
      <h1>Fetching Data</h1>
      <button onClick={fetchSingle}>Fetch single doc</button>
    </div>
  );
};

export default UserProfile;
