interface sizeProps{
  width: string;
  height: string;
}
const ArrowBlack = ({width, height}:sizeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.6667 28.3333L28.3333 11.6666M28.3333 11.6666H11.6667M28.3333 11.6666V28.3333'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ArrowBlack;
