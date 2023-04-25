import { ChangeEventHandler } from 'react';

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: IProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => onChange(value);

  return <input type="text" value={value} onChange={handleChange} />;
}
