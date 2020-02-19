import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {Diary2} from './Diary2';
import '../css/diary.css';

class Diary extends Component {

  render() {
    const header = (
      <img alt="Card" src='showcase/resources/demo/images/usercard.png' />
    );
    const footer = (
      <span>
        <Button label="Save" icon="pi pi-check" />
        <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" />
      </span>
    );
    return (
      <div>
        <div className="content-section implementation">
          <Card title="Today" style={{ width: '500px', marginLeft: '30%', height: '30%' }}>
            <div class="flex-container">
              <div className='gainedCal BoxStyle'>
                <ul>
                  <li>Gained</li>
                  <li>1000</li>
                  <li>KCal</li>
                </ul>
              </div>
              <div className='leftsteps BoxStyle'>
                <span>Left</span><br />
                <span>2700</span>
              </div>
              <div className='Burned BoxStyle'>
                <ul>
                  <li>Burned</li>
                  <li>0</li>
                  <li>KCal</li>
                </ul>
              </div>
              <div className='Fat BoxStyle'>
                <ul>
                  <li>Fat</li>
                  <li>0</li>
                  <li>gm</li>
                </ul>
              </div>
              <div className='Carbo BoxStyle'>
                <ul>
                  <li>Carbs</li>
                  <li>0</li>
                  <li>gm</li>
                </ul>
              </div>
              <div className='Protien BoxStyle'>
                <ul>
                  <li>Protien</li>
                  <li>0</li>
                  <li>gm</li>
                </ul>
              </div>
            </div>
          </Card>

          <br /><br />
        </div>
        <Diary2/>
      </div>
    )
  }
}

export default Diary;