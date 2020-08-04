import React from 'react';

interface IProps {
  name: string;
}

const Example = ({ name }: IProps): JSX.Element => <>{name}</>;

export default Example;
