import { isValidElement, ReactElement, ReactNode } from 'react';

import { Slottable } from '@/utils/slot';

function isSlottable(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === Slottable;
}

export { isSlottable };