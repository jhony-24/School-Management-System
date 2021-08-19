import * as React from 'react';
import S from './style';

import Icon, { IconPropsType } from '../../atoms/Icon';
import Input, { InputPropsType } from '../../atoms/Input';

type InputLoginPropsType = IconPropsType & InputPropsType;

const InputLogin: React.FC<InputLoginPropsType> = ({ icon, type }) => {
  return (
    <S.content>
      <S.contentIcon>
        <Icon icon={icon} />
      </S.contentIcon>
      <S.contentInput>
        <Input type={type} />
      </S.contentInput>
    </S.content>
  );
};

export default InputLogin;
