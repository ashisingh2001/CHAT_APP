const { register,login ,setAvatar,
    getAllUsers,
    logOut,check} =require("../controllers/usersController");
const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
// router.get("/logout/:id", logOut);
router.post("/check",check);
module.exports = router;
