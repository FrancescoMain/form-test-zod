import { UiButtonProps } from "./type";

export const UiButton = ({ title, onClick, solid }: UiButtonProps) => {
  let classes = "py-2 px-4 border raounded-md text-sm font-medium";
  let noSolidClasses =
    "bt-white border-gray-300 shadow-sm text-gray-700 hover:bg-gray-50 foucs:outline";
  let solidClasses =
    "bg-indigo-600 hover:bg-indigo-700 ml-3 inline-flex justify-center";
  if (solid) {
    classes = `${classes} ${solidClasses}`;
  } else {
    classes = `${classes} ${noSolidClasses}`;
  }
  return (
    <div>
      <button type="button" onClick={onClick} className={classes}>
        {title}
      </button>
    </div>
  );
};
