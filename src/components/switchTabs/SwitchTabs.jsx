import { useState } from "react";
import "./style.scss";
const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [tabBg, setTabBg] = useState(0);
    const activeTab = (tab, index) => {
        setTabBg(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 100);
        onTabChange(tab, index);
    };
    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data?.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left: tabBg }} />
            </div>
        </div>
    );
};

export default SwitchTabs;
