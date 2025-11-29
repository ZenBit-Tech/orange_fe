import { useAppDispatch, useAppSelector } from '@/store';

export const useFooter = () => {
  const isTheme = useAppSelector((state) => state.darkTheme.isBlackTheme);
  const dispatch = useAppDispatch();
  return { isTheme, dispatch };
};
