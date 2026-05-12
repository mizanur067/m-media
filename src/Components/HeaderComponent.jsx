import React,{useState} from 'react'
import {
    Menu,
    Search,
    Mic,
    Bell,
    Plus,
    Video,
    Radio,
    SquarePen,
} from "lucide-react";

import '../CSS/Header.css'
const HeaderComponent = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="navbar_header">
            {/* LEFT */}
            <div className="navbar_left_header">
                <button className="icon_btn_header">
                    <Menu size={24} />
                </button>

                <div className="logo_container_header">
                    <img
                        src={"logo.png"}
                        alt="Logo"
                        className="logo_image_header"
                    />

                    <span className="country_code_header">
                        IN
                    </span>
                </div>
            </div>

            {/* CENTER */}
            <div className="navbar_center_header">
                <div className="search_box_header">
                    <input
                        type="text"
                        placeholder="Search"
                    />

                    <button className="search_btn_header">
                        <Search size={22} />
                    </button>
                </div>

                <button className="mic_btn_header">
                    <Mic size={22} />
                </button>
            </div>

            {/* MOBILE SEARCH */}
            <div className="mobile_search_header">
                <button className="icon_btn_header">
                    <Search size={24} />
                </button>
            </div>

            {/* RIGHT */}
            <div className="navbar_right_header">
                {/* CREATE BUTTON */}
                <div className="create_wrapper_header">
                    <button
                        className="create_btn_header"
                        onClick={() =>
                            setOpenMenu(!openMenu)
                        }
                    >
                        <Plus size={20} />
                        <span>Create</span>
                    </button>

                    {/* DROPDOWN */}
                    {openMenu && (
                        <div className="dropdown_menu_header">
                            <div className="menu_item_header">
                                <Video size={25} />
                                <span>Upload video</span>
                            </div>

                            <div className="menu_item_header">
                                <Radio size={25} />
                                <span>Go live</span>
                            </div>

                            <div className="menu_item_header">
                                <SquarePen size={25} />
                                <span>Create post</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* NOTIFICATION */}
                <button className="icon_btn_header">
                    <Bell size={22} />
                </button>

                {/* PROFILE */}
                <div className="profile_header">
                    m
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent