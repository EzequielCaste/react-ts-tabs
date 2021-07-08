import React, {useState} from 'react';
import './App.css';

import tabContent from './tab-content.json';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="App">
      <h2>Experience</h2>
      <div className="underline"></div>

      <div className="container">
        <div className="tabs-container">
          {tabContent.map((tab) => (
            <button
              className={
                activeTab === tab.order ? 'button button-active' : 'button'
              }
              onClick={() => setActiveTab(tab.order)}
            >
              {tab.company}
            </button>
          ))}
          {/* <button onClick={() => setActiveTab(1)}>Tab 1</button>
          <button onClick={() => setActiveTab(2)}>Tab 2</button>
          <button onClick={() => setActiveTab(3)}>Tab 3</button> */}
        </div>
        <div className="content-tabs">
          {tabContent.map((content) => (
            <div
              className={
                activeTab === content.order ? 'active-content' : 'content'
              }
            >
              <h3 className="title">{content.title}</h3>
              <div className="company">{content.company}</div>
              <div className="dates">{content.dates}</div>
              <div className="duties-container">
                {content.duties.map((duty) => (
                  <>
                    <div className="duties">
                      <div>
                        {' '}
                        <i className="fas fa-angle-double-right"></i>{' '}
                      </div>
                      <p>{duty}</p>
                    </div>
                  </>
                ))}
              </div>
              <button className="more-info">more info</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
