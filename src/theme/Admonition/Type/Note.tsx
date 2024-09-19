import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Note';
import AdmonitionLayout from '@theme/Admonition/Layout';
import IconNote from '@theme/Admonition/Icon/Note';

import styles from './styles.module.css'

const infimaClassName = 'alert alert--secondary';

const defaultProps = {
  icon: <IconNote />,
  title: (
    <Translate
      id="theme.admonition.note"
      description="The default label used for the Note admonition (:::note)">
      note
    </Translate>
  ),
};

export default function AdmonitionTypeNote(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(props.className, styles.note)}>
      {props.children}
    </AdmonitionLayout>
  );
}
