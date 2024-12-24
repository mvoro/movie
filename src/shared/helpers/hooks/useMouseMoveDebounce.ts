import { useEffect, useState } from 'react';

export const useMouseMoveDebounce = (
    delay: number,
): [boolean, () => void, () => void] => {
    const [isMouseMoving, setIsMouseMoving] = useState<boolean>(false);

    useEffect(() => {
        if (isMouseMoving) {
            const handler = setTimeout(() => {
                setIsMouseMoving(true);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }
    }, [isMouseMoving, delay]);

    const handleMouseMove = () => {
        setIsMouseMoving(false);
    };

    const handleMouseLeave = () => {
        setIsMouseMoving(true);
    };

    return [isMouseMoving, handleMouseMove, handleMouseLeave];
};
