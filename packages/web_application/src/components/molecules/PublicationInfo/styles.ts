import styled from 'styled-components/native';

import { TColor } from '../../../styles/text';

export interface PublicationInfoStylePropsType {
  titleColor?: TColor;
}

export const Container = styled.View`
  width: 100%;
`;

export const HeaderContainer = styled.View`
  margin-bottom: 15px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 4px;
`;
