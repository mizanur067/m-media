
import React, { useState } from "react";
import '../CSS/Upload.css'
import {
  LayoutDashboard,
  Clapperboard,
  BarChart3,
  Users,
  Captions,
  Settings,
  MessageSquareWarning,
  Menu,
  Filter,
} from "lucide-react";
const UploadCard = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);
    const [activeTab, setActiveTab] =
  useState("Videos");

  const menuItems = [
    {
      icon: <LayoutDashboard size={24} />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <Clapperboard size={24} />,
      label: "Content",
      active: true,
    },
    {
      icon: <BarChart3 size={24} />,
      label: "Analytics",
    },
    {
      icon: <Users size={24} />,
      label: "Community",
    },
    {
      icon: <Captions size={24} />,
      label: "Subtitles",
    },
  ];

  const tabs = [
    "Inspiration",
    "Videos",
    "Shorts",
    "Live",
    "Posts",
    "Playlists",
    "Podcasts",
    "Promotions",
    "Collaborations",
  ];

  return (
    <div className="studio_page_layout">
      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile_menu_btn_studio"
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
      >
        <Menu size={24} />
      </button>

      {/* SIDEBAR */}
      <aside
        className={`sidebar_studio ${
          sidebarOpen
            ? "sidebar_open_studio"
            : ""
        }`}
      >
        {/* CHANNEL */}
        <div className="channel_section_studio">
          <div className="channel_avatar_studio">
            L
          </div>

          <h2>Your channel</h2>

          <p>Lord Carson</p>
        </div>

        {/* MENU */}
        <div className="menu_list_studio">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu_item_studio ${
                item.active
                  ? "active_menu_studio"
                  : ""
              }`}
            >
              {item.icon}

              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* BOTTOM MENU */}
        <div className="bottom_menu_studio">
          <div className="menu_item_studio">
            <Settings size={24} />
            <span>Settings</span>
          </div>

          <div className="menu_item_studio">
            <MessageSquareWarning size={24} />
            <span>Send feedback</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main_content_studio">
        {/* HEADER */}
        <div className="content_header_studio">
          <h1>Channel content</h1>

          {/* TABS */}
          <div className="tabs_container_studio">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`tab_item_studio ${
                  tab === activeTab
                    ? "active_tab_studio"
                    : ""
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* FILTER */}
        <div className="filter_bar_studio">
          <Filter size={24} />

          <span>Filter</span>
        </div>

        {/* TABLE HEADER */}
        <div className="table_header_studio">
          <div className="video_col_studio">
            <input type="checkbox" />
            <span>Video</span>
          </div>

          <span>Visibility</span>

          <span>Restrictions</span>

          <span>Date ↓</span>

          <span>Views</span>

          <span>Comments</span>
        </div>

        {/* EMPTY STATE */}
        <div className="empty_state_studio">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="empty"
          />

          <p>No content available</p>
        </div>
      </main>
    </div>
  );
}

export default UploadCard