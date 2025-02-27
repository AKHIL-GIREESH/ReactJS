import React from 'react'
import { EditorContainerType, EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea';

type ComponentProps = EditorContainerType & {
  recFunc: (prop: EditorContainerType | EditorElementType) => JSX.Element;
};

const Component: React.FC<ComponentProps> = ({ contents, styles, kind, recFunc, parent , id }) => {
  return (
    <>
        <div style={styles}>
            {contents?.map(item => recFunc(item))}
        </div>
        <TPlaceHolderArea parent={parent} id={id} key={parent+id}/>
    </>
  );
};

export default Component;
