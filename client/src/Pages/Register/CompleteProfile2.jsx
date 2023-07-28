import { useState } from "react";
import Button from '@mui/joy/Button';
import {
  collection,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthProvider";
import "./CompleteProfile2.css";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonRoot } from "@mui/joy/Button/Button";

const CompleteProfile2 = () => {
  const tags = [
    "Arts",
    "Masters",
    "Business",
    "Communication",
    "Economics",
    "Engineering",
    "Fine Arts",
    "History",
    "Journalism",
    "Law",
    "Indigenous Languages",
    "Medicine & Health",
    "Nursing",
    "Physics",
    "Science",
    "Social Work",
    "Chinese",
    "Exchange Student",
    "White",
    "Black Canadian",
    "South Asian",
    "First Nations",
    "East Asian",
    "Southeast Asian",
    "Arab",
    "Latin American",
    "West Asian",
    "Visible Minorities",
    "Other",
    "Prefer Not To Say",
  ];

  const [selectedTags, setSelectedTags] = useState([]);
  const { currentUser } = useAuth();
  const { var1, var2 } = useParams();
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag.toLowerCase())) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag.toLowerCase())
      );
    } else {
      setSelectedTags([...selectedTags, tag.toLowerCase()]);
    }
  };
  console.log("test", currentUser);
  const handleSaveToFirebase = async () => {
    try {
      const userProfileRef = doc(db, "user_profile", currentUser.uid);
      const userProfileData = {
        userId: currentUser.uid,
        firstName: var1,
        lastName: var2,
        tags: selectedTags,
      };

      await Promise.all([
        setDoc(userProfileRef, userProfileData),
        // saveTagsToFirebase(),
      ]);

      console.log("Tags saved to Firebase user_profile collection");
      navigate("suggested-scholarship");
      // Find collection based on selected tags
      const q = query(
        collection(db, "scholarships2"),
        where("tag", "in", selectedTags)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        // Perform actions with the matched documents
      });

      // Navigate to the "suggested-scholarship" page
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving tags to Firebase:", error);
    }
  };

  return (
    <div>
      <h1>Select Tags</h1>
      <div className="tags">
        {tags.map((tag) => (
          <Button
          sx={{bgcolor: "#eee", color: "#294243", width:"20%"}}
            variant="solid"
            key={tag}
            className={selectedTags.includes(tag) ? "selected" : ""}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <Button variant="solid" sx={{bgcolor: "#294243", width:"60%"}} onClick={handleSaveToFirebase}>Submit</Button>
    </div>
  );
};

export default CompleteProfile2;
