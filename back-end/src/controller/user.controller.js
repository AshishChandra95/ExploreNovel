import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpass = await bcryptjs.hash(password, 10);
        // Create a new user
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashpass,
        });

        await createdUser.save();
        res.status(200).json({ 
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};



export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await User.findOne({ email })
        const isMatch = await bcryptjs.compare(password, users.password)
        if (!email || !isMatch) {
            return res.status(400).json({
                message: "Invalid Username or Password"})
        }
        else {
            res.status(200).json({
                message: "Login Succesfully",
                users: {
                    _id: users._id,
                    fullname: users.fullname,
                    email : users.email,
                }
            })

        }
    } catch (error) {
        res.status(500).json({ message: "Something went Wrong" })
    }
}