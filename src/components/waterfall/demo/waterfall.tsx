import React, { FC, useState } from 'react';
import WaterFall from '../waterfall';
import './waterfall.less';
import { NewWaterFallProps } from '../../../interface/waterfall';

import imageList from './data'

const NewWaterFall: FC<NewWaterFallProps> = props => {
  // const { imageList } = props;

  const [currentEnterId, setCurrentEnterId] = useState<number>(0);

  const mouseEnter = (id: number) => {
    console.log('enter', id);
    setCurrentEnterId(id);
  };

  const mouseLeave = (id: number) => {
    console.log('leave', id);
    setCurrentEnterId(0);
  };

  const renderItem = ({ id, value, img }: any, index: number) => {
    return (
      <div key={index} className="waterfall-item-wrapper">
        <div>{currentEnterId === id ? <span>{id}</span> : <span>00000</span>}</div>
        <div className="waterfall-item-image" onMouseEnter={e => mouseEnter(id)} onMouseLeave={e => mouseLeave(id)}>
          <img src={img} alt="" style={{ width: 180 }} />
        </div>
      </div>
    );
  };

  return <WaterFall data={imageList} renderItem={renderItem} />;
};

export default NewWaterFall;
