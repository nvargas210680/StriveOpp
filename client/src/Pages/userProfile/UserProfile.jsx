//
import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthProvider";
import { collection, query, where, getDocs } from "firebase/firestore";

const UserProfile = () => {
  const [singleDoc, setSingleDoc] = useState({});
  const { currentUser } = useAuth();

  const fetchUserProfile = async () => {
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
    fetchUserProfile();
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  const { firstName, lastName, tags } = singleDoc;

  return (
    <div>
      <h1>Profile</h1>
      {Object.keys(singleDoc).length > 0 ? (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Tags: {tags && tags.join(", ")}</p>
        </div>
      ) : (
        <p>Loading user profile data...</p>
      )}
    </div>
  );
};

export default UserProfile;
