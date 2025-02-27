import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { EditorContainerType, EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea';

type ComponentProps = EditorContainerType & {
  recFunc: (prop: EditorContainerType | EditorElementType) => JSX.Element;
};

const Component: React.FC<ComponentProps> = ({ contents, styles, kind, recFunc, parent , id }) => {
  
  const placeHolderArea = uuidv4()

  return (
    <>
        <div style={styles}>
            <TPlaceHolderArea parent={id} id={placeHolderArea} key={id+placeHolderArea}/>
            {contents?.map(item => recFunc(item))}
        </div>
        <TPlaceHolderArea parent={parent} id={id} key={parent+id}/>
    </>
  );
};

export default Component;
