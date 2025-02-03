import React from 'react'
import { EditorContainerType, EditorElementType } from '../../types/editor'

type ComponentProps = EditorContainerType & {
  recFunc: (prop: EditorContainerType | EditorElementType) => JSX.Element;
};

const Component: React.FC<ComponentProps> = ({ contents, styles, kind, recFunc }) => {
  return (
    <div style={styles}>
      {contents?.map(item => recFunc(item))}
    </div>
  );
};

export default Component;
