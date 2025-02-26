import React from 'react'
import { EditorContainerType, EditorElementType } from '../../types/editor'
import TPlaceHolderArea from './TPlaceHolderArea';

type ComponentProps = EditorContainerType & {
  recFunc: (prop: EditorContainerType | EditorElementType) => JSX.Element;
};

const Component: React.FC<ComponentProps> = ({ contents, styles, kind, recFunc }) => {
  return (
    <>
        <div style={styles}>
            {contents?.map(item => recFunc(item))}
        </div>
        <TPlaceHolderArea/>
    </>
  );
};

export default Component;
