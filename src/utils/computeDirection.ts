type ComputeDirectionArgumentsType = {
  isRef: boolean;
  currentY: number;
  currentX: number;
  lastY: number;
  lastX: number;
};

export const computeDirection = ({
  isRef,
  currentY,
  currentX,
  lastY,
  lastX,
}: ComputeDirectionArgumentsType) => {
  // Set NONE if both positions stay the same
  if (currentY === lastY && currentX === lastX) {
    return 'NONE';
  }

  // Ref case
  if (isRef) {
    if (currentX === lastX) {
      // Scroll on Y axis
      return lastY > currentY ? 'DOWN' : 'UP';
    }

    // Scroll on X axis
    return lastX > currentX ? 'RIGHT' : 'LEFT';
  }

  // Window case
  if (currentX === lastX) {
    // Scroll on Y axis
    return lastY < currentY ? 'DOWN' : 'UP';
  }

  // Scroll on X axis
  return lastX < currentX ? 'RIGHT' : 'LEFT';
};
