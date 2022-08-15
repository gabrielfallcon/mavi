import Link from 'next/link';
import { ReactNode } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  icon?: boolean;
  children?: ReactNode;
}


export function Button({ ...props }: ButtonProps) {
  return (
    <Link href='https://api.whatsapp.com/send?phone=5511950807738&text=Olá' target='_blank'>
      <a className={clsx(styles.btnLink, props.variant === 'primary' ? styles.primary : styles.secondary )}>
        {props.icon && <FaWhatsapp size={24}/>}
        
        {props.children}
      </a>
    </Link>
  )
}