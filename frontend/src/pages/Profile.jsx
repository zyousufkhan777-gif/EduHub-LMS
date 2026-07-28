import React, { useState } from "react";
import profile_pic from "../assets/profile_pic.png";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
const Profile = () => {
  const {
    backendURL,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();

      if (image) {
        formData.append("image", image);
      }
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("country", userData.country);

      const { data } = await axios.post(
        backendURL + "/api/user/update-profile",
        formData,
        { headers: { token } },
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-3xl mx-auto py-10 px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Profile</h1>
          <p className="text-gray-600">Manage your personal information</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            {isEdit ? (
              <label htmlFor="file" className="cursor-pointer">
                <img
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
                />

                <input
                  id="file"
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            ) : (
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : userData.image || profile_pic
                }
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
              />
            )}
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Name</label>

            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full border rounded-lg p-3"
              />
            ) : (
              <p className="text-lg">{userData.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Email</label>
              <p className="text-lg">{userData.email}</p>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Phone Number</label>

            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full border rounded-lg p-3"
              />
            ) : (
              <p className="text-lg">{userData.phone}</p>
            )}
          </div>

          {/* Country */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Country</label>

            {isEdit ? (
              <input
                type="text"
                value={userData.country}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    country: e.target.value,
                  }))
                }
                className="w-full border rounded-lg p-3"
              />
            ) : (
              <p className="text-lg">{userData.country}</p>
            )}
          </div>

          {/* Joined */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Joined</label>
              <p className="text-lg">{userData.createdAt?.slice(0, 10)}</p>
          </div>

          {/* Courses Enrolled*/}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Courses Enrolled</label>
              <p className="text-lg">{userData.enrolledCourses?.length || 0}</p>
          </div>

          {/* completed */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Courses Completed
            </label>
              <p className="text-lg">
                {userData.completedCourses?.length || 0}
              </p>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            {isEdit ? (
              <button
                className="border border-blue-600 px-8 py-2 cursor-pointer rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={updateUserProfileData}
              >
                Save Information
              </button>
            ) : (
              <button
                className="border border-blue-600 px-8 py-2 cursor-pointer rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
