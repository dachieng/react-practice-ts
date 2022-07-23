import { forwardRef, useEffect } from 'react';

const Input = forwardRef<HTMLInputElement | null>((props, ref) => {
  useEffect(() => {
    //   @ts-expect-error 2339 FIXME: Property 'current' does not exist on type '(instance: HTMLInputElement | null) => void'.ts
    ref?.current?.focus();
  }, []);

  return <input ref={ref} />;
});

export default Input;
