import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrice from './tabs_nav/TabPrice';
import '../css/tab_nav.css';
import TabContentOne from './TabContentOne';

export default class TabComponent extends Component {
    state = {
        tabIndex: 0,
    }
    render() {
        return (
            <div>
                <Tabs className="tabs"
                    selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor />
                            <p style={{ marginBottom: '1.875rem' }}><strong>No commitment</strong><br />
                                Cancel online anytime</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p>Watch anywhere</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrice />
                            <p><strong>Pick your prices</strong></p>
                        </Tab>
                    </TabList>
                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}