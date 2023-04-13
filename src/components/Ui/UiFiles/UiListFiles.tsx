const UiListFiles = () => {
  return (
    <div>
      <ul className="list-disc font-bold">
        <li className="items-center text-xs align-middle inline-flex gap-4">
          <button
            type="button"
            className="p-1 bg-indigo-500 text-white rounded-md"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UiListFiles;
