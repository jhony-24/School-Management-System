import React , { FC } from 'react';
import S from './style';
import Icon , { IconPropsType } from '../../atoms/Icon';
import { Icons } from '../../../styles/icon';
import Input , {InputPropsType} from '../../atoms/Input';

type InputLoginPropsType = IconPropsType & InputPropsType;

const InputLogin : FC<InputLoginPropsType>= ({ icon , type }) => {
  return (
    <S.content>
      <S.contentIcon>
        <Icon icon={icon}/>
      </S.contentIcon>
      <S.contentInput>
        <Input type={type}/>
      </S.contentInput>
    </S.content>
  )
}

export default InputLogin;