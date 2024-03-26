import styled from 'styled-components';

const Grid = styled.div(props => ({
  padding: '0 24px',
  maxWidth: 1120,
  margin: props.container ? 'auto' : '0',
  width: props.desktop ? (props.desktop * props.theme.grid.desktop.size + props.theme.grid.desktop.pad) - props.theme.grid.desktop.pad : '100%',

  '@media only screen and (width > 1160px)': {
    padding: 0,
  }
}));

export default Grid;