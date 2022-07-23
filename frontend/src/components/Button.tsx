import React, { useEffect } from 'react';

const Button = React.forwardRef<HTMLButtonElement>((props, ref) => {
  useEffect(() => {
    //TODO: Research and remove the expect error
    // @ts-expect-error (2339) FIXME: Property 'current' does not exist on type '(instance: HTMLButtonElement | null) => void'
    ref?.current?.click();
  }, [ref]);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button ref={ref} onClick={handleClick}>
      Hello
    </button>
  );
});

export default Button;
