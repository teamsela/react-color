import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import SwatchesColor from './SwatchesColor'

export const SwatchesGroup = ({ onClick, onSwatchHover, group, active }) => {
  const styles = reactCSS({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '24px',
        float: 'left',
        marginRight: '1px',
      },
    },
  })

  return (
    <div style={ styles.group }>
      { map(group, (color, i) => (
        <SwatchesColor
          key={ color }
          color={ color }
          active={ color.toLowerCase() === active }
          first={ i === 0 }
          last={ i === group.length - 1 }
          onClick={ onClick }
          onSwatchHover={ onSwatchHover }
        />
      )) }
    </div>
  )
}

export default SwatchesGroup
