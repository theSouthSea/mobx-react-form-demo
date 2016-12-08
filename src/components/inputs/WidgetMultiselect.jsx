import React from 'react';
import { observer } from 'mobx-react';
import { Multiselect } from 'react-widgets';

export default observer(({ field, options = [] }) => (
  <div>

    <div>
      <b>{field.label}</b>
      <i>{field.error}</i>
    </div>
    <Multiselect
      data={options}
      value={field.value}
      onChange={field.sync}
    />

  </div>
));
