interface Props {
  title: string;
  subtitle: string;
}

const UiHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="space-y-8 py-8 border-b border-gray-300">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gary-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default UiHeader;
