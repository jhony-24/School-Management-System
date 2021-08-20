import * as React from 'react';
import { View } from 'react-native';
import { BSize } from '../../../styles/button';
import { Fonts } from '../../../styles/font';
import { MarkStateOptions } from '../../../styles/markState';
import { TColor } from '../../../styles/text';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import * as S from './styles';

type MarkStatusWithoutLoading = Exclude<
  MarkStateOptions,
  MarkStateOptions.LOADING
>;

type TProps = {
  state?: MarkStateOptions;
  datetime?: string;
};

const MarkState = ({ state, datetime }: TProps) => {
  const normalizeState = state || MarkStateOptions.Ok;
  const normalizeTitleColor = titleColor[state || MarkStateOptions.Ok];

  return (
    <S.Container>
      <View>
        <S.ImageStatus>
          <Image source={imageStatus[state as MarkStatusWithoutLoading]} />
        </S.ImageStatus>
        <S.Detail>
          <Text weight={Fonts.BOLD} color={normalizeTitleColor}>
            {titleText[normalizeState]}
          </Text>
          <Text>
            {subtitleText[normalizeState].replace(
              '{{datetime}}',
              datetime || ''
            )}
          </Text>
        </S.Detail>
        {state !== MarkStateOptions.LOADING && (
          <Button text={buttonText[normalizeState]} size={BSize.SMALL} />
        )}
      </View>
    </S.Container>
  );
};

MarkState.defaultProps = {
  state: 'ok',
};

const imageStatus: Record<MarkStatusWithoutLoading, any> = {
  bad: require('../../../assets/icons/mark-bad.png'),
  lock: require('../../../assets/icons/mark-lock.png'),
  ok: require('../../../assets/icons/mark-ok.png'),
};

const titleColor: Record<MarkStateOptions, TColor> = {
  bad: TColor.RED,
  loading: TColor.BLUE,
  ok: TColor.GREEN,
  lock: TColor.BLUE,
};

const titleText: Record<MarkStateOptions, string> = {
  bad: 'Aun no has marcado tu asistencia',
  loading: 'Marcando asistencia',
  lock: 'Asistencia Cerrada',
  ok: 'Asistencia Marcada',
};

const subtitleText: Record<MarkStateOptions, string> = {
  bad: 'La asistencia esta disponible ahora',
  loading: 'Este proceso puede llevar unos momentos',
  lock: 'Tu profesor/tutor ha cerrado la asistencia del dia',
  ok: 'Marcada a las {{datetime}}',
};

const buttonText: Record<MarkStateOptions, string> = {
  bad: 'Marcar Asistencia',
  lock: 'Marcar Asistencia',
  ok: 'Cerrar Ventana',
  loading: '',
};

export default MarkState;
