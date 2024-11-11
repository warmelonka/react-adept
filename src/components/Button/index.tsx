import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: Props) {
  const { children, onClick, isDisabled } = props;

  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
