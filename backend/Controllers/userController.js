import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updateUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' });
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select("-password");
        if (user) {
            res.status(200).json({ success: true, message: 'User found', data: user });
        } else {
            res.status(404).json({ success: false, message: 'No user found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: 'Users found', data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Internal server error' });
    }
};

export const getUserProfile = async (req, res) => {
    const userId = req.userId; // Make sure this is being correctly set in your request
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const { password, ...rest } = user._doc; // Assuming _doc has the user document data
        res.status(200).json({ success: true, message: 'Profile info is getting', data: { ...rest } });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
};
export const getMyAppointments = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.userId })
        const doctorIds = bookings.map(el => el.doctor) // ← fix
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')
        res.status(200).json({ success: true, message: 'Appointments are getting', data: doctors })
    } catch (error) {
        console.log(error) // ← yeh bhi add karo debugging ke liye
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
};
// import User from "../models/UserSchema.js";
// import Booking from "../models/BookingSchema.js";
// import Doctor from "../models/DoctorSchema.js";

// // Helper function to validate MongoDB Object ID
// import mongoose from 'mongoose';
// const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// export const updateUser = async (req, res) => {
//     const id = req.params.id;
//     if (!isValidObjectId(id)) {
//         return res.status(400).json({ success: false, message: 'Invalid user ID' });
//     }

//     try {
//         const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
//         if (!updatedUser) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }
//         res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Failed to update' });
//     }
// };

// export const deleteUser = async (req, res) => {
//     const id = req.params.id;
//     if (!isValidObjectId(id)) {
//         return res.status(400).json({ success: false, message: 'Invalid user ID' });
//     }

//     try {
//         const deletedUser = await User.findByIdAndDelete(id);
//         if (!deletedUser) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }
//         res.status(200).json({ success: true, message: 'Successfully deleted' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Failed to delete' });
//     }
// };

// export const getSingleUser = async (req, res) => {
//     const id = req.params.id;
//     if (!isValidObjectId(id)) {
//         return res.status(400).json({ success: false, message: 'Invalid user ID' });
//     }

//     try {
//         const user = await User.findById(id).select("-password");
//         if (!user) {
//             return res.status(404).json({ success: false, message: 'No user found' });
//         }
//         res.status(200).json({ success: true, message: 'User found', data: user });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };

// export const getAllUser = async (req, res) => {
//     try {
//         const users = await User.find({}).select("-password");
//         res.status(200).json({ success: true, message: 'Users found', data: users });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };

// export const getUserProfile = async (req, res) => {
//     const userId = req.userId; 
//     console.log("user id", userId)
//     if (!isValidObjectId(userId)) {
//         return res.status(400).json({ success: false, message: 'Invalid user ID' });
//     }

//     try {
//         const user = await User.findById(userId);
//         console.log("user", user)
//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }
//         const { password, ...rest } = user.toObject();
//         res.status(200).json({ success: true, message: 'Profile info retrieved', data: { ...rest } });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Something went wrong' });
//     }
// };

// export const getMyAppointments = async (req, res) => {
//     try {
//         const bookings = await Booking.find({ user: req.userId });
//         if (!bookings.length) {
//             return res.status(404).json({ success: false, message: 'No appointments found' });
//         }
        
//         const doctorIds = bookings.map(booking => booking.doctor && booking.doctor.id).filter(id => id);
//         const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

//         res.status(200).json({ success: true, message: 'Appointments retrieved', data: doctors });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Something went wrong' });
//     }
// };
