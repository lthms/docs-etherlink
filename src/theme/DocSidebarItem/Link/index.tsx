import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';

import styles from './styles.module.css';

const ICONS_PATH = ['/img/HiOutlineStatusOnline.svg', '/img/MdCode.svg', '/img/Gitlab.svg']

const isTopSection = (name: string) => {
  return name === 'Documentation' || name === 'Status' || name === 'Developers' || name === 'GitHub'
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): JSX.Element {  
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      style={{
        marginTop: `${!isInternalLink && index === 0 && '40px'}`,
        marginBottom: `${!isInternalLink && index === 2 && '40px'}`
      }}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        style={{
          marginBottom: `${!isInternalLink && isTopSection(item.label) && '8px'}`,
          backgroundColor: `${!isInternalLink && isTopSection(item.label) &&  '#151515'}`,
          borderRadius: `${!isInternalLink && isTopSection(item.label) &&  '100px'}`,
          padding: `${!isInternalLink && isTopSection(item.label) &&  '10px 16px'}`,
        }}
        {...props}>
        <div className={styles.leftHand}>
          {!isInternalLink && <img src={ICONS_PATH[index]} alt='external link icon' />}
          {label}
        </div>
        {!isInternalLink && <img src='/img/FiArrowUpRight.svg' alt='external link icon' />}
      </Link>
    </li>
  );
}
