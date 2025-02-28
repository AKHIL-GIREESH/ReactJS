import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EditorContainerType, EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea';

type ComponentProps = {index:number} & EditorContainerType & {
  recFunc: (prop: EditorContainerType | EditorElementType,index:number) => JSX.Element;
};

const Component: React.FC<ComponentProps> = ({ contents, styles, kind, recFunc, parent , id, index}) => {
  
  const placeHolderArea = uuidv4()

  return (
    <>
        <div style={styles}>
            <TPlaceHolderArea parent={id} id={placeHolderArea} key={id+placeHolderArea} index={0}/>
            {contents?.map((item,index) => recFunc(item,index))}
        </div>
        <TPlaceHolderArea parent={parent} id={id} key={parent+id} index={index+1}/>
    </>
  );
};

export default Component;
