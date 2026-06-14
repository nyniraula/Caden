type Props = {
  error: string;
};

const ErrorText = ({ error }: Props) => {
  return (
    <span className="self-start text-xs text-red-400 md:text-sm">{error}</span>
  );
};

export default ErrorText;
