import React, { useState } from "react";
import { useTabs } from "react-headless-tabs";

export default function NavigationTabs(props) {

    const allItems = [{'All': 'all',
                    'Currently reading': 'currentlyReading',
                    'Want to read': 'wantToRead',
                    'Read': 'read'}];
    
    const items = allItems.map((item) => (Object.keys(item)))[0]

    const [currentTab, setTab] = useState(items[1]);
    
    const [selectedTab, setSelectedTab] = useTabs(items, items[1]);

    const changeTab = (e, item) => {
        e.preventDefault();
    
        const target = (e.target).dataset.tab;
        if (typeof target !== "string") {
          return;
        }
        setSelectedTab(target);

        setTab(item);
        props.onClickNav(allItems[0][item])
      };
    
    const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);

    return (
        <div>
          <nav className='nav-tabs-container'>
            <div className='tab-bottom-line' style={{
                left: `calc((100% / ${items.length}) * ${getSelectedTabIndex()})`,
                width: `calc(100% / ${items.length})`}} />
            <div className='tab-links'>
              {items.map((item) => {
                return (
                  <a className='link'
                    key={item}
                    style={{
                        color: selectedTab === item ? "red" : "black",
                        background: selectedTab === item ? "#fcfcfc" : "#fff"
                    }}
                    onClick={(e) => currentTab !== item ? changeTab(e, item) : ()=>{}}
                    data-tab={item}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </nav>
     
        </div>
      )
}
