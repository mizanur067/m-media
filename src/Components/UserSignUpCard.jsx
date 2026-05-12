import React ,{useState}from 'react'
import '../CSS/user-signup.css'
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
} from "lucide-react";
const UserSignUpCard = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="signup_page_container_auth">
      {/* LEFT SECTION */}
      <div className="signup_left_section_auth">
        <div className="signup_brand_auth">
          <h1>m-media</h1>

          <p>
            Share videos, shorts, and
            moments with the world.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="signup_right_section_auth">
        <form
          className="signup_form_auth"
          onSubmit={handleSubmit}
        >
          <h2>Create Account</h2>

          <p className="signup_subtitle_auth">
            Start your creator journey today
          </p>

          {/* USERNAME */}
          <div className="input_group_auth">
            <User size={20} />

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="input_group_auth">
            <Mail size={20} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input_group_auth">
            <Lock size={20} />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="password_toggle_auth"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="signup_button_auth"
          >
            Create Account
          </button>

          {/* LOGIN */}
          <p className="login_text_auth">
            Already have an account?

            <span> Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserSignUpCard