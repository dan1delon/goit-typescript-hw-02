import { forwardRef } from 'react';
import css from './LoadMoreBtn.module.css';

type Props = {
  loadMore: () => void;
};

const LoadMoreBtn = forwardRef(({ loadMore }: Props, ref: any) => {
  return (
    <div>
      <button type="button" onClick={loadMore} className={css.btn} ref={ref}>
        Load more
      </button>
    </div>
  );
});

LoadMoreBtn.displayName = 'LoadMoreBtn';

export default LoadMoreBtn;
