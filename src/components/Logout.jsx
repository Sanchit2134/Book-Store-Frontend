import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout Successfully");

      // Close the modal (if open)
      const modal = document.getElementById("my_modal_3");
      if (modal) modal.close();

      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Logout error: ", error);
      
      // Display error message
      toast.error("An error occurred during logout. Please try again.");
      
      // Optional: Delay further actions (like reload) if necessary
      setTimeout(() => {
        // Perform additional actions if needed
      }, 3000);
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
