import styled from 'styled-components/native';

import Constants from 'expo-constants';

const ScreenLimitator = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export default ScreenLimitator;
