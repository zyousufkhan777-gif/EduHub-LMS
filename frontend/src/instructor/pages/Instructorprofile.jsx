import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { InstructorContext } from "../../context/instructorContext";

const InstructorProfile = () => {
  const { backendURL, instructorToken } = useContext(InstructorContext);

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    country: "",
    skills: "",
    description: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  // GET PROFILE

  const loadProfile = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(`${backendURL}/api/instructor/profile`, {
        headers: {
          itoken: instructorToken,
        },
      });

      if (data.success) {
        setProfile(data.instructor);

        setFormData({
          name: data.instructor.name || "",

          specialization: data.instructor.specialization || "",

          experience: data.instructor.experience || "",

          country: data.instructor.country || "",

          skills: Array.isArray(data.instructor.skills)
            ? data.instructor.skills.join(",")
            : data.instructor.skills || "",

          description: data.instructor.description || "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (instructorToken) {
      loadProfile();
    }
  }, [instructorToken]);

  // UPDATE PROFILE

  const updateProfile = async () => {
    try {
      const dataForm = new FormData();

      dataForm.append("name", formData.name);
      dataForm.append("specialization", formData.specialization);

      dataForm.append("experience", formData.experience);

      dataForm.append("country", formData.country);

      dataForm.append("skills", formData.skills);

      dataForm.append("description", formData.description);

      if (image) {
        dataForm.append("image", image);
      }

      const { data } = await axios.post(
        `${backendURL}/api/instructor/update-profile`,

        dataForm,

        {
          headers: {
            itoken: instructorToken,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (data.success) {
        toast.success("Profile updated successfully");

        setEditMode(false);

        loadProfile();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // CHANGE PASSWORD

  const changePassword = async () => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/instructor/change-password`,

        passwordData,

        {
          headers: {
            itoken: instructorToken,
          },
        },
      );

      if (data.success) {
        toast.success("Password changed successfully");

        setPasswordMode(false);

        setPasswordData({
          oldPassword: "",
          newPassword: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  if (loading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="h-96 flex justify-center items-center">
        <h2 className="text-2xl text-red-500">Instructor not found</h2>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-40 h-40 rounded-full object-cover border"
          />

          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>

            <p className="text-gray-600">{profile.email}</p>

            <p>
              Specialization:
              {profile.specialization}
            </p>

            <p>
              Experience:
              {profile.experience}
            </p>

            <p>
              Country:
              {profile.country}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Skills</h2>

          <p>
            {Array.isArray(profile.skills)
              ? profile.skills.join(", ")
              : profile.skills}
          </p>

          <h2 className="text-xl font-bold mt-5">Description</h2>

          <p>{profile.description}</p>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Edit Profile
          </button>

          <button
            onClick={() => setPasswordMode(!passwordMode)}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Change Password
          </button>
        </div>

        {editMode && (
          <div className="mt-8 space-y-4">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            {Object.keys(formData).map((item) => (
              <input
                key={item}
                className="border p-3 w-full rounded"
                placeholder={item}
                value={formData[item]}
                onChange={(e) =>
                  setFormData({
                    ...formData,

                    [item]: e.target.value,
                  })
                }
              />
            ))}

            <button
              onClick={updateProfile}
              className="bg-blue-700 text-white px-5 py-2 rounded"
            >
              Save Profile
            </button>
          </div>
        )}

        {passwordMode && (
          <div className="mt-8 space-y-4">
            <input
              type="password"
              placeholder="Old Password"
              className="border p-3 w-full"
              value={passwordData.oldPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,

                  oldPassword: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="New Password"
              className="border p-3 w-full"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({
                  ...passwordData,

                  newPassword: e.target.value,
                })
              }
            />

            <button
              onClick={changePassword}
              className="bg-green-700 text-white px-5 py-2 rounded"
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstructorProfile;
