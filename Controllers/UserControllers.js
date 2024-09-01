const User = require('../Model/UserModel');

const getAllUsers = async (req, res) => {
   let users;
    try {
         users = await User.find();
    } catch (error) {
        console.log(error); 
    }

    if(!users){
        res.status(404).json({message: "No users found"});
    }

    res.status(200).json({users});
}

const addUser = async (req, res) => {
    const {name, gmail, age, address} = req.body;

    const newUser = new User({
        name,
        gmail,
        age,
        address
    });

    try {
        await newUser.save();
    } catch (error) {
        console.log(error);
    }

    res.status(201).json({newUser});

}

const getById = async (req, res) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({user});
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {name, gmail, age, address} = req.body;

    let user;
    try {
        user = await User.findByIdAndUpdate(id, {name, gmail, age, address}, {new: true});
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({user});
}

const deleteUser = async (req, res) => {

    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json({message: "User deleted"});

}

exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.getById = getById;
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;