import React, {Component} from 'react';
import {MegaMenu} from 'primereact/megamenu';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
class MegaMenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Overview', icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Goals', icon: 'fa fa-bullseye'
                },
                {
                    label: 'Diary', icon:'fa fa-book',
                    items: [
                        [
                            {
                                label: 'Gained',
                                items: [{label:'0'}, {label: 'KCal'}]
                            },
                            {
                                label: 'Fat',
                                items: [{label:'0'}, {label: 'gm'}]
                            }
                        ],
                        [
                            {
                                label: 'Carbohydrates',
                                items: [{label:'0'}, {label: 'gm'}]
                            },
                            {
                                label: 'Protien',
                                items: [{label:'0'}, {label: 'gm'}]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users', icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'Doctors',
                                items: [{label: 'Reports'}, {label: 'Suggestions'}]
                            },
                            {
                                label: 'Patient',
                                items: [{label: 'Medication Tracker'}]
                            },
                        ]
                    ]
                },
                {
                    label: 'Medication Reminder', icon:'fa fa-medkit',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                            },
                            {
                                label: 'Setting 2',
                                items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                            },
                            {
                                label: 'Setting 3',
                                items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                            }
                        ]
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Healthify</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <MegaMenu model={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default MegaMenuDemo;
