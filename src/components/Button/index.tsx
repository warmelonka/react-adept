import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
  const { children, type, onClick, isDisabled } = props;

  return (
    <button type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
