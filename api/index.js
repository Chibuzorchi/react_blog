const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const cors = require("cors")
const multer = require("multer");
const path = require("path");
const port = process.env.PORT || 9800;

app.use(cors())
app.use(express.json());
app.use("/asset", express.static(path.join(__dirname, "/images")))


dotenv.config();

//MONGOOSE
mongoose.connect(process.env.MONGO_URL).
then(console.log("Connected to Mongoose"))
    .catch((err) => {
    console.log(err);
});

//IMAGE UPLOAD
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")},
        filename:(req, file, cb) => {
            cb(null, req.body.name)
        }
})

const upload = multer({storage:storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
    const filename = req.file.filename
    const url = `${req.protocol}://${req.hostname}:9800/asset/${filename}`
    res.status(200).json({success: true, message: "File Uploaded!", url})
})

//ROUTES
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen("9800", () => {
    console.log(`Backend is running on port ${port}`);
});