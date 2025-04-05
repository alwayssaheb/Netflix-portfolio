import connectDB from "../../db"; // ✅ Correct import
import Image from "next/image";
import Netflixtile from "./components/netflixtile";
import Browser from "./browser/page";

import express from "express"; // ✅ Use `import`
const app = express();

// connectDB()
//     .then(() => {
//         console.log("Database connection is successful");
//         app.listen(7777, () => {
//             console.log("Server is successfully listening on port 7777");
//         });
//     })
//     .catch((error: any) => {
//         console.error("Database cannot be connected", error);
//     });

export default function Home() {
    return (
        <div>
            <Netflixtile />
        </div>
    );
}
