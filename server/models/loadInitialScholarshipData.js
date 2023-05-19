import initialData from "../_initial_data/scholarships.json" assert {type:"json"};
import { createScholarship } from "../controllers/scholarshipController";

const loadInitialData = async () => {
    for (let i=0; i < initialData.length; i++) {
        const scholarship = initialData[i];
        try{
            console.log('creating scholarship ${scholarship.name}');
            const newScholarship = await createScholarship(scholarship);
            console.log("newScholarship", newScholarship);
            console.log(
                'created scholarship ${newScholarship.name} with id ${newScholarship._id}'
            );
        } catch (err) {
            console.log('error creating playground ${scholarship.name}');
            console.log(err.message);
        }
    }
    console.log("finished loading initial data");
};
loadInitialData();