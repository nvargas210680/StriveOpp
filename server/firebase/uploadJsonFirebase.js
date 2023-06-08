import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import data from "../data.json/scholarshipcafe.json" assert { type: "json" };
import admin from "firebase-admin";
import serviceAccount from "./striveopp2-firebase-adminsdk-airpl-4048329c00.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uploadData = async () => {
  try {
    // const batch = db.batch();

    data.forEach((item) => {
      admin.firestore().collection("scholarships").add(item);
      // batch.set(documentRef, item);
    });

    // await batch.commit();
    console.log("JSON file uploaded successfully to Firestore!");
  } catch (error) {
    console.error("Error uploading JSON file to Firestore:", error);
  }
};

uploadData();
