import * as React from 'react';
import * as S from './styles';

import { ActivityIndicator, Image } from 'react-native';

import { Fonts } from '../../../styles/font';
import { TColor, TSize } from '../../../styles/text';
import { BSize } from '../../../styles/button';
import { MarkStateOptions } from '../../../styles/mark_state';

import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

type MarkStatusWithoutLoading = Exclude<
  MarkStateOptions,
  MarkStateOptions.LOADING
>;

type TProps = {
  state?: MarkStateOptions;
  datetime?: string;
  onButtonPress?(): void;
};

const MarkState = ({ state, datetime, onButtonPress }: TProps) => {
  const normalizeState = state || MarkStateOptions.Ok;
  const normalizeTitleColor = titleColor[state || MarkStateOptions.Ok];

  return (
    <S.Container>
      <S.ImageStatus>
        {state === MarkStateOptions.LOADING ? (
          <ActivityIndicator size={40} color={String(TColor.BLUE)} />
        ) : (
          <Image source={imageStatus[state!]} />
        )}
      </S.ImageStatus>
      <S.Detail>
        <Text weight={Fonts.BOLD} color={normalizeTitleColor}>
          {titleText[normalizeState]}
        </Text>
        <Text size={TSize.SMALL}>
          {subtitleText[normalizeState].replace('{{datetime}}', datetime || '')}
        </Text>
      </S.Detail>
      {state !== MarkStateOptions.LOADING && (
        <Button
          size={BSize.SMALL}
          onPress={onButtonPress}
          text={buttonText[normalizeState]}
          disabled={state === MarkStateOptions.LOCK}
        />
      )}
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
