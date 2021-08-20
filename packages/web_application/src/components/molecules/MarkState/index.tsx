import * as React from 'react';
import { View } from 'react-native';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import * as S from './styles';

type MarkState = 'bad' | 'ok' | 'loading' | 'lock';

type TProps = {
  state?: MarkState;
  datetime?: string;
};

const MarkState = ({ state, datetime }: TProps) => {
  const normalizeState = state || 'ok';

  return (
    <S.Container>
      <View>
        <View>
          <Text>{titleText[normalizeState]}</Text>
          <Text>
            {subtitleText[normalizeState].replace(
              '{{datetime}}',
              datetime || ''
            )}
          </Text>
        </View>
        {state !== 'loading' && <Button text={buttonText[normalizeState]} />}
      </View>
    </S.Container>
  );
};

MarkState.defaultProps = {
  state: 'ok',
};

const titleText: Record<MarkState, string> = {
  bad: 'Aun no has marcado tu asistencia',
  loading: 'Marcando asistencia',
  lock: 'Asistencia Cerrada',
  ok: 'Asistencia Marcada',
};

const subtitleText: Record<MarkState, string> = {
  bad: 'La asistencia esta disponible ahora',
  loading: 'Este proceso puede llevar unos momentos',
  lock: 'Tu profesor/tutor ha cerrado la asistencia del dia',
  ok: 'Marcada a las {{datetime}}',
};

const buttonText: Record<MarkState, string> = {
  bad: 'Marcar Asistencia',
  lock: 'Marcar Asistencia',
  ok: 'Cerrar Ventana',
  loading: '',
};

export default MarkState;
